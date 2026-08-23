# Charles Schwab — Full Stack Lead Developer (Contracting) — Interview Prep

---

## Angular

- Walk me through the architecture of an Angular app you led — module structure, lazy loading, shared/core modules.
  - **Module structure:-** I organized it around Angular's core/shared/feature pattern.
  - **Core module:-** singleton, app-wide stuff loaded once: auth interceptor, error interceptor, the auth guard, app-level services like the current-user/session service. Imported once in AppModule and guarded against re-import.
  - **Shared module —** reusable, stateless building blocks: common UI components (buttons, modals, file-upload widget, data tables), pipes, and directives used across multiple features. No business logic lives here — just presentation.
  - **Feature modules —** one per business capability, each lazy-loaded on its own route: an OffersModule for creating/managing offers, a RewardsModule for reward management, and a BulkRegistrationModule for the file-upload/bulk-registration flow. Each feature module owns its own components, services, and routing.

  - **Lazy loading:-** Each feature module is lazy-loaded via loadChildren in the routing config, so a rep landing on the Offers screen doesn't pay the bundle cost for Bulk Registration or Rewards until they navigate there. That kept our initial bundle small and load times fast, which mattered because reps are often on the app throughout the day and first-load speed affected adoption.

  - **Bulk registration flow specifically:-** That module has a file-upload component (using the shared upload widget) that pushes the file to S3 — either via a presigned URL fetched from our backend, or through a direct-to-S3 upload API. Once the file lands in S3, an S3 event triggers a Lambda that parses the file and calls our registration API to process each record. On the Angular side, since that processing is async, we polled a status endpoint (or used a notification/status service) to show the rep upload progress and success/failure results, rather than blocking the UI waiting on a synchronous response.

  - **Cross-cutting concerns-** Auth guards protect routes based on rep roles/permissions, an HTTP interceptor attaches the auth token and handles token refresh, and a global error interceptor standardizes how API errors surface to the UI so every feature module doesn't reimplement error handling."

  - **Bulk regestration**
    - Since the bulk registration flow is asynchronous by nature — file lands in S3, Lambda picks it up, calls the registration API per record, and that can take anywhere from seconds to a couple minutes depending on file size — I couldn't just wait on a synchronous HTTP response in Angular.

    - What I did: after the upload to S3 succeeds, the Angular app gets back a batch/job ID (either from the presigned-URL API or a follow-up call), and then polls a status endpoint at a set interval — say every few seconds — to check progress: queued, processing, completed, with a count of success/failure records. I showed that as a progress indicator in the UI so the rep isn't left staring at a spinner with no feedback, and once it completes, I surfaced a summary — how many records succeeded, and a downloadable/viewable list of failures with reasons, since bulk uploads often have some rows that fail validation.

    - I chose polling over WebSockets deliberately — this wasn't a high-frequency, low-latency requirement, and reps aren't watching the screen character-by-character; a few-second polling interval was perfectly acceptable UX and much simpler to build and operate than standing up a WebSocket/pub-sub channel just for this one flow. If I were building a feature where near-real-time updates truly mattered — like a live dashboard many reps watch simultaneously — I'd lean toward WebSockets or server-sent events instead, but here it would have been over-engineering.

    - One thing I made sure to handle: if a rep navigates away and comes back, or refreshes, the status polling should resume based on the job ID rather than losing track of an in-flight upload — so I persisted the job ID (e.g., in a query param or a lightweight local state) rather than only holding it in component memory."

- How do you manage state in Angular — services with RxJS Subjects, NgRx, or something else? When would you introduce NgRx vs. plain services?
  - Offers and Rewards are related — a reward is often attached to an offer — so there's a natural question of how those two feature modules share state without becoming tightly coupled.

  - I avoided reaching for NgRx by default here. The interactions were fairly contained — mainly 'when creating/editing an offer, let the rep attach or look up an existing reward' — so I used a shared, injectable service (provided in root, or in a shared module) that exposes the cross-cutting data both features need, like a lookup of available rewards, via RxJS BehaviorSubject/observables. Each module subscribes to what it needs rather than modules importing each other directly or passing data through routes.

  - **Where I drew the line for NgRx:** if the app had gotten to the point where offer state, reward state, and bulk-registration status all needed to interact in complex ways with many components reading and writing the same state — especially with things like undo, time-travel debugging, or many simultaneous async updates — that's when I'd introduce NgRx. For this app, the interaction was narrow enough that a shared service with RxJS kept things simple and easier for the team to reason about, and I'm cautious about introducing NgRx's boilerplate/ceremony before the complexity actually justifies it.

