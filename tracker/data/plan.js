/**
 * plan.js — All tracker content lives here.
 *
 * HOW TO EDIT:
 *   • Add/remove a month   → add/remove an object in the PLAN array
 *   • Add/remove a week    → add/remove an object in a month's `weeks` array
 *   • Add/remove a task    → add/remove an object in a week's `tasks` array
 *   • Add a link to a task → add an object to the task's `links` array
 *       link types: 'lc' (LeetCode), 'nc' (Neetcode), 'gh' (GitHub),
 *                   'ref' (reference/article), 'yt' (YouTube), 'hi' (Hello Interview)
 *   • Add a resource       → add an object to a week's `resources` array
 *
 * BADGE KEYS (use in `badges` array):
 *   dsa | sd | lld | cr | mc | beh | mock
 */

const PLAN = [

  // ─────────────────────────────────────────────
  // MONTH 1
  // ─────────────────────────────────────────────
  {
    title: "Month 1 — DSA foundations + LLD intro",
    goal:  "Build core data structure fundamentals and begin thinking in object-oriented design. DSA: easy problems only. LLD: start with SOLID and simple class diagrams before any code.",
    weeks: [
      {
        label: "Week 1",
        title: "Arrays, strings & LLD mindset",
        badges: ["dsa", "lld"],
        tasks: [
          {
            text: "[DSA] Two-pointer: Two Sum, Valid Palindrome, 3Sum",
            links: [
              { t: "lc",  label: "LC #1 Two Sum",         url: "https://leetcode.com/problems/two-sum/" },
              { t: "lc",  label: "LC #125 Valid Palindrome", url: "https://leetcode.com/problems/valid-palindrome/" },
              { t: "lc",  label: "LC #15 3Sum",            url: "https://leetcode.com/problems/3sum/" },
              { t: "hi",  label: "Hello Interview Overview", url: "https://www.hellointerview.com/learn/code/two-pointers/overview" }
            ]
          },
          {
            text: "[DSA] Sliding window: Longest Substring Without Repeating Characters",
            links: [
              { t: "lc",  label: "LC #3 Longest Substring", url: "https://leetcode.com/problems/longest-substring-without-repeating-characters/" }
            ]
          },
          {
            text: "[DSA] Target: 8–10 easy problems on Neetcode.io — write approach before coding",
            links: [
              { t: "nc",  label: "Neetcode Roadmap", url: "https://neetcode.io/roadmap" }
            ]
          },
          {
            text: "[LLD] Study the 5 SOLID principles — write a 1-para example for each from your own codebase",
            links: [
              { t: "ref", label: "SOLID — Refactoring.Guru",  url: "https://refactoring.guru/design-patterns/solid-principles" },
              { t: "ref", label: "SOLID in Java — Baeldung",   url: "https://www.baeldung.com/solid-principles" }
            ]
          },
          {
            text: "[LLD] Draw a UML class diagram for a Parking Lot system (no code yet — classes, attributes, methods, relationships)",
            links: [
              { t: "gh",  label: "Parking Lot — awesome-lld", url: "https://github.com/ashishps1/awesome-low-level-design/blob/main/problems/parking-lot.md" },
              { t: "ref", label: "draw.io (free UML)",         url: "https://app.diagrams.net/" }
            ]
          }
        ],
        resources: [
          { label: "Neetcode.io",       url: "https://neetcode.io" },
          { label: "Visualgo.net",      url: "https://visualgo.net/en" },
          { label: "Refactoring.Guru",  url: "https://refactoring.guru" }
        ]
      },
      {
        label: "Week 2",
        title: "HashMaps, sets, prefix sums & OOP patterns",
        badges: ["dsa", "lld"],
        tasks: [
          {
            text: "[DSA] HashMap patterns: Group Anagrams, Valid Anagram, Contains Duplicate",
            links: [
              { t: "lc", label: "LC #49 Group Anagrams",    url: "https://leetcode.com/problems/group-anagrams/" },
              { t: "lc", label: "LC #242 Valid Anagram",     url: "https://leetcode.com/problems/valid-anagram/" },
              { t: "lc", label: "LC #217 Contains Duplicate",url: "https://leetcode.com/problems/contains-duplicate/" }
            ]
          },
          {
            text: "[DSA] Prefix sum: Subarray Sum Equals K, Range Sum Query",
            links: [
              { t: "lc", label: "LC #560 Subarray Sum = K",  url: "https://leetcode.com/problems/subarray-sum-equals-k/" },
              { t: "lc", label: "LC #303 Range Sum Query",    url: "https://leetcode.com/problems/range-sum-query-immutable/" }
            ]
          },
          {
            text: "[DSA] Target: 8–10 easy problems. Write Big-O for every solution",
            links: [
              { t: "nc", label: "Neetcode — Arrays & Hashing", url: "https://neetcode.io/problems/contains-duplicate" }
            ]
          },
          {
            text: "[LLD] Creational patterns: Singleton, Factory, Builder — implement each in Java",
            links: [
              { t: "ref", label: "Singleton",  url: "https://refactoring.guru/design-patterns/singleton" },
              { t: "ref", label: "Factory",    url: "https://refactoring.guru/design-patterns/factory-method" },
              { t: "ref", label: "Builder",    url: "https://refactoring.guru/design-patterns/builder" }
            ]
          },
          {
            text: "[LLD] Implement Parking Lot in Java using your class diagram from Week 1",
            links: [
              { t: "gh", label: "Parking Lot Java solution", url: "https://github.com/ashishps1/awesome-low-level-design/tree/main/solutions/java/parkinglot" }
            ]
          }
        ],
        resources: [
          { label: "Head First Design Patterns", url: "https://www.oreilly.com/library/view/head-first-design/0596007124/" },
          { label: "Google Java Style Guide",     url: "https://google.github.io/styleguide/javaguide.html" }
        ]
      },
      {
        label: "Week 3",
        title: "Linked lists, stacks & structural patterns",
        badges: ["dsa", "lld", "cr"],
        tasks: [
          {
            text: "[DSA] Linked list: Reverse Linked List, Merge Two Sorted Lists, Linked List Cycle",
            links: [
              { t: "lc", label: "LC #206 Reverse Linked List",    url: "https://leetcode.com/problems/reverse-linked-list/" },
              { t: "lc", label: "LC #21 Merge Two Sorted Lists",   url: "https://leetcode.com/problems/merge-two-sorted-lists/" },
              { t: "lc", label: "LC #141 Linked List Cycle",       url: "https://leetcode.com/problems/linked-list-cycle/" }
            ]
          },
          {
            text: "[DSA] Stack: Valid Parentheses, Min Stack, Daily Temperatures",
            links: [
              { t: "lc", label: "LC #20 Valid Parentheses",   url: "https://leetcode.com/problems/valid-parentheses/" },
              { t: "lc", label: "LC #155 Min Stack",          url: "https://leetcode.com/problems/min-stack/" },
              { t: "lc", label: "LC #739 Daily Temperatures", url: "https://leetcode.com/problems/daily-temperatures/" }
            ]
          },
          {
            text: "[LLD] Structural patterns: Adapter, Decorator, Composite — implement each in Java",
            links: [
              { t: "ref", label: "Adapter",   url: "https://refactoring.guru/design-patterns/adapter" },
              { t: "ref", label: "Decorator", url: "https://refactoring.guru/design-patterns/decorator" },
              { t: "ref", label: "Composite", url: "https://refactoring.guru/design-patterns/composite" }
            ]
          },
          {
            text: "[LLD] Design a Library Management System: Book, Member, Loan, Library entities",
            links: [
              { t: "gh", label: "Library Management — awesome-lld", url: "https://github.com/ashishps1/awesome-low-level-design/blob/main/problems/library-management-system.md" }
            ]
          },
          {
            text: "[Code Review] Review your own Parking Lot code: SOLID violations, naming, method length",
            links: [
              { t: "ref", label: "Google Java Style Guide", url: "https://google.github.io/styleguide/javaguide.html" },
              { t: "ref", label: "SonarLint IDE plugin",    url: "https://www.sonarsource.com/products/sonarlint/" }
            ]
          }
        ],
        resources: [
          { label: "Visualgo — Linked List",          url: "https://visualgo.net/en/list" },
          { label: "Refactoring.Guru — Structural",   url: "https://refactoring.guru/design-patterns/structural-patterns" }
        ]
      },
      {
        label: "Week 4",
        title: "Binary search, recursion & behavioral patterns",
        badges: ["dsa", "lld"],
        tasks: [
          {
            text: "[DSA] Binary search: Binary Search, Search in Rotated Sorted Array, Find Min in Rotated Array",
            links: [
              { t: "lc", label: "LC #704 Binary Search",              url: "https://leetcode.com/problems/binary-search/" },
              { t: "lc", label: "LC #33 Search Rotated Array",         url: "https://leetcode.com/problems/search-in-rotated-sorted-array/" },
              { t: "lc", label: "LC #153 Find Min in Rotated Array",   url: "https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/" }
            ]
          },
          {
            text: "[DSA] Recursion: Pow(x,n), Fibonacci, Climbing Stairs — trace the call stack by hand",
            links: [
              { t: "lc", label: "LC #50 Pow(x,n)",        url: "https://leetcode.com/problems/powx-n/" },
              { t: "lc", label: "LC #509 Fibonacci",       url: "https://leetcode.com/problems/fibonacci-number/" },
              { t: "lc", label: "LC #70 Climbing Stairs",  url: "https://leetcode.com/problems/climbing-stairs/" }
            ]
          },
          {
            text: "[LLD] Behavioral patterns: Observer, Strategy, Command — implement each in Java",
            links: [
              { t: "ref", label: "Observer",  url: "https://refactoring.guru/design-patterns/observer" },
              { t: "ref", label: "Strategy",  url: "https://refactoring.guru/design-patterns/strategy" },
              { t: "ref", label: "Command",   url: "https://refactoring.guru/design-patterns/command" }
            ]
          },
          {
            text: "[LLD] Refactor Library Management System to use Strategy pattern for search",
            links: [
              { t: "gh", label: "awesome-low-level-design", url: "https://github.com/ashishps1/awesome-low-level-design" }
            ]
          },
          {
            text: "[DSA] Month 1 review: redo 5 problems you got wrong. List your 3 weakest areas for month 2",
            links: [
              { t: "nc", label: "Neetcode Roadmap (track progress)", url: "https://neetcode.io/roadmap" }
            ]
          }
        ],
        resources: [
          { label: "Visualgo — Binary Search",         url: "https://visualgo.net/en/bst" },
          { label: "Refactoring.Guru — Behavioral",    url: "https://refactoring.guru/design-patterns/behavioral-patterns" }
        ]
      }
    ]
  },

  // ─────────────────────────────────────────────
  // MONTH 2
  // ─────────────────────────────────────────────
  {
    title: "Month 2 — Core DSA patterns + LLD intermediate + Machine Coding intro",
    goal:  "Master the most frequently tested DSA patterns. Introduce machine coding rounds (build a working feature in 75–90 min). Begin structured code review practice with a checklist.",
    weeks: [
      {
        label: "Week 5",
        title: "Trees, DFS/BFS & machine coding setup",
        badges: ["dsa", "mc"],
        tasks: [
          {
            text: "[DSA] Tree traversals: Binary Tree Level Order, Right Side View, Zigzag Level Order",
            links: [
              { t: "lc", label: "LC #102 Level Order",   url: "https://leetcode.com/problems/binary-tree-level-order-traversal/" },
              { t: "lc", label: "LC #199 Right Side View",url: "https://leetcode.com/problems/binary-tree-right-side-view/" },
              { t: "lc", label: "LC #103 Zigzag Level",  url: "https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/" }
            ]
          },
          {
            text: "[DSA] DFS: Max Depth of Binary Tree, Same Tree, Invert Binary Tree",
            links: [
              { t: "lc", label: "LC #104 Max Depth",      url: "https://leetcode.com/problems/maximum-depth-of-binary-tree/" },
              { t: "lc", label: "LC #100 Same Tree",       url: "https://leetcode.com/problems/same-tree/" },
              { t: "lc", label: "LC #226 Invert Tree",     url: "https://leetcode.com/problems/invert-binary-tree/" }
            ]
          },
          {
            text: "[DSA] Target: 10–12 medium problems. Start timing at 35 min per problem",
            links: [
              { t: "nc", label: "Neetcode — Trees", url: "https://neetcode.io/problems/invert-a-binary-tree" }
            ]
          },
          {
            text: "[Machine Coding] Setup: create a clean Java Maven project template (no frameworks, console I/O)",
            links: [
              { t: "ref", label: "Maven in 5 minutes", url: "https://maven.apache.org/guides/getting-started/maven-in-five-minutes.html" }
            ]
          },
          {
            text: "[Machine Coding] Build a working Parking Lot from scratch in 90 min — full OOP, multiple vehicle types, multiple floors",
            links: [
              { t: "gh", label: "Parking Lot Java solution", url: "https://github.com/ashishps1/awesome-low-level-design/tree/main/solutions/java/parkinglot" }
            ]
          }
        ],
        resources: [
          { label: "Neetcode — Trees",             url: "https://neetcode.io/problems/invert-a-binary-tree" },
          { label: "Machine Coding Primer (GitHub)",url: "https://github.com/prasadgujar/low-level-design-primer" }
        ]
      },
      {
        label: "Week 6",
        title: "BST, heap & LLD: ride sharing",
        badges: ["dsa", "lld", "cr"],
        tasks: [
          {
            text: "[DSA] BST: Validate Binary Search Tree, Kth Smallest Element in BST, Lowest Common Ancestor",
            links: [
              { t: "lc", label: "LC #98 Validate BST",    url: "https://leetcode.com/problems/validate-binary-search-tree/" },
              { t: "lc", label: "LC #230 Kth Smallest",   url: "https://leetcode.com/problems/kth-smallest-element-in-a-bst/" },
              { t: "lc", label: "LC #235 LCA of BST",     url: "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/" }
            ]
          },
          {
            text: "[DSA] Heap: Kth Largest Element, Top K Frequent Elements, Merge K Sorted Lists",
            links: [
              { t: "lc", label: "LC #215 Kth Largest",       url: "https://leetcode.com/problems/kth-largest-element-in-an-array/" },
              { t: "lc", label: "LC #347 Top K Frequent",     url: "https://leetcode.com/problems/top-k-frequent-elements/" },
              { t: "lc", label: "LC #23 Merge K Sorted Lists",url: "https://leetcode.com/problems/merge-k-sorted-lists/" }
            ]
          },
          {
            text: "[DSA] First Pramp mock — practice talking through your approach before writing any code",
            links: [
              { t: "ref", label: "Pramp.com (free mocks)", url: "https://www.pramp.com" }
            ]
          },
          {
            text: "[LLD] Design Uber/Ola ride-sharing: Driver, Rider, Trip, TripMatcher, PricingStrategy — use Strategy pattern",
            links: [
              { t: "gh", label: "Ride Sharing LLD — awesome-lld", url: "https://github.com/ashishps1/awesome-low-level-design/blob/main/problems/ride-sharing-system.md" }
            ]
          },
          {
            text: "[Code Review] Review an open-source Spring Boot Java repo: find 5 issues (SOLID, naming, exception handling, thread safety, test coverage)",
            links: [
              { t: "gh",  label: "Spring Boot smoke tests",      url: "https://github.com/spring-projects/spring-boot/tree/main/spring-boot-tests/spring-boot-smoke-tests" },
              { t: "ref", label: "Java Code Review Checklist",   url: "https://dzone.com/articles/java-code-review-checklist" }
            ]
          }
        ],
        resources: [
          { label: "Neetcode — Heap",  url: "https://neetcode.io/problems/kth-largest-element-in-a-stream" },
          { label: "Pramp.com",        url: "https://www.pramp.com" }
        ]
      },
      {
        label: "Week 7",
        title: "Graphs & machine coding: elevator system",
        badges: ["dsa", "mc", "lld"],
        tasks: [
          {
            text: "[DSA] BFS: Rotten Oranges, Number of Islands, Word Ladder",
            links: [
              { t: "lc", label: "LC #994 Rotten Oranges",  url: "https://leetcode.com/problems/rotting-oranges/" },
              { t: "lc", label: "LC #200 Number of Islands",url: "https://leetcode.com/problems/number-of-islands/" },
              { t: "lc", label: "LC #127 Word Ladder",      url: "https://leetcode.com/problems/word-ladder/" }
            ]
          },
          {
            text: "[DSA] DFS: Clone Graph, Course Schedule, Pacific Atlantic Water Flow",
            links: [
              { t: "lc", label: "LC #133 Clone Graph",             url: "https://leetcode.com/problems/clone-graph/" },
              { t: "lc", label: "LC #207 Course Schedule",          url: "https://leetcode.com/problems/course-schedule/" },
              { t: "lc", label: "LC #417 Pacific Atlantic",         url: "https://leetcode.com/problems/pacific-atlantic-water-flow/" }
            ]
          },
          {
            text: "[DSA] Union-Find: Redundant Connection, Number of Connected Components",
            links: [
              { t: "lc", label: "LC #684 Redundant Connection",         url: "https://leetcode.com/problems/redundant-connection/" },
              { t: "lc", label: "LC #323 Connected Components",          url: "https://leetcode.com/problems/number-of-connected-components-in-an-undirected-graph/" }
            ]
          },
          {
            text: "[Machine Coding] Build an Elevator System in 90 min: multiple elevators, floor requests, SCAN scheduling",
            links: [
              { t: "gh", label: "Elevator System — awesome-lld", url: "https://github.com/ashishps1/awesome-low-level-design/blob/main/problems/elevator-system.md" }
            ]
          },
          {
            text: "[Code Review] Review your own Elevator code: is scheduling logic separated from state? Thread-safe?",
            links: [
              { t: "ref", label: "Java Concurrency — Baeldung",    url: "https://www.baeldung.com/java-concurrency" },
              { t: "ref", label: "Effective Java (Item 66)",        url: "https://www.oreilly.com/library/view/effective-java/9780134686097/" }
            ]
          }
        ],
        resources: [
          { label: "Neetcode — Graphs",       url: "https://neetcode.io/problems/number-of-islands" },
          { label: "awesome-low-level-design", url: "https://github.com/ashishps1/awesome-low-level-design" }
        ]
      },
      {
        label: "Week 8",
        title: "Advanced sliding window & code review deep dive",
        badges: ["dsa", "cr"],
        tasks: [
          {
            text: "[DSA] Binary search on answer: Koko Eating Bananas, Capacity to Ship Packages",
            links: [
              { t: "lc", label: "LC #875 Koko Eating Bananas",    url: "https://leetcode.com/problems/koko-eating-bananas/" },
              { t: "lc", label: "LC #1011 Capacity to Ship",      url: "https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/" }
            ]
          },
          {
            text: "[DSA] Sliding window hard: Minimum Window Substring, Sliding Window Maximum",
            links: [
              { t: "lc", label: "LC #76 Min Window Substring",   url: "https://leetcode.com/problems/minimum-window-substring/" },
              { t: "lc", label: "LC #239 Sliding Window Max",    url: "https://leetcode.com/problems/sliding-window-maximum/" }
            ]
          },
          {
            text: "[DSA] Week 5–7 review: redo all problems you couldn't solve on first attempt",
            links: [
              { t: "nc", label: "Neetcode Roadmap", url: "https://neetcode.io/roadmap" }
            ]
          },
          {
            text: "[Code Review] Review a Spring Boot REST API: error handling, input validation, transaction boundaries, Kafka consumer patterns",
            links: [
              { t: "gh",  label: "Spring Kafka examples",          url: "https://github.com/spring-projects/spring-kafka" },
              { t: "ref", label: "Spring Best Practices — Baeldung",url: "https://www.baeldung.com/spring-boot-application-configuration" }
            ]
          },
          {
            text: "[Code Review] Create your personal 15-item code review checklist: naming, SOLID, concurrency, security, testability",
            links: [
              { t: "ref", label: "OWASP Java Security Cheat Sheet", url: "https://cheatsheetseries.owasp.org/cheatsheets/Java_Security_Cheat_Sheet.html" },
              { t: "ref", label: "Java Code Review Checklist",      url: "https://dzone.com/articles/java-code-review-checklist" }
            ]
          }
        ],
        resources: [
          { label: "Neetcode — Sliding Window",     url: "https://neetcode.io/problems/best-time-to-buy-and-sell-stock" },
          { label: "OWASP Java Cheat Sheet",        url: "https://cheatsheetseries.owasp.org/cheatsheets/Java_Security_Cheat_Sheet.html" }
        ]
      }
    ]
  },

  // ─────────────────────────────────────────────
  // MONTH 3
  // ─────────────────────────────────────────────
  {
    title: "Month 3 — DP + HLD begins + LLD advanced + Machine Coding ramp",
    goal:  "Dynamic programming, backtracking, and tries. HLD system design starts (1 session/week). LLD moves to distributed-system-adjacent designs. Machine coding rounds timed at 75 min.",
    weeks: [
      {
        label: "Week 9",
        title: "DP 1D + LLD: food delivery + HLD: URL shortener",
        badges: ["dsa", "lld", "sd"],
        tasks: [
          {
            text: "[DSA] 1D DP: Climbing Stairs, House Robber, Coin Change — understand state → recurrence → base case",
            links: [
              { t: "lc", label: "LC #70 Climbing Stairs", url: "https://leetcode.com/problems/climbing-stairs/" },
              { t: "lc", label: "LC #198 House Robber",   url: "https://leetcode.com/problems/house-robber/" },
              { t: "lc", label: "LC #322 Coin Change",    url: "https://leetcode.com/problems/coin-change/" }
            ]
          },
          {
            text: "[DSA] Practice BOTH top-down (memoization) and bottom-up (tabulation) for same problem — don't skip",
            links: [
              { t: "ref", label: "DP patterns — AlgoMaster", url: "https://blog.algomaster.io/p/20-dsa-patterns" },
              { t: "nc",  label: "Neetcode — 1D DP",         url: "https://neetcode.io/problems/climbing-stairs" }
            ]
          },
          {
            text: "[LLD] Design a Food Delivery system (DoorDash analog): Restaurant, MenuItem, Order, DeliveryAgent, OrderTracker — Observer for status updates",
            links: [
              { t: "gh", label: "Food Delivery LLD — awesome-lld", url: "https://github.com/ashishps1/awesome-low-level-design/blob/main/problems/food-delivery-service.md" }
            ]
          },
          {
            text: "[HLD] System Design (1hr): Design a URL Shortener — hashing, DB schema, redirect flow, caching, analytics",
            links: [
              { t: "ref", label: "ByteByteGo — URL Shortener",  url: "https://bytebytego.com/courses/system-design-interview/design-a-url-shortener" },
              { t: "gh",  label: "System Design Primer",         url: "https://github.com/donnemartin/system-design-primer#design-pastebin-dot-com-or-bit-dot-ly" }
            ]
          }
        ],
        resources: [
          { label: "Neetcode — 1D DP", url: "https://neetcode.io/problems/climbing-stairs" },
          { label: "ByteByteGo",       url: "https://bytebytego.com" }
        ]
      },
      {
        label: "Week 10",
        title: "DP 2D + machine coding: LRU & LFU cache",
        badges: ["dsa", "mc", "cr"],
        tasks: [
          {
            text: "[DSA] 2D DP: Unique Paths, Longest Common Subsequence, Edit Distance",
            links: [
              { t: "lc", label: "LC #62 Unique Paths",   url: "https://leetcode.com/problems/unique-paths/" },
              { t: "lc", label: "LC #1143 LCS",          url: "https://leetcode.com/problems/longest-common-subsequence/" },
              { t: "lc", label: "LC #72 Edit Distance",  url: "https://leetcode.com/problems/edit-distance/" }
            ]
          },
          {
            text: "[DSA] Knapsack: Partition Equal Subset Sum, Target Sum — DP needs volume, aim 8 problems",
            links: [
              { t: "lc", label: "LC #416 Partition Subset Sum", url: "https://leetcode.com/problems/partition-equal-subset-sum/" },
              { t: "lc", label: "LC #494 Target Sum",           url: "https://leetcode.com/problems/target-sum/" }
            ]
          },
          {
            text: "[Machine Coding] Build LRU Cache from scratch in 60 min (HashMap + doubly linked list, no built-ins)",
            links: [
              { t: "lc", label: "LC #146 LRU Cache",   url: "https://leetcode.com/problems/lru-cache/" },
              { t: "gh", label: "Cache LLD reference", url: "https://github.com/ashishps1/awesome-low-level-design/blob/main/problems/cache.md" }
            ]
          },
          {
            text: "[Machine Coding] Extend: build LFU Cache — harder variant, frequently asked at Airbnb/DoorDash",
            links: [
              { t: "lc", label: "LC #460 LFU Cache", url: "https://leetcode.com/problems/lfu-cache/" }
            ]
          },
          {
            text: "[Code Review] Review your cache implementation: is it thread-safe? Add ConcurrentHashMap + ReentrantLock",
            links: [
              { t: "ref", label: "Java Concurrency in Practice", url: "https://jcip.net/" },
              { t: "ref", label: "ConcurrentHashMap — Baeldung", url: "https://www.baeldung.com/java-concurrent-map" }
            ]
          }
        ],
        resources: [
          { label: "Neetcode — 2D DP",    url: "https://neetcode.io/problems/unique-paths" },
          { label: "ByteByteGo",          url: "https://bytebytego.com" }
        ]
      },
      {
        label: "Week 11",
        title: "Backtracking, tries & LLD: ticket booking",
        badges: ["dsa", "lld", "sd"],
        tasks: [
          {
            text: "[DSA] Backtracking: Subsets, Permutations, Combination Sum, Word Search",
            links: [
              { t: "lc", label: "LC #78 Subsets",       url: "https://leetcode.com/problems/subsets/" },
              { t: "lc", label: "LC #46 Permutations",  url: "https://leetcode.com/problems/permutations/" },
              { t: "lc", label: "LC #39 Combination Sum",url: "https://leetcode.com/problems/combination-sum/" },
              { t: "lc", label: "LC #79 Word Search",   url: "https://leetcode.com/problems/word-search/" }
            ]
          },
          {
            text: "[DSA] Trie: Implement Trie, Word Search II, Design Add and Search Words",
            links: [
              { t: "lc", label: "LC #208 Implement Trie",       url: "https://leetcode.com/problems/implement-trie-prefix-tree/" },
              { t: "lc", label: "LC #212 Word Search II",        url: "https://leetcode.com/problems/word-search-ii/" },
              { t: "lc", label: "LC #211 Add & Search Words",    url: "https://leetcode.com/problems/design-add-and-search-words-data-structure/" }
            ]
          },
          {
            text: "[LLD] Design BookMyShow: Show, Seat, Booking, PaymentProcessor, SeatLock — handle concurrent booking with optimistic locking",
            links: [
              { t: "gh",  label: "BookMyShow LLD — awesome-lld",    url: "https://github.com/ashishps1/awesome-low-level-design/blob/main/problems/online-ticket-booking-system.md" },
              { t: "ref", label: "Optimistic Locking — Baeldung",    url: "https://www.baeldung.com/jpa-optimistic-locking" }
            ]
          },
          {
            text: "[HLD] System Design (1hr): Design Autocomplete / Type-ahead — Trie vs Elasticsearch vs Redis sorted sets",
            links: [
              { t: "ref", label: "ByteByteGo — Autocomplete", url: "https://bytebytego.com/courses/system-design-interview/design-typeahead-suggestion" },
              { t: "gh",  label: "System Design Primer",       url: "https://github.com/donnemartin/system-design-primer" }
            ]
          }
        ],
        resources: [
          { label: "Neetcode — Backtracking", url: "https://neetcode.io/problems/combination-target-sum" },
          { label: "Neetcode — Tries",        url: "https://neetcode.io/problems/implement-prefix-tree" },
          { label: "Baeldung — Concurrency",  url: "https://www.baeldung.com/java-concurrency" }
        ]
      },
      {
        label: "Week 12",
        title: "Intervals, greedy, monotonic stack & machine coding: rate limiter",
        badges: ["dsa", "mc", "sd"],
        tasks: [
          {
            text: "[DSA] Intervals: Merge Intervals, Insert Interval, Meeting Rooms II",
            links: [
              { t: "lc", label: "LC #56 Merge Intervals",  url: "https://leetcode.com/problems/merge-intervals/" },
              { t: "lc", label: "LC #57 Insert Interval",  url: "https://leetcode.com/problems/insert-interval/" },
              { t: "lc", label: "LC #253 Meeting Rooms II",url: "https://leetcode.com/problems/meeting-rooms-ii/" }
            ]
          },
          {
            text: "[DSA] Greedy: Jump Game, Gas Station, Task Scheduler",
            links: [
              { t: "lc", label: "LC #55 Jump Game",       url: "https://leetcode.com/problems/jump-game/" },
              { t: "lc", label: "LC #134 Gas Station",    url: "https://leetcode.com/problems/gas-station/" },
              { t: "lc", label: "LC #621 Task Scheduler", url: "https://leetcode.com/problems/task-scheduler/" }
            ]
          },
          {
            text: "[DSA] Monotonic Stack: Largest Rectangle in Histogram, Trapping Rain Water",
            links: [
              { t: "lc", label: "LC #84 Largest Rectangle", url: "https://leetcode.com/problems/largest-rectangle-in-histogram/" },
              { t: "lc", label: "LC #42 Trapping Rain Water",url: "https://leetcode.com/problems/trapping-rain-water/" }
            ]
          },
          {
            text: "[Machine Coding] Build a Rate Limiter in 75 min: Token Bucket AND Sliding Window algorithms, configurable per user, thread-safe",
            links: [
              { t: "ref", label: "ByteByteGo — Rate Limiter",   url: "https://bytebytego.com/courses/system-design-interview/design-a-rate-limiter" },
              { t: "ref", label: "Guava RateLimiter (reference)",url: "https://guava.dev/releases/snapshot/api/docs/com/google/common/util/concurrent/RateLimiter.html" }
            ]
          },
          {
            text: "[HLD] System Design (1hr): Design a Hotel / Accommodation Booking Platform — availability calendar, search, pricing (Airbnb analog)",
            links: [
              { t: "ref", label: "ByteByteGo — Hotel Reservation", url: "https://bytebytego.com/courses/system-design-interview/design-a-hotel-reservation-system" },
              { t: "gh",  label: "System Design Primer",            url: "https://github.com/donnemartin/system-design-primer" }
            ]
          }
        ],
        resources: [
          { label: "ByteByteGo",          url: "https://bytebytego.com" },
          { label: "Neetcode — Intervals", url: "https://neetcode.io/problems/meeting-schedule" },
          { label: "System Design Primer", url: "https://github.com/donnemartin/system-design-primer" }
        ]
      }
    ]
  },

  // ─────────────────────────────────────────────
  // MONTH 4
  // ─────────────────────────────────────────────
  {
    title: "Month 4 — Company-specific prep: Airbnb & DoorDash",
    goal:  "Mirror what Airbnb and DoorDash actually test. Company-tagged DSA, deeper HLD, LLD for marketplace systems, timed machine coding, and behavioral STAR story preparation.",
    weeks: [
      {
        label: "Week 13",
        title: "Airbnb-tagged DSA + LLD: search & availability",
        badges: ["dsa", "lld", "sd"],
        tasks: [
          {
            text: "[DSA] Airbnb calendar booking: My Calendar I, My Calendar II, Job Scheduling",
            links: [
              { t: "lc", label: "LC #729 My Calendar I",    url: "https://leetcode.com/problems/my-calendar-i/" },
              { t: "lc", label: "LC #731 My Calendar II",   url: "https://leetcode.com/problems/my-calendar-ii/" },
              { t: "lc", label: "LC #1235 Job Scheduling",  url: "https://leetcode.com/problems/maximum-profit-in-job-scheduling/" }
            ]
          },
          {
            text: "[DSA] OOP design problem: Design an in-memory key-value store with TTL expiry",
            links: [
              { t: "lc", label: "LC #146 LRU Cache", url: "https://leetcode.com/problems/lru-cache/" },
              { t: "lc", label: "LC #460 LFU Cache", url: "https://leetcode.com/problems/lfu-cache/" },
              { t: "gh", label: "Cache LLD",         url: "https://github.com/ashishps1/awesome-low-level-design/blob/main/problems/cache.md" }
            ]
          },
          {
            text: "[LLD] Design Airbnb search system: Property, SearchFilter, RankingEngine, AvailabilityCalendar — Strategy pattern for ranking criteria",
            links: [
              { t: "gh",  label: "awesome-low-level-design",          url: "https://github.com/ashishps1/awesome-low-level-design" },
              { t: "ref", label: "Airbnb Engineering Blog",            url: "https://medium.com/airbnb-engineering" }
            ]
          },
          {
            text: "[HLD] System Design (1.5hr): Airbnb search & listing — availability, geo-search, caching, ranking, idempotent booking",
            links: [
              { t: "ref", label: "ByteByteGo — Hotel Reservation",        url: "https://bytebytego.com/courses/system-design-interview/design-a-hotel-reservation-system" },
              { t: "ref", label: "Airbnb Engineering — Search Ranking",    url: "https://medium.com/airbnb-engineering/search-ranking-at-airbnb-f1570f6c8f8b" }
            ]
          }
        ],
        resources: [
          { label: "Airbnb Engineering Blog",   url: "https://medium.com/airbnb-engineering" },
          { label: "System Design Primer",      url: "https://github.com/donnemartin/system-design-primer" },
          { label: "Grokking System Design",    url: "https://www.designgurus.io/course/grokking-the-system-design-interview" }
        ]
      },
      {
        label: "Week 14",
        title: "DoorDash-tagged DSA + machine coding: order system",
        badges: ["dsa", "mc", "sd"],
        tasks: [
          {
            text: "[DSA] Graphs & routing: Network Delay Time (Dijkstra), Cheapest Flights Within K Stops, Find the City",
            links: [
              { t: "lc", label: "LC #743 Network Delay Time",   url: "https://leetcode.com/problems/network-delay-time/" },
              { t: "lc", label: "LC #787 Cheapest Flights",     url: "https://leetcode.com/problems/cheapest-flights-within-k-stops/" },
              { t: "lc", label: "LC #1334 Find the City",       url: "https://leetcode.com/problems/find-the-city-with-the-smallest-number-of-neighbors-at-a-threshold-distance/" }
            ]
          },
          {
            text: "[DSA] Must-know cold: LRU Cache #146 — solve in under 25 min without hints. Also Find Median from Data Stream",
            links: [
              { t: "lc", label: "LC #146 LRU Cache",                url: "https://leetcode.com/problems/lru-cache/" },
              { t: "lc", label: "LC #295 Find Median from Stream",   url: "https://leetcode.com/problems/find-median-from-data-stream/" }
            ]
          },
          {
            text: "[Machine Coding] Build simplified DoorDash order management in 75 min: Order, Restaurant, Driver, Dispatcher — Observer for status, Strategy for driver assignment",
            links: [
              { t: "gh",  label: "Food Delivery LLD reference", url: "https://github.com/ashishps1/awesome-low-level-design/blob/main/problems/food-delivery-service.md" },
              { t: "ref", label: "DoorDash Engineering Blog",   url: "https://doordash.engineering/" }
            ]
          },
          {
            text: "[HLD] System Design (1.5hr): DoorDash delivery dispatch — driver matching, Kafka event stream, ETA prediction, surge pricing",
            links: [
              { t: "ref", label: "DoorDash — How we scaled order dispatch",url: "https://doordash.engineering/2020/09/02/optimizing-real-time-last-mile-delivery/" },
              { t: "ref", label: "ByteByteGo — Ride Sharing Design",       url: "https://bytebytego.com/courses/system-design-interview/design-a-ride-sharing-service" }
            ]
          }
        ],
        resources: [
          { label: "DoorDash Engineering Blog",  url: "https://doordash.engineering/" },
          { label: "ByteByteGo",                 url: "https://bytebytego.com" },
          { label: "Kafka Documentation",        url: "https://kafka.apache.org/documentation/" }
        ]
      },
      {
        label: "Week 15",
        title: "Hard DSA + mock interviews + code review",
        badges: ["dsa", "mock", "cr"],
        tasks: [
          {
            text: "[DSA] 3 hard problems — partial solution + clear verbal communication scores well at senior level",
            links: [
              { t: "lc", label: "LC #295 Find Median from Stream", url: "https://leetcode.com/problems/find-median-from-data-stream/" },
              { t: "lc", label: "LC #42 Trapping Rain Water",      url: "https://leetcode.com/problems/trapping-rain-water/" },
              { t: "lc", label: "LC #76 Min Window Substring",     url: "https://leetcode.com/problems/minimum-window-substring/" }
            ]
          },
          {
            text: "[Mock] 2 full DSA mocks on Interviewing.io — ask for written feedback on communication specifically",
            links: [
              { t: "ref", label: "Interviewing.io (free sessions)", url: "https://interviewing.io" }
            ]
          },
          {
            text: "[Code Review] Review a Spring Boot microservice on GitHub: REST design, exception handling, DB transactions, Kafka patterns",
            links: [
              { t: "gh",  label: "Spring Kafka reference",         url: "https://github.com/spring-projects/spring-kafka" },
              { t: "gh",  label: "Spring Boot microservice example",url: "https://github.com/rohitghatol/spring-boot-microservices" }
            ]
          },
          {
            text: "[Code Review] Write a PR review document as if reviewing a junior's code — practice tone expected of a Tech Lead",
            links: [
              { t: "ref", label: "Google Code Review Guide",  url: "https://google.github.io/eng-practices/review/reviewer/" },
              { t: "ref", label: "Conventional Comments",     url: "https://conventionalcomments.org/" }
            ]
          },
          {
            text: "[HLD] System Design (1.5hr): Design a Notification Service + Rate Limiter",
            links: [
              { t: "ref", label: "ByteByteGo — Rate Limiter",        url: "https://bytebytego.com/courses/system-design-interview/design-a-rate-limiter" },
              { t: "ref", label: "ByteByteGo — Notification System", url: "https://bytebytego.com/courses/system-design-interview/design-a-notification-system" }
            ]
          }
        ],
        resources: [
          { label: "Interviewing.io",         url: "https://interviewing.io" },
          { label: "Google Code Review Guide", url: "https://google.github.io/eng-practices/review/" },
          { label: "ByteByteGo",              url: "https://bytebytego.com" }
        ]
      },
      {
        label: "Week 16",
        title: "Behavioral + LLD: payment system",
        badges: ["beh", "lld", "sd"],
        tasks: [
          {
            text: "[Behavioral] Write all 8 STAR stories: migrations, incidents, mentoring, conflict, ownership, failure, cross-team, delivery under pressure",
            links: [
              { t: "ref", label: "STAR method guide",     url: "https://www.indeed.com/career-advice/interviewing/how-to-use-the-star-interview-response-technique" },
              { t: "ref", label: "Airbnb interview values",url: "https://careers.airbnb.com/" }
            ]
          },
          {
            text: "[Behavioral] Practice each story out loud, record yourself — 90 seconds max per story with clear metrics",
            links: [
              { t: "ref", label: "Pramp — Behavioral mock", url: "https://www.pramp.com" }
            ]
          },
          {
            text: "[LLD] Design a payment processing system: PaymentRequest, PaymentProcessor, PaymentGateway, RefundHandler, IdempotencyKey",
            links: [
              { t: "gh",  label: "awesome-low-level-design",        url: "https://github.com/ashishps1/awesome-low-level-design" },
              { t: "ref", label: "Idempotency — Stripe Engineering", url: "https://stripe.com/blog/idempotency" }
            ]
          },
          {
            text: "[HLD] System Design (1.5hr): Distributed payment system — splits, retry logic, idempotency, exactly-once semantics",
            links: [
              { t: "ref", label: "Stripe Engineering Blog",        url: "https://stripe.com/blog/idempotency" },
              { t: "ref", label: "ByteByteGo — Payment System",   url: "https://bytebytego.com/courses/system-design-interview/design-a-payment-system" }
            ]
          }
        ],
        resources: [
          { label: "Stripe Engineering Blog",   url: "https://stripe.com/blog" },
          { label: "ByteByteGo — Payment",      url: "https://bytebytego.com/courses/system-design-interview/design-a-payment-system" },
          { label: "STAR method",               url: "https://www.indeed.com/career-advice/interviewing/how-to-use-the-star-interview-response-technique" }
        ]
      }
    ]
  },

  // ─────────────────────────────────────────────
  // MONTH 5
  // ─────────────────────────────────────────────
  {
    title: "Month 5 — Mock interview intensity + full loop simulations",
    goal:  "2–3 mocks per week. LLD mocks added alongside DSA. Machine coding under real interview pressure. Fix weak spots. Start applying to warm-up companies now.",
    weeks: [
      {
        label: "Week 17",
        title: "Weak area DSA + LLD mock #1",
        badges: ["dsa", "lld", "mock"],
        tasks: [
          {
            text: "[DSA] Identify your #1 weakest pattern (typically DP or graphs) — spend the full week drilling it: 15 problems (10 medium, 5 hard)",
            links: [
              { t: "nc",  label: "Neetcode — DP",          url: "https://neetcode.io/problems/climbing-stairs" },
              { t: "ref", label: "AlgoMaster Newsletter",  url: "https://blog.algomaster.io/" }
            ]
          },
          {
            text: "[Mock] 2 full DSA mocks on Interviewing.io — ask specifically for feedback on communication, not just correctness",
            links: [
              { t: "ref", label: "Interviewing.io", url: "https://interviewing.io" }
            ]
          },
          {
            text: "[LLD Mock] Cold LLD: design Snake game or Tic-Tac-Toe from scratch in 60 min",
            links: [
              { t: "gh", label: "Snake Game — awesome-lld",  url: "https://github.com/ashishps1/awesome-low-level-design/blob/main/problems/snake-and-ladder-game.md" },
              { t: "gh", label: "Tic-Tac-Toe — awesome-lld", url: "https://github.com/ashishps1/awesome-low-level-design/blob/main/problems/tic-tac-toe.md" }
            ]
          },
          {
            text: "[LLD Mock] Debrief: were classes cohesive? Design patterns applied correctly? Extensible to new requirements?",
            links: [
              { t: "gh", label: "awesome-low-level-design", url: "https://github.com/ashishps1/awesome-low-level-design" }
            ]
          },
          {
            text: "[HLD] System design mock: present a full design for 45 min without notes — have a friend ask questions",
            links: [
              { t: "ref", label: "Interviewing.io", url: "https://interviewing.io" },
              { t: "ref", label: "Pramp.com",        url: "https://www.pramp.com" }
            ]
          }
        ],
        resources: [
          { label: "Interviewing.io",          url: "https://interviewing.io" },
          { label: "awesome-low-level-design", url: "https://github.com/ashishps1/awesome-low-level-design" },
          { label: "AlgoMaster Blog",          url: "https://blog.algomaster.io/" }
        ]
      },
      {
        label: "Week 18",
        title: "Weak area #2 + machine coding: Splitwise",
        badges: ["dsa", "mc", "cr"],
        tasks: [
          {
            text: "[DSA] Weak area #2 (typically backtracking or bit manipulation) — drill 10+ problems",
            links: [
              { t: "nc", label: "Neetcode — Backtracking",   url: "https://neetcode.io/problems/combination-target-sum" },
              { t: "nc", label: "Neetcode — Bit Manipulation",url: "https://neetcode.io/problems/single-number" }
            ]
          },
          {
            text: "[Machine Coding] Build Splitwise expense splitter in 75 min: Group, Expense, Settlement, Balance — handle equal/percentage/exact splits",
            links: [
              { t: "gh", label: "Splitwise LLD — awesome-lld", url: "https://github.com/ashishps1/awesome-low-level-design/blob/main/problems/splitwise.md" }
            ]
          },
          {
            text: "[Machine Coding] Debrief: clean APIs? Proper encapsulation? No god classes? Would a Tech Lead approve this PR?",
            links: [
              { t: "ref", label: "Refactoring best practices", url: "https://refactoring.guru/refactoring" }
            ]
          },
          {
            text: "[Code Review] Review your own Splitwise code 24 hrs later — find issues with fresh eyes",
            links: [
              { t: "ref", label: "Google Code Review Guide", url: "https://google.github.io/eng-practices/review/reviewer/" }
            ]
          },
          {
            text: "[Behavioral] Refine your 3 best STAR stories into polished 90-second narratives — time them with a stopwatch",
            links: [
              { t: "ref", label: "Pramp — Behavioral mock", url: "https://www.pramp.com" }
            ]
          }
        ],
        resources: [
          { label: "Clean Code — Robert Martin",   url: "https://www.oreilly.com/library/view/clean-code-a/9780136083238/" },
          { label: "awesome-low-level-design",     url: "https://github.com/ashishps1/awesome-low-level-design" }
        ]
      },
      {
        label: "Week 19",
        title: "Full loop simulation #1",
        badges: ["mock", "sd", "beh"],
        tasks: [
          {
            text: "[Full Loop] Simulate complete interview in one sitting: DSA (35 min) → LLD (45 min) → HLD (45 min) → Behavioral (20 min)",
            links: [
              { t: "ref", label: "Interviewing.io", url: "https://interviewing.io" },
              { t: "ref", label: "Pramp.com",        url: "https://www.pramp.com" }
            ]
          },
          {
            text: "[Apply] Submit to 5 warm-up companies: Stripe, Lyft, Pinterest, Robinhood, Twilio",
            links: [
              { t: "ref", label: "Levels.fyi salary research", url: "https://www.levels.fyi" },
              { t: "ref", label: "Blind (interview reports)",  url: "https://www.teamblind.com" }
            ]
          },
          {
            text: "[HLD] System Design (1.5hr): Design a real-time chat system (Slack/WhatsApp scale)",
            links: [
              { t: "ref", label: "ByteByteGo — Chat System",  url: "https://bytebytego.com/courses/system-design-interview/design-a-chat-system" },
              { t: "gh",  label: "System Design Primer",       url: "https://github.com/donnemartin/system-design-primer" }
            ]
          },
          {
            text: "[LLD] Design a Notification System: NotificationService, Channel (Email/SMS/Push), TemplateEngine, DeliveryTracker",
            links: [
              { t: "gh", label: "Notification System LLD", url: "https://github.com/ashishps1/awesome-low-level-design/blob/main/problems/notification-service.md" }
            ]
          },
          {
            text: "[Code Review] Review an open-source Kafka consumer project — error handling, retry, dead letter queue patterns",
            links: [
              { t: "gh",  label: "Spring Kafka DLQ patterns", url: "https://github.com/spring-projects/spring-kafka" },
              { t: "ref", label: "Kafka DLQ — Confluent",     url: "https://www.confluent.io/blog/kafka-connect-deep-dive-error-handling-dead-letter-queues/" }
            ]
          }
        ],
        resources: [
          { label: "ByteByteGo — Chat System",   url: "https://bytebytego.com/courses/system-design-interview/design-a-chat-system" },
          { label: "Glassdoor — Airbnb SE",      url: "https://www.glassdoor.com/Interview/Airbnb-Software-Engineer-Interview-Questions-EI_IE391850.0,6_KO7,24.htm" }
        ]
      },
      {
        label: "Week 20",
        title: "Full loop simulation #2 + apply to targets",
        badges: ["mock", "sd", "mc"],
        tasks: [
          {
            text: "[Full Loop] Full loop simulation #2 — improve specifically on timing and communication gaps from Week 19",
            links: [
              { t: "ref", label: "Interviewing.io", url: "https://interviewing.io" }
            ]
          },
          {
            text: "[Apply] Submit to Airbnb, DoorDash, Uber, Lyft — have tailored resume and cover letter ready",
            links: [
              { t: "ref", label: "Airbnb Careers",   url: "https://careers.airbnb.com/" },
              { t: "ref", label: "DoorDash Careers", url: "https://careers.doordash.com/" },
              { t: "ref", label: "Levels.fyi comp",  url: "https://www.levels.fyi" }
            ]
          },
          {
            text: "[Machine Coding] Build simplified Twitter timeline (in-memory) in 75 min: Tweet, User, Feed, FollowGraph",
            links: [
              { t: "gh", label: "Twitter/Instagram LLD reference", url: "https://github.com/ashishps1/awesome-low-level-design/blob/main/problems/twitter.md" }
            ]
          },
          {
            text: "[HLD] System Design (1.5hr): Design a video streaming platform — CDN, chunked upload, adaptive bitrate",
            links: [
              { t: "ref", label: "ByteByteGo — YouTube Design", url: "https://bytebytego.com/courses/system-design-interview/design-youtube" },
              { t: "ref", label: "Netflix Tech Blog",            url: "https://netflixtechblog.com/" }
            ]
          },
          {
            text: "[Prep] Compile your cheat sheet: 10 DSA patterns + 5 LLD patterns + top 5 HLD building blocks",
            links: [
              { t: "ref", label: "AlgoMaster — 20 DSA Patterns", url: "https://blog.algomaster.io/p/20-dsa-patterns" },
              { t: "gh",  label: "System Design Primer",         url: "https://github.com/donnemartin/system-design-primer" }
            ]
          }
        ],
        resources: [
          { label: "ByteByteGo Vol 2", url: "https://bytebytego.com" },
          { label: "Levels.fyi",       url: "https://www.levels.fyi" },
          { label: "Blind",            url: "https://www.teamblind.com" }
        ]
      }
    ]
  },

  // ─────────────────────────────────────────────
  // MONTH 6
  // ─────────────────────────────────────────────
  {
    title: "Month 6 — Final polish, live interviews & offers",
    goal:  "Revise more than you learn new things. Live interviews are happening. Lead with your 14 years of system design depth — it's your biggest differentiator over junior candidates.",
    weeks: [
      {
        label: "Week 21",
        title: "Full revision sprint — DSA + LLD",
        badges: ["dsa", "lld", "cr"],
        tasks: [
          {
            text: "[DSA] Redo every problem you marked wrong in months 1–4 — aim 50+ problems, under 20 min each without hints",
            links: [
              { t: "nc",  label: "Neetcode Roadmap (review mode)", url: "https://neetcode.io/roadmap" },
              { t: "ref", label: "AlgoMaster spaced repetition",   url: "https://algomaster.io/" }
            ]
          },
          {
            text: "[LLD] Redo your 3 weakest designs from scratch without notes, timed at 45 min each",
            links: [
              { t: "gh", label: "awesome-low-level-design", url: "https://github.com/ashishps1/awesome-low-level-design" },
              { t: "gh", label: "low-level-design-primer",  url: "https://github.com/prasadgujar/low-level-design-primer" }
            ]
          },
          {
            text: "[LLD] Must be solid cold: Parking Lot, Ride Sharing, BookMyShow, LRU Cache, Rate Limiter, Notification System",
            links: [
              { t: "gh", label: "awesome-lld — all problems", url: "https://github.com/ashishps1/awesome-low-level-design" }
            ]
          },
          {
            text: "[Code Review] Final review of all machine coding projects — would you approve this as a Tech Lead?",
            links: [
              { t: "ref", label: "Google Code Review Guide", url: "https://google.github.io/eng-practices/review/reviewer/" }
            ]
          },
          {
            text: "[Resume] Update resume — add any new skills, tools, or AI/RAG projects completed during prep",
            links: [
              { t: "ref", label: "Levels.fyi — resume tips", url: "https://www.levels.fyi" }
            ]
          }
        ],
        resources: [
          { label: "awesome-low-level-design", url: "https://github.com/ashishps1/awesome-low-level-design" },
          { label: "Neetcode Roadmap",          url: "https://neetcode.io/roadmap" }
        ]
      },
      {
        label: "Week 22",
        title: "Company research + final mocks",
        badges: ["mock", "sd", "beh"],
        tasks: [
          {
            text: "[Research] Airbnb: microservices migration, pricing engine, host guarantee system, search ranking",
            links: [
              { t: "ref", label: "Airbnb Engineering Blog",          url: "https://medium.com/airbnb-engineering" },
              { t: "ref", label: "Airbnb — Search Ranking post",     url: "https://medium.com/airbnb-engineering/search-ranking-at-airbnb-f1570f6c8f8b" }
            ]
          },
          {
            text: "[Research] DoorDash: real-time logistics, ML for ETA, merchant growth platform, DashPass architecture",
            links: [
              { t: "ref", label: "DoorDash Engineering Blog",     url: "https://doordash.engineering/" },
              { t: "ref", label: "DoorDash — Order Dispatch post",url: "https://doordash.engineering/2020/09/02/optimizing-real-time-last-mile-delivery/" }
            ]
          },
          {
            text: "[Mock] 3 full mock interviews — simulate exact format of your target company (check Glassdoor for recent loop reports)",
            links: [
              { t: "ref", label: "Interviewing.io",        url: "https://interviewing.io" },
              { t: "ref", label: "Glassdoor — Airbnb SE",  url: "https://www.glassdoor.com/Interview/Airbnb-Software-Engineer-Interview-Questions-EI_IE391850.0,6_KO7,24.htm" }
            ]
          },
          {
            text: "[LLD Mock] Cold LLD: design a Logging Framework or Distributed Job Scheduler in 45 min",
            links: [
              { t: "gh", label: "Logging Framework — awesome-lld", url: "https://github.com/ashishps1/awesome-low-level-design/blob/main/problems/logging-framework.md" }
            ]
          },
          {
            text: "[Behavioral] Prepare 3 sharp technical questions to ask your interviewer — signals seniority and curiosity",
            links: [
              { t: "ref", label: "Questions to ask in interviews", url: "https://www.techinterviewhandbook.org/final-questions/" }
            ]
          }
        ],
        resources: [
          { label: "Airbnb Engineering Blog",  url: "https://medium.com/airbnb-engineering" },
          { label: "DoorDash Engineering Blog", url: "https://doordash.engineering/" },
          { label: "Tech Interview Handbook",   url: "https://www.techinterviewhandbook.org/" }
        ]
      },
      {
        label: "Week 23",
        title: "Live interviews — stay sharp",
        badges: ["mock", "mc", "beh"],
        tasks: [
          {
            text: "[DSA] 1 problem per day to stay sharp — only confident patterns, no new hard problems",
            links: [
              { t: "ref", label: "Leetcode Daily Challenge", url: "https://leetcode.com/problemset/" },
              { t: "nc",  label: "Neetcode Roadmap",          url: "https://neetcode.io/roadmap" }
            ]
          },
          {
            text: "[Machine Coding] 1 machine coding round per week during active interviews — keep muscle memory fresh",
            links: [
              { t: "gh", label: "awesome-lld — all problems", url: "https://github.com/ashishps1/awesome-low-level-design" }
            ]
          },
          {
            text: "[Debrief] After each real interview: write down immediately what you froze on, what landed well",
            links: [
              { t: "ref", label: "Blind — interview debriefs", url: "https://www.teamblind.com" }
            ]
          },
          {
            text: "[Pitch] Practice explaining your Kafka/RAG pipeline/AWS architecture in 5-min interview-friendly format",
            links: [
              { t: "ref", label: "ByteByteGo — distributed systems vocabulary", url: "https://bytebytego.com" }
            ]
          },
          {
            text: "[Comp] Check Levels.fyi for Airbnb/DoorDash Senior/Staff comp before any offer conversations",
            links: [
              { t: "ref", label: "Levels.fyi — Airbnb",   url: "https://www.levels.fyi/companies/airbnb/salaries/software-engineer" },
              { t: "ref", label: "Levels.fyi — DoorDash",  url: "https://www.levels.fyi/companies/doordash/salaries/software-engineer" }
            ]
          }
        ],
        resources: [
          { label: "Levels.fyi",      url: "https://www.levels.fyi" },
          { label: "Blind",           url: "https://www.teamblind.com" },
          { label: "USCIS H1B info",  url: "https://www.uscis.gov/working-in-the-united-states/h-1b-specialty-occupations" }
        ]
      },
      {
        label: "Week 24",
        title: "Mindset, offers & celebration",
        badges: ["beh"],
        tasks: [
          {
            text: "[DSA] Light only: 1 easy/medium per day — no new hard problems, protect your confidence",
            links: [
              { t: "ref", label: "Leetcode Daily", url: "https://leetcode.com/problemset/" }
            ]
          },
          {
            text: "[Behavioral] Final run: all 8 STAR stories, timed out loud, as if in a real interview — record yourself",
            links: [
              { t: "ref", label: "STAR method", url: "https://www.indeed.com/career-advice/interviewing/how-to-use-the-star-interview-response-technique" }
            ]
          },
          {
            text: "[LLD] Quick mental walkthrough of top 5 LLD designs — 10 min visualization only, no coding needed",
            links: [
              { t: "gh", label: "awesome-low-level-design", url: "https://github.com/ashishps1/awesome-low-level-design" }
            ]
          },
          {
            text: "[H1B] Have immigration attorney on standby — H1B transfer paperwork can move fast once offer is received",
            links: [
              { t: "ref", label: "USCIS H1B Transfer info",  url: "https://www.uscis.gov/working-in-the-united-states/h-1b-specialty-occupations" },
              { t: "ref", label: "Immi.com H1B Transfer Guide",url: "https://www.immi.com/h1b/h1b-transfer.html" }
            ]
          },
          {
            text: "[Celebrate] 6 months of consistent multi-track senior-level preparation is a genuine achievement — own it",
            links: []
          }
        ],
        resources: [
          { label: "USCIS H1B",               url: "https://www.uscis.gov/working-in-the-united-states/h-1b-specialty-occupations" },
          { label: "Blind — negotiation",      url: "https://www.teamblind.com" }
        ]
      }
    ]
  }

]; // end PLAN