- Explain change detection — default vs. OnPush. How have you used OnPush to fix performance issues?
  - Angular's default change detection strategy checks every component in the tree, top to bottom, whenever any async event happens anywhere in the app — a click, an HTTP response, a timer tick, a promise resolving. It doesn't try to figure out if a particular component's data actually changed; it just re-checks all bindings on all components every time. That's simple and safe, but it means as your component tree grows, every change-detection cycle does more work than it needs to, even for components whose data hasn't changed at all.

  - **OnPush changes that:** a component with changeDetection: `ChangeDetectionStrategy.OnPush` only gets re-checked when one of a few specific things happens:

  - an @Input() reference changes (note: reference, not deep mutation — so immutable data patterns matter here),
  - an event originates from within that component or its children (a click, etc.),
  - an observable bound via the async pipe emits a new value,
  - or you manually trigger it via ChangeDetectorRef.markForCheck().

  - So with OnPush, Angular can skip entire subtrees during a change detection cycle if their inputs haven't changed by reference, which is a meaningful performance win in a large app.

  - **Where I actually used this:** the offers and rewards list views in the app I led could render a fair number of rows — offer lists, and especially the bulk-registration results screen, which shows potentially hundreds of records with their success/failure status after a batch upload completes. With default change detection, every polling tick checking upload status, or every unrelated action elsewhere in the app, was triggering a full re-check of that entire rows list, even though most rows hadn't changed. That showed up as janky scrolling and sluggish UI updates during an active bulk upload, when polling was firing every few seconds.

  - I switched the list and row components to OnPush, and paired it with a few supporting changes that OnPush requires to actually work correctly:

  - Made sure data passed into those components was treated immutably — instead of mutating an array in place when new status came in, I created a new array/object reference so Angular's reference check would actually pick up the change.
    Used the async pipe directly in the template wherever possible, bound to observables from the status-polling service, since async pipe plays natively with OnPush and handles subscription/unsubscription for you.
    For the few places I needed an imperative update outside of an input or async-pipe emission — like after a manual retry action — I called markForCheck() explicitly to tell Angular this component needs re-checking.

  - The result was a noticeably smoother UI on the bulk-registration results screen during active polling — we cut a large amount of unnecessary change-detection work happening on every polling cycle, since only the rows management screen's outer container needed to react to the new data, not every unrelated component in the tree.

- How do you handle API error handling and retries across a large app (interceptors)?
  - I handle this centrally with `HTTP interceptors `rather than repeating error-handling logic in every component or service — that's the whole point of interceptors: every outgoing request and incoming response passes through a single pipeline, so I get one place to apply cross-cutting concerns consistently across the app.

  - I typically layer a few interceptors, each with one responsibility:
  1. Auth interceptor — attaches the access token to outgoing requests, and if a response comes back 401, it tries a token refresh and retries the original request once; if refresh fails, it redirects to login. This runs first in the chain.

  2. Retry interceptor — for transient failures (network blips, 502/503/504 from a backend that's momentarily unavailable), I use `RxJS's retry` or retryWhen operator with an exponential backoff — say retry up to 2-3 times with increasing delay — rather than retrying instantly in a tight loop. Importantly, I only retry idempotent requests — GETs, and PUT/DELETE where safe — never blindly retry a POST that creates a resource, since that risks duplicate offers or duplicate registrations. That distinction mattered a lot in this app specifically: bulk registration and offer-creation are POST operations, so I was deliberate about not auto-retrying those at the interceptor level — a failed registration call needed to surface to the rep rather than silently retry and risk a duplicate enrollment.

  3. Error interceptor — catches errors that fall through (after retries are exhausted, or on non-retryable errors) and normalizes them into a consistent shape before they reach the component: extracting a user-friendly message from the backend's error response contract, logging/reporting unexpected errors (5xx, unknown format) to our monitoring tool, and for things like 403s, redirecting or showing a permission-denied state rather than a generic error toast.

  4. Loading/notification interceptor (sometimes combined with the error one) — surfaces a consistent toast/snackbar for errors app-wide, so a component author doesn't have to remember to wire up error UI every time they call an API — they just subscribe and handle the success case; the interceptor guarantees the failure case is visibly communicated to the rep.
  - Where this specifically mattered for the bulk-registration flow: the status-polling calls I mentioned earlier are GETs firing every few seconds, so those are safe to retry on transient failure without any real risk — if one poll fails due to a network blip, the retry interceptor just quietly retries and the rep never notices. But the actual file-upload-triggered registration call is a POST with real side effects, so that error needs to surface plainly — in that flow, I made sure failures showed up in the per-record success/failure summary I mentioned, rather than being swallowed by a generic retry.

  - One more thing I enforce: interceptors should be side-effect-consistent but not swallow errors silently. Even after handling/normalizing, I still re-throw the error (or an error-shaped object) so the calling component or service can react appropriately — e.g., stop a loading spinner, or block a form submit button — rather than the interceptor fully absorbing it and leaving the UI in an inconsistent state.

- Component communication patterns: @Input/@Output vs. shared services vs. state store — how do you decide?
  - I think of this as a decision that scales with how far apart the two pieces of state are in the component tree, and how many places need to react to a change — not a one-size-fits-all choice.

  - @Input() / @Output() — my default for direct parent-child communication. It's explicit, easy to trace, easy to test in isolation, and doesn't add any indirection. In the offers app, this is how a list-item row component tells its parent list "I was clicked" or "toggle my status," or how a parent passes a single offer record down into a detail/edit component. If the relationship is a direct line — one parent, one or a few children — @Input/@Output is almost always right. The moment you're passing data down three or four levels through components that don't themselves care about that data (prop drilling), that's my signal to stop using inputs and reach for a shared service instead.

  - **Shared services (with RxJS)** — my default for anything that needs to be shared across components that aren't in a direct parent-child relationship, or across module boundaries, without the complexity of a full state-management library. In this app, that's things like: the current rep/session info needed by both the Offers and Rewards modules, or the shared reward-lookup data I mentioned earlier that both offer-creation and reward-management screens need. I'd provide the service at the appropriate level — `providedIn: 'root'` for truly app-wide singletons, or provided at a module level if I want scoped state per lazy-loaded feature — and expose state via `BehaviorSubjects` so components can subscribe and get both the current value and future updates. This is my default reach when the alternative is prop-drilling or duplicating an HTTP call in multiple components.

  - **A full state store (NgRx)** — I reserve this for real complexity: many components across the app reading and writing overlapping state, non-trivial async orchestration where you want a predictable single source of truth, or when I need dev tooling like time-travel debugging and strict traceability of every state change for a large team to reason about. For this offers/rewards app specifically, I didn't introduce NgRx — the shared-service-with-RxJS pattern covered our needs without the added boilerplate and the ramp-up cost for every developer touching the codebase. If the app had grown to where, say, an in-progress bulk-registration job's status needed to be reflected simultaneously in a header notification badge, a dashboard widget, and the results screen, all updating consistently and possibly with optimistic UI or undo — that's the point I'd seriously consider NgRx, because at that level of fan-out, a bag of services each with their own BehaviorSubject starts getting hard to reason about and easy to get inconsistent.

  - So the short version of how I decide: start with @Input/@Output for direct relationships, move to a shared service the moment you're drilling props through indifferent intermediate components or need cross-module state, and only reach for a full state store when the number of consumers and the complexity of the interactions between them genuinely justifies the overhead — not by default, and not just because it's a common pattern people reach for.

  - **Have you ever regretted not using NgRx,** or regretted introducing it?" — a good honest answer is to say you've seen teams over-engineer with NgRx too early, which adds actions/reducers/effects boilerplate for state that a service could've handled, and that you'd rather introduce it deliberately when the complexity is real than default to it. If you have a genuine example of either scenario, use it here — real war stories land well in a lead interview

- How do you structure a large-scale Angular app for a team of multiple developers (folder structure, shared component library)?
  - As a lead, my goal with folder/module structure is that a new developer — or a contractor coming in for a few weeks — can find where something belongs without asking me, and two developers can work on different features simultaneously without stepping on each other's files or merge-conflicting constantly.

  - High-level folder structure I use:

  src/app/
  core/ -> singletons: auth, interceptors, guards, app-level services
  shared/ -> reusable, stateless: components, pipes, directives, models
  features/
  offers/ -> offers module (components, services, routing — self-contained)
  rewards/ -> rewards module
  bulk-registration/ -> bulk upload module
  layout/ -> shell/nav/header components used across features
  - Each feature folder is self-contained — its own components, services, models, and routing module, lazy-loaded independently. This is deliberate: it means two developers working on Offers and Rewards respectively are almost never touching the same files, which cuts down merge conflicts and lets people work in parallel without a lot of coordination overhead. It also means a feature can be reasoned about, tested, and even deleted or rewritten in isolation without touching unrelated code.

  - Shared component library: for common UI — buttons, modals, the file-upload widget used in bulk registration, form field wrappers, data tables — I pulled these into a shared module (or for a bigger org, an actual separate library via Angular's ng generate library, published internally via a private npm registry or Nx workspace). The reasoning: the offers list, rewards list, and any future feature all needed the same table/pagination/status-badge components, and I didn't want three slightly-different implementations drifting apart. A shared library also forces an interface contract — inputs/outputs are documented and stable — so consuming teams aren't reaching into internals.

  - Conventions I enforce as a lead, beyond folder structure:
    - Consistent naming — feature/component/service naming conventions documented so people aren't guessing (offer-list.component.ts vs OfferListComponent, etc.), enforced partly via `lint rules`.
    - A style guide and lint/prettier config checked into the repo and enforced in CI, so code review isn't spent on formatting bikeshedding.
    - Barrel files (index.ts) at the shared-library and feature-module level, so consumers import from a clean public path rather than reaching into internal folders.
    - A documented contract for how features talk to each other — i.e., only through shared services or well-defined inputs/outputs, never one feature module importing directly from another feature's internals. That's a rule I'd actually enforce in code review, because otherwise you get hidden coupling between, say, Offers and Bulk Registration that makes them hard to change independently later.

  - For a multi-developer team specifically, I also think about:
    - Ownership boundaries — even without formal microservice-style ownership, I'd informally assign feature modules to specific developers/pairs so there's a clear point of contact and consistent style within each module.
    - Testing conventions — a documented pattern for how to test a component/service (what's unit-tested vs. what needs an integration/e2e test), so coverage doesn't depend on individual developer habits.
    - A generator/schematic or a documented template for 'how to add a new feature module' — so a new feature starts from a consistent skeleton (routing, module file, folder layout) rather than everyone improvising their own structure.

    - In practice, on the offers/rewards app, this structure meant that when we added the bulk-registration feature later, it slotted in as a new lazy-loaded module reusing the shared upload widget and shared services, without needing to touch the Offers or Rewards modules at all — which is really the test of whether the structure is working: can you add a new capability without ripple effects across the rest of the app.

    - **Likely follow-up to have ready:** How do you enforce these conventions across a team — code review alone, or tooling?" — good answer: a mix — lint rules and CI checks catch mechanical stuff automatically (so review isn't wasted on style), and code review focuses on the things tooling can't catch: whether a piece of logic belongs in shared vs. feature, whether a new coupling between modules is being introduced, etc. If you've used Nx workspace boundaries (enforceModuleBoundaries lint rule) to technically prevent one feature from importing another's internals, that's a strong concrete detail to drop here — it shows you don't just document the rule, you make it unbreakable.

- Authentication/authorization in Angular — route guards, token refresh, interceptor-based auth headers.
  - MSAL handles the Angular application's own login/session, while a separate Spring Boot auth server issues the bearer tokens actually used for our backend API calls. They're related but not the same token.

  - **Login and route guards (MSAL):** For the Angular app itself, we use MSAL — @azure/msal-angular — for the rep's login flow against Azure AD/Entra ID, and MsalGuard on protected routes/feature modules so an unauthenticated rep is redirected into the Azure AD login flow before reaching Offers, Rewards, or Bulk Registration. For role-based access beyond just 'is this rep logged in,' I layered a custom guard that checks role/claims to gate specific routes — like restricting bulk registration to reps with the right permission.

  - Getting the bearer token for API calls (separate token endpoint): For calling our Spring Boot backend, we don't use the MSAL-issued token directly. Instead, after MSAL confirms the rep is authenticated, the app calls a dedicated token endpoint on our own Spring Boot auth server, which issues a bearer token scoped for our API. Practically, that's often done by exchanging the MSAL identity (e.g., passing the MSAL ID token or the authenticated user's identity) to that token endpoint, which validates it and returns back our own application-issued access token — so the backend APIs trust and validate tokens issued by our own auth server, not Azure AD tokens directly. This decouples our API's auth from being tightly bound to Azure AD's token format/claims, and lets the backend define its own token contract, scopes, and expiry policy independent of the identity provider.

  - Interceptor-based auth headers: Because of that split, I couldn't just rely on MsalInterceptor's default behavior for backend API calls — that interceptor is really meant to attach Microsoft-issued tokens against Microsoft-registered resources. Instead, I wrote a custom HTTP interceptor for our backend API calls: it holds the bearer token obtained from our Spring Boot token endpoint (cached in a service, typically an in-memory/BehaviorSubject-backed token store, not localStorage, to reduce exposure), attaches it as the Authorization header on outgoing requests to our API base URL, and — this is the important part — handles refresh/expiry for that token independently of MSAL's own token lifecycle. MSAL still silently renews the rep's Azure AD session in the background per its own schedule, but our custom interceptor is responsible for noticing when our application token is close to expiry (or gets a 401 back from the backend) and re-calling the Spring Boot token endpoint to get a fresh one before retrying the original request.

  - Token refresh flow, concretely: the interceptor checks token expiry before attaching it to a request; if it's expired or close to it, it calls the token endpoint first, updates the cached token, then proceeds with the original request. If a request still comes back 401 despite that — say the backend token was revoked server-side — I handle that as a hard auth failure: clear the cached token, and either silently re-fetch once as a retry, or if that also fails, treat it as a session problem and route the rep back through login (which re-triggers the MSAL flow if their Azure AD session itself has also lapsed).

  - Why I mention this distinction explicitly when I design a system like this: it would've been simpler to just pass the MSAL access token straight through to Spring Boot and validate Azure AD tokens on the backend directly — and for some apps that's the right, simpler choice. But having our own token-issuing endpoint gives the backend control over its own token contract (custom claims, its own expiry/refresh policy, ability to add app-specific authorization info to the token) without being coupled to whatever Azure AD happens to put in its tokens — which matters more as the backend serves multiple frontends or needs claims that don't map cleanly to Azure AD's token shape."\*\*

  - Likely follow-up to have ready: "Why have a separate token-issuing server instead of just validating the MSAL/Azure AD token directly in Spring Boot?" — the answer above covers this, but be ready to also acknowledge the trade-off honestly if pushed: it's an extra moving part (another token endpoint to secure, another token lifecycle to manage) versus the simplicity of just validating Azure AD tokens with Spring Security's OAuth2 resource-server support directly. A good lead answer shows you see both sides, not just defends the existing design blindly.

- How do you approach testing (unit with Jasmine/Karma, e2e) and how much coverage do you enforce as a lead?
  - My approach to testing is layered — I don't treat 'coverage %' as the goal in itself, I treat it as a signal that tells me whether the important paths are actually protected. Chasing a number leads to shallow tests that assert nothing meaningful just to touch a line.

  - Unit tests (Jasmine/Karma): These are the bulk of the test suite — fast, isolated, run on every commit/PR. What I prioritize testing at the unit level:

  - Services — especially anything with real logic: the token-refresh logic I mentioned earlier, the shared reward-lookup service, the status-polling logic for bulk registration. These are pure-ish and easy to mock HTTP dependencies for, so they're cheap to test thoroughly and high-value, since a bug here silently affects every consumer.
  - Components with logic — anything beyond a dumb template: form validation logic on the offer-creation form, the bulk-upload results component's success/failure summary logic, guard logic (role checks). I use TestBed with shallow rendering where possible, and mock child components/services rather than pulling in the whole tree.
  - Pipes and utility functions — cheap, deterministic, no excuse not to have high coverage here.
  - What I don't spend much unit-test effort on: pure presentational/dumb components with no logic — a component that just binds @Input values to a template doesn't need heavy unit tests; that's better covered by a quick smoke test (renders without erroring) or left to e2e/visual coverage instead.

  - Integration-style tests: Between pure unit and full e2e, I also write tests that exercise a feature module's components together with real (or realistically mocked) services — e.g., does the offer-creation form actually call the right service method with the right payload when submitted, does the bulk-upload component correctly reflect a service's status updates over time (using Angular's fakeAsync/tick to simulate the polling flow). This layer catches wiring bugs that isolated unit tests miss but that don't need a full browser.

  - E2E: I keep this focused on the critical business flows end-to-end, not exhaustive coverage of every screen — e2e is slow and comparatively brittle, so I don't try to make it do unit tests' job. For this app, the e2e suite covers things like: rep logs in → creates an offer → offer appears in the list; and the bulk-registration happy path — upload a file → see status progress → see success/failure summary. I'd also cover at least one realistic failure path e2e — e.g., uploading a malformed file and confirming the rep sees a clear error — since that's exactly the kind of thing that looks fine in isolated unit tests but breaks when the real S3/Lambda pipeline is involved.

  - Coverage enforcement as a lead: I don't chase a single global number like '80% everywhere' — I set a reasonable floor (commonly 70-80% for services/business logic) enforced in CI so a PR can't silently drop coverage, but I care more about what's covered than the percentage. I'd rather have 100% coverage on the token-refresh interceptor and the bulk-upload status logic — because bugs there are expensive and hard to notice — than have inflated coverage from testing trivial getters. In code review, I look at whether new logic has a meaningful test, not just whether the coverage report is green; a developer can write a test that executes a line without actually asserting the right behavior, and coverage tooling won't catch that, but review will.

  - One practical thing I enforce for a rep-facing internal tool specifically: any bug that's caused a real incident gets a regression test added as part of the fix — non-negotiable. That's how the suite actually stays relevant to real failure modes rather than being written once at feature-build time and never updated."\*\*

  - Likely follow-ups to have ready:
    - "How do you test the S3/Lambda part of the bulk-registration flow, since that's outside Angular?" — good answer: that's out of scope for Angular's own test suite; on the Angular side I'd mock the API/status responses to test the UI's handling of various states (in-progress, partial failure, full failure), and rely on separate backend/integration tests (or a Lambda-specific test harness) to verify the S3→Lambda→registration-API path itself — Angular tests shouldn't be asserting on backend behavior they don't own.
    - "What's your opinion on TDD?" — safe honest answer: pragmatic, not dogmatic — TDD for genuinely tricky logic (e.g., the token refresh queuing behavior) where thinking through test cases first clarifies the design, but not treated as a rule for every trivial component.

- Performance: how do you diagnose and fix a slow-rendering Angular page?
  I approach this as two phases — diagnose first, don't guess-and-fix — because performance problems that look similar can have completely different root causes.

Diagnosis:

Reproduce and measure first. Chrome DevTools Performance tab — record a trace while triggering the slow interaction (e.g., loading the offers list, or the bulk-registration results screen with a large record set), and look at where time is actually going: is it scripting (change detection, component logic), rendering/layout, or network waiting?
Angular DevTools profiler — this is the more targeted tool. It shows exactly which components are being checked on each change-detection cycle and how long each takes. This is usually where I find the real culprit — e.g., a components tree being re-checked far more often than it should, or one specific component's ngOnChanges/template doing expensive work repeatedly.
Check the Network tab — sometimes 'slow rendering' is actually 'slow data,' not a rendering problem at all. If the offers list feels sluggish because the API call itself takes 3 seconds, that's a backend/API problem, not something OnPush or track-by will fix — I want to rule this out early so I don't waste time optimizing the wrong layer.
Bundle analysis (webpack-bundle-analyzer or Angular's built-in stats) if the issue is more about slow initial load than slow interaction — checking whether a feature module pulled in something heavy it shouldn't have (a large third-party library imported eagerly instead of lazy, e.g.).

Common root causes I look for, and fixes:

Change detection running too often / checking too much — this is the most common one. Fix: switch relevant components to OnPush (as I described earlier for the bulk-registration results list), paired with immutable data updates and the async pipe, so Angular skips subtrees that haven't changed.
Expensive work inside a template binding — calling a function directly in a template ({{ calculateTotal(offer) }}) re-runs that function on every single change-detection cycle, even if nothing relevant changed. Fix: move that into a memoized value, a computed property set once when the underlying data changes, or a pure pipe — pure pipes only re-run when their input reference changes, which is a cheap win.
Missing trackBy on \*ngFor — without it, Angular re-renders every DOM node in a list on any change to the array reference, even if only one row actually changed, which destroys and recreates DOM nodes unnecessarily. This mattered directly in the bulk-registration results screen — potentially hundreds of rows updating as status comes in. Adding trackBy keyed on a stable record ID meant Angular could diff and only touch the rows that actually changed, not tear down and rebuild the whole list on every status update.
Large lists rendered all at once — for something like the bulk-registration results with a large record count, beyond trackBy I'd also consider virtual scrolling (Angular CDK's cdk-virtual-scroll-viewport) so only the visible rows are actually rendered in the DOM, rather than all hundreds of rows existing at once regardless of viewport.
Too much work in lifecycle hooks — ngOnChanges/ngDoCheck doing heavy computation on every cycle. Fix: move heavy computation out of hooks that fire frequently, cache/memoize results, or restructure so the computation happens once when the source data actually changes.
Unnecessary subscriptions/re-subscriptions — a component re-subscribing to an observable on every change-detection cycle instead of once in ngOnInit, or not unsubscribing and accumulating dead subscriptions over a session that slow things down over time. Fix: subscribe once, use async pipe where possible so Angular manages the lifecycle, and always clean up with takeUntil/Subscription.unsubscribe() in ngOnDestroy.

After the fix: I always re-measure with the same profiling tool I diagnosed with, rather than assuming the fix worked — sometimes the real bottleneck was one layer deeper than the first thing I optimized.

Concrete example from this app: the bulk-registration results screen was the one place we actually hit this — several hundred rows, each updating as polling brought in new status data every few seconds. The fix was a combination: OnPush on the row and list components, trackBy keyed on record ID so unaffected rows weren't torn down and rebuilt, and switching the status update from replacing the entire array reference on every poll to only replacing the specific rows that changed (still creating new references for changed rows to satisfy OnPush, but leaving unrelated row object references untouched) — which meant far fewer rows were even eligible for re-check on each cycle, not just faster checks."\*\*

Likely follow-up to have ready: "How do you prevent this kind of regression from creeping back in?" — good answer: performance budgets/checks in CI where feasible (bundle size budgets are common and easy to add via Angular's angular.json budgets config), and treating OnPush+trackBy as a default convention on any list-rendering component from the start, rather than something retrofitted only after a complaint.

- How do you implement offline capability in Angular (Service Workers, Angular PWA support, IndexedDB/localStorage for local caching)?
- How do you keep an Angular application functional when the backend server is unavailable (cached responses, optimistic UI, queuing failed requests)?
- How do you synchronize or merge offline data once the application comes back online (conflict resolution, background sync, retry queues)?
- How do you implement API integration in Angular (HttpClient, interceptors, typed services, error/retry handling)?
- How do you handle environment-specific configuration in Angular (environment.ts files, build-time replacement)?
- How would you test a component or service that depends on offline/cached data?

---

## APIs

- What are the different ways to communicate with APIs (REST, GraphQL, gRPC, WebSockets, messaging/event-driven) — when have you chosen one over another?
- How do you handle REST API integration end-to-end between Angular and Spring Boot (DTO contracts, versioning, CORS, error response shape, interceptors on the Angular side vs. `@ControllerAdvice` on the Spring side)?
- How do you handle idempotency for a POST/PUT API that might be retried (idempotency keys)?
- How do you handle pagination and rate limiting for APIs consumed by the Angular frontend?

---

## Spring Boot Backend

- How do you start a Spring Boot application (embedded server, `SpringApplication.run()`, what happens under the hood at startup)?
- Can you run a Spring Boot application without the `@SpringBootApplication` annotation? If yes, how (manually combining `@Configuration`, `@EnableAutoConfiguration`, `@ComponentScan`)?
- If an application needs to connect to multiple databases, how would you design it end-to-end (multiple `DataSource` beans, `@Primary`, separate `EntityManagerFactory`/`TransactionManager` per DB, routing data source for dynamic switching)?
- How do you secure your REST endpoints (Spring Security filter chain, method-level security, CORS/CSRF considerations)?
- How do you structure a Spring Boot service — layering (controller/service/repository), package-by-feature vs. package-by-layer?
- Explain your approach to exception handling across a service (@ControllerAdvice, custom exceptions, error response contracts).
- How do you manage configuration across environments (Spring profiles, externalized config, Config Server/Vault)?
- Transaction management — @Transactional pitfalls you've hit (self-invocation, propagation, isolation levels).
- How do you secure a Spring Boot API (Spring Security, OAuth2/JWT)?
- Dependency injection — constructor vs. field injection, and why you'd choose one as a lead setting standards.
- How do you handle versioning of REST APIs?
- Performance tuning: connection pooling, caching (Spring Cache, Redis), async processing (@Async, CompletableFuture).
- How do you approach testing strategy (unit vs. integration, Testcontainers, MockMvc)?

---

## Microservices

- How do you decide service boundaries — domain-driven design, bounded contexts?
- Inter-service communication: REST vs. gRPC vs. messaging (Kafka) — how do you choose per use case?
- How do you handle distributed transactions/data consistency across services (Saga pattern, eventual consistency, outbox pattern)?
- Service discovery and API gateway — how have you implemented these (Eureka, Spring Cloud Gateway, or cloud-native equivalents)?
- Resilience patterns — circuit breakers, retries, timeouts, bulkheads (Resilience4j) — give a real example where this saved you.
- How do you approach centralized logging/tracing across services (correlation IDs, distributed tracing with Zipkin/Jaeger, ELK)?
- Versioning and backward compatibility when multiple services evolve independently.
- How do you handle configuration and secrets management at scale across many services?
- Data ownership — how do you avoid a shared database anti-pattern; how do you handle "who owns this data" conflicts between teams?
- How do you call one microservice from another in Spring Boot (RestTemplate vs. WebClient vs. OpenFeign) — which do you prefer and why?
- How do you switch configuration between environments at runtime (Spring profiles, `application-{profile}.yml`, environment variables)?
- How do you monitor a Spring Boot application in production (Actuator endpoints, health checks, metrics export to Prometheus/CloudWatch)?
- If two microservices need the same piece of data, how do you avoid tight coupling between them (data duplication with events, API composition, BFF pattern)?

---

## Monolith → Microservices Migration

- Walk me through a real migration you led — what triggered it, how did you prioritize which modules to peel off first?
- Strangler Fig pattern — have you used it? How did you route traffic between old and new during transition?
- How did you handle the shared database problem during migration (database-per-service, dual-write, CDC)?
- How did you manage risk/rollback if a newly extracted service misbehaved in production?
- How did you handle data migration and keeping data in sync during the transition period?
- What organizational/team challenges came up (team ownership boundaries, conflicting release cadences) and how did you resolve them?
- How did you measure success of the migration (latency, deployment frequency, incident rate)?
- What would you do differently next time?

---

## S3

- How have you used S3 in your architecture — file storage for user uploads, static assets, data lake staging, event triggers?
- S3 event notifications — how have you wired S3 → Lambda or S3 → SQS/SNS for event-driven processing?
- Security: bucket policies vs. IAM roles vs. presigned URLs — when do you use each?
- Storage classes and lifecycle policies — how do you manage cost (Standard, IA, Glacier transitions)?
- Versioning and data durability — how do you handle accidental deletes/overwrites?
- Performance considerations for high-throughput S3 access (partitioning keys, multipart upload).

---

## AWS (General)

- Which AWS services have you worked with (S3, Lambda, SQS/SNS, API Gateway, ECS/EKS, RDS/DynamoDB, CloudWatch, IAM, etc.) — give a quick end-to-end picture of how they fit together in something you've built.
- How do you decide Lambda memory/timeout settings for a function, and how does memory affect CPU/cost?
- How do you manage IAM permissions for a Lambda function that needs to read from S3 and write to a database (least-privilege execution role)?
- How do you version and roll back a Lambda deployment safely (aliases, weighted traffic shifting)?
- How would you design a fully serverless pipeline using S3, Lambda, and Kafka together (e.g., file lands in S3 → Lambda triggers → publishes event to Kafka)?

## AWS Lambda

- Which programming language do you use for Lambda functions, and why (Java cold-start trade-offs vs. Node/Python)?
- How do you invoke or trigger a Lambda function (API Gateway, S3 events, SQS/SNS, Kafka/MSK, EventBridge schedule, direct SDK invoke)?
- What have you built with Lambda — walk through a specific function's trigger, logic, and downstream integration.
- Cold start issues — how have you mitigated them (provisioned concurrency, runtime choice, package size)?
- How do you handle error handling/retries and dead-letter queues for Lambda functions triggered by async events (S3, SQS, Kafka)?
- How do you manage configuration/secrets in Lambda (env vars vs. Secrets Manager/Parameter Store)?
- Observability — how do you monitor and debug Lambda in production (CloudWatch logs/metrics, X-Ray tracing)?
- When would you NOT use Lambda — what are its limits (execution time, memory, statefulness) that push you toward containers/ECS instead?
- How do you handle Lambda's concurrency limits and throttling in high-traffic scenarios?
- CI/CD for Lambda — how do you deploy and version functions safely (aliases, canary deployments)?

---

## Kafka

- Have you worked with Apache Kafka? What is Kafka, in your own words (distributed event streaming platform vs. a traditional message queue)?
- Explain the publisher–consumer architecture in Kafka (producers, topics, partitions, brokers, consumer groups).
- If a publisher sends messages to a topic with multiple consumers, how do the consumers behave (same consumer group = each message to one consumer; different groups = each group gets all messages)?
- How do you identify and resolve consumer lag (monitoring tools like Burrow/Kafka UI/CloudWatch, causes — slow processing, under-partitioning, GC pauses — and fixes — scaling consumers, tuning `max.poll.records`, increasing partitions)?
- How do you authenticate and secure Kafka (SASL/SSL, mTLS, ACLs for topic-level authorization, encryption in transit/at rest)?
- How do you design topic/partition strategy for throughput and ordering guarantees?
- Consumer groups — how do you handle rebalancing and avoid duplicate processing?
- Exactly-once semantics — how have you implemented or reasoned about it in a real service?
- Acks and replication — trade-offs you've made between durability and latency (acks=all vs acks=1).
- How do you handle schema evolution (Avro/Schema Registry) across producers/consumers owned by different teams?
- Dead-letter topic strategy for poison messages.
- How do you monitor consumer lag and what do you do when it spikes in production?
- Kafka vs. traditional queuing (SQS/RabbitMQ) — when do you pick Kafka specifically?
- Does message key choice affect ordering and partitioning — how do you decide what to use as a key?
- Retry topic vs. dead-letter topic — how do you decide when a failed message should be retried automatically vs. routed straight to DLQ?

---

## Authentication & Authorization

- How do you generate an OAuth2 access token in an Angular application (Authorization Code flow with PKCE, redirect handling, token storage)?
- Suppose you have a login page — how does the authentication flow work end-to-end, and how are OAuth2 tokens generated (user → login → Authorization Server → auth code → token exchange → access/refresh token)?
- How does the Angular application communicate with the Authorization Server (redirect-based flow, silent refresh/iframe, libraries like angular-oauth2-oidc)?
- Walk me through how you've designed authN/authZ for a microservices architecture — where does auth happen (API gateway vs. each service)?
- OAuth2 vs. OpenID Connect — how do you explain the difference, and where has each fit in your systems?
- JWT — how do you handle token issuance, validation, expiry, and refresh across multiple services?
- How do you propagate identity/claims across service-to-service calls (token relay, service-to-service tokens, mTLS)?
- Role-based access control (RBAC) vs. attribute-based access control (ABAC) — which have you implemented, and why?
- How do you handle token revocation/logout in a distributed system where tokens are normally stateless?
- Centralized identity provider (Okta, Auth0, Keycloak, Cognito) — have you integrated one, and what was the migration/rollout like?
- How do you secure service-to-service (machine-to-machine) communication differently from user-facing auth?
- API gateway's role in auth — have you offloaded authN/authZ to a gateway layer, and what were the trade-offs?
- How do you handle authorization for fine-grained resource access (e.g., "user can only see their own records") — enforced at API layer, service layer, or data layer?
- Secrets/key management for signing and validating tokens (key rotation, JWKS endpoints).
- Security incidents/audits — how do you approach compliance requirements (this is finance — think SOX, data access auditing) in an auth design?
- Where do you store the access token in an Angular app, and how do you protect against XSS/token theft (memory vs. localStorage vs. httpOnly cookie trade-offs)?
- How do you handle access token expiry in Angular — silent refresh vs. refresh token rotation — and how do you avoid multiple simultaneous refresh calls from concurrent requests (interceptor queuing)?
- How do you handle logout across a distributed system where the access token is still technically valid until expiry?

---

- Tell me about a production incident you led the response for — root cause, what you changed afterward.
- How do you make architectural decisions when the team disagrees — how do you drive consensus?
- How do you balance technical debt vs. delivery pressure as a lead?
- How do you mentor/onboard developers into a microservices codebase?
- Since it's a contracting role: how do you ramp up quickly in an unfamiliar codebase and start contributing/leading within weeks?
