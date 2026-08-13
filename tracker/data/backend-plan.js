/**
 * backend-plan.js — Backend/Systems deep-dive tracker.
 *
 * Scope: Java • Spring Boot • Kafka • AWS (SNS/SQS/S3/Lambda/DynamoDB) •
 *        SQL • Redis • CI/CD • Microservices
 *
 * HOW TO EDIT:
 *   • Add/remove a month   → add/remove an object in the PLAN array
 *   • Add/remove a week    → add/remove an object in a month's `weeks` array
 *   • Add/remove a task    → add/remove an object in a week's `tasks` array
 *       link types: 'doc' (official docs), 'ref' (article/blog),
 *                   'gh' (GitHub), 'yt' (YouTube), 'lc' (LeetCode/coding)
 *   • Add a resource       → add an object to a week's `resources` array
 *
 * BADGE KEYS (use in `badges` array):
 *   java | spring | kafka | aws | sql | redis | cicd | msa
 */

const BACKEND_PLAN = [

  // ─────────────────────────────────────────────
  // MONTH 1 — Java core + Spring Boot foundations
  // ─────────────────────────────────────────────
  {
    title: "Month 1 — Java Core + Spring Boot Foundations",
    goal:  "Rebuild Java fundamentals to interview sharpness (OOP, collections, concurrency, JVM, modern Java), then layer Spring Boot on top: REST APIs, data access, security, and testing.",
    weeks: [
      {
        label: "Week 1",
        title: "Java OOP, collections & exceptions + Spring Boot bootstrapping",
        badges: ["java", "spring"],
        tasks: [
          {
            text: "[Java] OOP deep dive: encapsulation, inheritance vs composition, polymorphism, abstract class vs interface, equals()/hashCode()/toString() contracts",
            links: [
              { t: "ref", label: "Baeldung — equals & hashCode", url: "https://www.baeldung.com/java-equals-hashcode-contracts" },
              { t: "ref", label: "Effective Java (Items 10-12)", url: "https://www.oreilly.com/library/view/effective-java/9780134686097/" }
            ]
          },
          {
            text: "[Java] Collections framework: List/Set/Map implementations, when to use ArrayDeque vs LinkedList, TreeMap vs HashMap vs LinkedHashMap, comparator vs comparable",
            links: [
              { t: "doc", label: "Java Collections Framework overview", url: "https://docs.oracle.com/javase/tutorial/collections/index.html" },
              { t: "ref", label: "Baeldung — HashMap internals",         url: "https://www.baeldung.com/java-hashmap" }
            ]
          },
          {
            text: "[Java] Exception handling: checked vs unchecked, custom exceptions, try-with-resources, exception chaining — write a small library that models both",
            links: [
              { t: "doc", label: "Oracle — Exceptions tutorial", url: "https://docs.oracle.com/javase/tutorial/essential/exceptions/" },
              { t: "ref", label: "Baeldung — Custom exceptions",  url: "https://www.baeldung.com/java-new-custom-exception" }
            ]
          },
          {
            text: "[Spring Boot] Set up a Spring Boot 3.x project (Spring Initializr), understand auto-configuration, application.yml profiles, and the component-scan/bean lifecycle",
            links: [
              { t: "doc", label: "Spring Initializr",                url: "https://start.spring.io/" },
              { t: "ref", label: "Baeldung — Spring Boot annotations", url: "https://www.baeldung.com/spring-boot-annotations" }
            ]
          },
          {
            text: "[Spring Boot] Build a first REST controller with @RestController, @RequestMapping, DTOs, and global exception handling via @ControllerAdvice",
            links: [
              { t: "ref", label: "Baeldung — Error handling for REST", url: "https://www.baeldung.com/exception-handling-for-rest-with-spring" },
              { t: "doc", label: "Spring MVC docs",                    url: "https://docs.spring.io/spring-framework/reference/web/webmvc.html" }
            ]
          }
        ],
        resources: [
          { label: "Effective Java, 3rd Ed.",     url: "https://www.oreilly.com/library/view/effective-java/9780134686097/" },
          { label: "Baeldung",                    url: "https://www.baeldung.com/" },
          { label: "Spring Boot Reference Docs",  url: "https://docs.spring.io/spring-boot/index.html" }
        ]
      },
      {
        label: "Week 2",
        title: "Java concurrency + Spring Boot REST, validation & DTOs",
        badges: ["java", "spring"],
        tasks: [
          {
            text: "[Java] Threads & the JMM: Runnable vs Thread, synchronized, volatile, happens-before relationship — explain why double-checked locking needs volatile",
            links: [
              { t: "ref", label: "Baeldung — Java Memory Model",  url: "https://www.baeldung.com/java-volatile" },
              { t: "doc", label: "JLS — Threads and Locks",       url: "https://docs.oracle.com/javase/specs/jls/se17/html/jls-17.html" }
            ]
          },
          {
            text: "[Java] java.util.concurrent: ExecutorService, Future/CompletableFuture, ConcurrentHashMap, CountDownLatch, Semaphore — build a small thread-pool based file processor",
            links: [
              { t: "ref", label: "Baeldung — ExecutorService guide",      url: "https://www.baeldung.com/java-executor-service-tutorial" },
              { t: "ref", label: "Baeldung — CompletableFuture guide",    url: "https://www.baeldung.com/java-completablefuture" }
            ]
          },
          {
            text: "[Java] Deadlocks, livelocks, race conditions — reproduce a deadlock intentionally, then fix it with lock ordering",
            links: [
              { t: "ref", label: "Baeldung — Deadlock in Java", url: "https://www.baeldung.com/java-deadlock-livelock" }
            ]
          },
          {
            text: "[Spring Boot] Request validation with Bean Validation (@Valid, @NotNull, custom validators), consistent error response shape (RFC 7807 problem details)",
            links: [
              { t: "ref", label: "Baeldung — Validation for REST APIs", url: "https://www.baeldung.com/spring-boot-bean-validation" },
              { t: "doc", label: "Spring — ProblemDetail",              url: "https://docs.spring.io/spring-framework/reference/web/webmvc/mvc-ann-rest-exceptions.html" }
            ]
          },
          {
            text: "[Spring Boot] Layered architecture: Controller → Service → Repository, DTO vs Entity mapping (MapStruct), and idempotent PUT vs POST semantics",
            links: [
              { t: "ref", label: "Baeldung — MapStruct guide",     url: "https://www.baeldung.com/mapstruct" },
              { t: "ref", label: "REST API best practices",        url: "https://www.baeldung.com/rest-api-best-practices-design" }
            ]
          }
        ],
        resources: [
          { label: "Java Concurrency in Practice", url: "https://jcip.net/" },
          { label: "Baeldung — Concurrency",        url: "https://www.baeldung.com/java-concurrency" }
        ]
      },
      {
        label: "Week 3",
        title: "Modern Java (streams/lambdas) + Spring Data JPA & SQL basics",
        badges: ["java", "spring", "sql"],
        tasks: [
          {
            text: "[Java] Streams API: map/filter/reduce/collect, Collectors.groupingBy/partitioningBy, parallel streams and when they hurt more than help",
            links: [
              { t: "ref", label: "Baeldung — Java Streams guide",    url: "https://www.baeldung.com/java-8-streams" },
              { t: "ref", label: "Baeldung — Collectors guide",      url: "https://www.baeldung.com/java-8-collectors" }
            ]
          },
          {
            text: "[Java] Functional interfaces & lambdas: Function/Supplier/Consumer/Predicate, method references, Optional (avoid null-checking anti-patterns)",
            links: [
              { t: "ref", label: "Baeldung — Functional interfaces", url: "https://www.baeldung.com/java-8-functional-interfaces" },
              { t: "ref", label: "Baeldung — Optional guide",        url: "https://www.baeldung.com/java-optional" }
            ]
          },
          {
            text: "[Spring Boot] Spring Data JPA: repositories, derived queries, @Query/JPQL, pagination & sorting, N+1 problem and fetch strategies",
            links: [
              { t: "doc", label: "Spring Data JPA reference",         url: "https://docs.spring.io/spring-data/jpa/reference/" },
              { t: "ref", label: "Baeldung — Avoiding N+1 in JPA",     url: "https://www.baeldung.com/hibernate-common-performance-problems-in-logs" }
            ]
          },
          {
            text: "[SQL] Core SQL refresher: JOIN types (inner/left/right/full), GROUP BY + HAVING, window functions (ROW_NUMBER, RANK, LAG/LEAD)",
            links: [
              { t: "ref", label: "Mode — SQL window functions tutorial", url: "https://mode.com/sql-tutorial/sql-window-functions/" },
              { t: "lc",  label: "LeetCode — SQL 50 study plan",         url: "https://leetcode.com/studyplan/top-sql-50/" }
            ]
          },
          {
            text: "[SQL] Transactions & isolation levels (READ COMMITTED, REPEATABLE READ, SERIALIZABLE), pessimistic vs optimistic locking, deadlocks in SQL",
            links: [
              { t: "ref", label: "PostgreSQL — Transaction isolation", url: "https://www.postgresql.org/docs/current/transaction-iso.html" },
              { t: "ref", label: "Baeldung — Optimistic locking in JPA", url: "https://www.baeldung.com/jpa-optimistic-locking" }
            ]
          }
        ],
        resources: [
          { label: "Spring Data JPA Docs",   url: "https://docs.spring.io/spring-data/jpa/reference/" },
          { label: "Mode SQL Tutorial",      url: "https://mode.com/sql-tutorial/" },
          { label: "Use The Index, Luke",    url: "https://use-the-index-luke.com/" }
        ]
      },
      {
        label: "Week 4",
        title: "JVM internals + Spring Security & testing",
        badges: ["java", "spring"],
        tasks: [
          {
            text: "[Java] JVM memory model: heap vs stack, young/old gen, GC algorithms (G1, ZGC) at a high level, reading a basic GC log, common OOM causes",
            links: [
              { t: "ref", label: "Baeldung — JVM garbage collectors",  url: "https://www.baeldung.com/jvm-garbage-collectors" },
              { t: "doc", label: "Oracle — HotSpot GC tuning guide",   url: "https://docs.oracle.com/en/java/javase/17/gctuning/" }
            ]
          },
          {
            text: "[Java] Classloading, JIT compilation basics, and how to read a thread dump / heap dump when debugging a stuck production service",
            links: [
              { t: "ref", label: "Baeldung — Analyzing thread dumps", url: "https://www.baeldung.com/java-analyze-thread-dumps" }
            ]
          },
          {
            text: "[Spring Boot] Spring Security fundamentals: filter chain, authentication vs authorization, stateless JWT auth, method-level security (@PreAuthorize)",
            links: [
              { t: "doc", label: "Spring Security reference",          url: "https://docs.spring.io/spring-security/reference/" },
              { t: "ref", label: "Baeldung — JWT with Spring Security", url: "https://www.baeldung.com/spring-security-oauth-jwt" }
            ]
          },
          {
            text: "[Spring Boot] Testing pyramid: JUnit 5 + Mockito for unit tests, @SpringBootTest / @WebMvcTest / @DataJpaTest slices, Testcontainers for integration tests",
            links: [
              { t: "ref", label: "Baeldung — Testing in Spring Boot",  url: "https://www.baeldung.com/spring-boot-testing" },
              { t: "doc", label: "Testcontainers docs",                url: "https://testcontainers.com/" }
            ]
          },
          {
            text: "[Month 1 review] Build and fully test a small 'Task Management' REST service (CRUD + validation + JPA + JWT auth) end-to-end — this becomes your reusable base project",
            links: [
              { t: "ref", label: "Baeldung — Spring Boot CRUD REST API", url: "https://www.baeldung.com/spring-boot-crud-thymeleaf" }
            ]
          }
        ],
        resources: [
          { label: "Spring Security Docs",     url: "https://docs.spring.io/spring-security/reference/" },
          { label: "Testcontainers",           url: "https://testcontainers.com/" },
          { label: "Baeldung — JVM",           url: "https://www.baeldung.com/jvm-tutorial" }
        ]
      }
    ]
  },

  // ─────────────────────────────────────────────
  // MONTH 2 — Kafka + AWS + Redis
  // ─────────────────────────────────────────────
  {
    title: "Month 2 — Kafka + AWS (SNS/SQS/S3/Lambda/DynamoDB) + Redis",
    goal:  "Go deep on event streaming with Kafka, master core AWS building blocks used in almost every distributed backend, and add Redis for caching, rate limiting, and pub/sub.",
    weeks: [
      {
        label: "Week 5",
        title: "Kafka fundamentals + Spring Kafka producer/consumer",
        badges: ["kafka", "spring"],
        tasks: [
          {
            text: "[Kafka] Core concepts: topics, partitions, offsets, brokers, replication factor, ISR (in-sync replicas) — draw the architecture from memory",
            links: [
              { t: "doc", label: "Kafka — Introduction",         url: "https://kafka.apache.org/documentation/#introduction" },
              { t: "ref", label: "Confluent — Kafka 101",         url: "https://developer.confluent.io/courses/apache-kafka/events/" }
            ]
          },
          {
            text: "[Kafka] Producers: acks (0/1/all), idempotent producer, batching (linger.ms/batch.size), partitioning strategy (key-based vs round robin)",
            links: [
              { t: "doc", label: "Kafka — Producer configs",   url: "https://kafka.apache.org/documentation/#producerconfigs" },
              { t: "ref", label: "Confluent — Producer internals", url: "https://developer.confluent.io/courses/apache-kafka/producers/" }
            ]
          },
          {
            text: "[Kafka] Consumers: consumer groups, partition assignment/rebalancing, offset commit strategies (auto vs manual), at-least-once vs at-most-once vs exactly-once",
            links: [
              { t: "doc", label: "Kafka — Consumer configs",       url: "https://kafka.apache.org/documentation/#consumerconfigs" },
              { t: "ref", label: "Confluent — Consumer groups",    url: "https://developer.confluent.io/courses/apache-kafka/consumers/" }
            ]
          },
          {
            text: "[Spring Kafka] Build a producer/consumer pair with Spring Kafka: KafkaTemplate, @KafkaListener, custom serializers (JSON/Avro), error handling with a SeekToCurrentErrorHandler",
            links: [
              { t: "doc", label: "Spring for Apache Kafka reference", url: "https://docs.spring.io/spring-kafka/reference/" },
              { t: "ref", label: "Baeldung — Intro to Spring Kafka",  url: "https://www.baeldung.com/spring-kafka" }
            ]
          },
          {
            text: "[Kafka] Local practice: spin up Kafka via Docker Compose, produce/consume via CLI, then via your Spring Boot app; inspect topics with kafka-console-consumer",
            links: [
              { t: "doc", label: "Kafka — Quickstart", url: "https://kafka.apache.org/quickstart" },
              { t: "gh",  label: "Confluent — cp-all-in-one Docker Compose", url: "https://github.com/confluentinc/cp-all-in-one" }
            ]
          }
        ],
        resources: [
          { label: "Kafka: The Definitive Guide", url: "https://www.confluent.io/resources/kafka-the-definitive-guide-v2/" },
          { label: "Confluent Developer",         url: "https://developer.confluent.io/" }
        ]
      },
      {
        label: "Week 6",
        title: "Kafka advanced (exactly-once, DLQ, Streams) + design",
        badges: ["kafka", "msa"],
        tasks: [
          {
            text: "[Kafka] Exactly-once semantics: idempotent producers + transactions API, transactional.id, read_committed isolation level — explain the end-to-end guarantee",
            links: [
              { t: "ref", label: "Confluent — Exactly-once semantics", url: "https://www.confluent.io/blog/exactly-once-semantics-are-possible-heres-how-apache-kafka-does-it/" }
            ]
          },
          {
            text: "[Kafka] Dead-letter queues, retry topics, and poison-pill handling; schema evolution with Avro/Protobuf + Schema Registry (backward/forward compatibility)",
            links: [
              { t: "ref", label: "Confluent — Dead letter queues",     url: "https://www.confluent.io/blog/kafka-connect-deep-dive-error-handling-dead-letter-queues/" },
              { t: "doc", label: "Confluent — Schema Registry",        url: "https://docs.confluent.io/platform/current/schema-registry/index.html" }
            ]
          },
          {
            text: "[Kafka] Kafka Streams / ksqlDB basics: stateless (map/filter) vs stateful (aggregate/join) operations, KTable vs KStream",
            links: [
              { t: "doc", label: "Kafka Streams — concepts", url: "https://kafka.apache.org/documentation/streams/core-concepts" }
            ]
          },
          {
            text: "[Design] Design an event-driven order pipeline using Kafka: Order Service → OrderCreated topic → Inventory/Payment/Notification consumers, with compensating events for failures",
            links: [
              { t: "ref", label: "Microservices.io — Event-driven architecture", url: "https://microservices.io/patterns/data/event-driven-architecture.html" },
              { t: "ref", label: "Saga pattern",                                  url: "https://microservices.io/patterns/data/saga.html" }
            ]
          },
          {
            text: "[Kafka] Operational awareness: consumer lag monitoring, partition count vs throughput trade-offs, over-partitioning pitfalls",
            links: [
              { t: "ref", label: "Confluent — How to choose partition count", url: "https://www.confluent.io/blog/how-choose-number-topics-partitions-kafka-cluster/" }
            ]
          }
        ],
        resources: [
          { label: "Confluent Blog",           url: "https://www.confluent.io/blog/" },
          { label: "Kafka Streams Docs",       url: "https://kafka.apache.org/documentation/streams/" }
        ]
      },
      {
        label: "Week 7",
        title: "AWS messaging: SQS & SNS",
        badges: ["aws", "msa"],
        tasks: [
          {
            text: "[AWS SQS] Standard vs FIFO queues, visibility timeout, long polling, dead-letter queues, at-least-once delivery and idempotent consumer design",
            links: [
              { t: "doc", label: "AWS — SQS developer guide",       url: "https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/welcome.html" },
              { t: "ref", label: "AWS — SQS dead-letter queues",    url: "https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-dead-letter-queues.html" }
            ]
          },
          {
            text: "[AWS SNS] Pub/sub fan-out pattern, SNS → multiple SQS subscribers, message filtering policies, SNS + SQS vs Kafka trade-offs (managed vs self-hosted, ordering, retention)",
            links: [
              { t: "doc", label: "AWS — SNS developer guide",        url: "https://docs.aws.amazon.com/sns/latest/dg/welcome.html" },
              { t: "ref", label: "AWS — Fanout scenario (SNS+SQS)",   url: "https://docs.aws.amazon.com/sns/latest/dg/sns-common-scenarios.html" }
            ]
          },
          {
            text: "[Hands-on] Build a Spring Boot service that publishes to SNS and consumes via SQS using Spring Cloud AWS (or AWS SDK v2), including local testing with LocalStack",
            links: [
              { t: "doc", label: "Spring Cloud AWS reference",   url: "https://docs.awspring.io/spring-cloud-aws/docs/current/reference/html/index.html" },
              { t: "doc", label: "LocalStack docs",              url: "https://docs.localstack.cloud/" }
            ]
          },
          {
            text: "[Design] Design a notification fan-out system using SNS: user signs up → SNS topic → email (SES), SMS, push (via SQS-backed workers) subscribers",
            links: [
              { t: "ref", label: "AWS Architecture Blog — Fan-out messaging", url: "https://aws.amazon.com/blogs/compute/" }
            ]
          },
          {
            text: "[AWS] IAM basics for messaging: least-privilege policies for SQS/SNS access, resource-based policies vs identity-based policies",
            links: [
              { t: "doc", label: "AWS — IAM policies for SQS", url: "https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-authentication-and-access-control.html" }
            ]
          }
        ],
        resources: [
          { label: "AWS SQS Docs",       url: "https://docs.aws.amazon.com/sqs/" },
          { label: "AWS SNS Docs",       url: "https://docs.aws.amazon.com/sns/" },
          { label: "LocalStack",         url: "https://www.localstack.cloud/" }
        ]
      },
      {
        label: "Week 8",
        title: "AWS storage & serverless: S3, Lambda, DynamoDB",
        badges: ["aws", "sql"],
        tasks: [
          {
            text: "[AWS S3] Buckets, storage classes, versioning, lifecycle policies, presigned URLs for uploads/downloads, eventual consistency model (now strong read-after-write)",
            links: [
              { t: "doc", label: "AWS — S3 user guide",        url: "https://docs.aws.amazon.com/AmazonS3/latest/userguide/Welcome.html" },
              { t: "ref", label: "AWS — Presigned URLs",       url: "https://docs.aws.amazon.com/AmazonS3/latest/userguide/ShareObjectPreSignedURL.html" }
            ]
          },
          {
            text: "[AWS Lambda] Cold starts, execution model, memory/timeout tuning, event sources (S3 trigger, SQS trigger, API Gateway), idempotency in retried invocations",
            links: [
              { t: "doc", label: "AWS — Lambda developer guide",     url: "https://docs.aws.amazon.com/lambda/latest/dg/welcome.html" },
              { t: "ref", label: "AWS — Lambda best practices",      url: "https://docs.aws.amazon.com/lambda/latest/dg/best-practices.html" }
            ]
          },
          {
            text: "[Hands-on] Build an S3-triggered Lambda (Java runtime) that processes an uploaded file and writes a record to DynamoDB",
            links: [
              { t: "doc", label: "AWS — Java Lambda handlers",   url: "https://docs.aws.amazon.com/lambda/latest/dg/java-handler.html" },
              { t: "doc", label: "AWS — S3 event notifications", url: "https://docs.aws.amazon.com/AmazonS3/latest/userguide/EventNotifications.html" }
            ]
          },
          {
            text: "[AWS DynamoDB] Partition key vs sort key design, GSIs vs LSIs, single-table design pattern, read/write capacity (on-demand vs provisioned), consistent vs eventually consistent reads",
            links: [
              { t: "doc", label: "AWS — DynamoDB developer guide",    url: "https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Introduction.html" },
              { t: "ref", label: "AWS — DynamoDB single-table design", url: "https://aws.amazon.com/blogs/compute/creating-a-single-table-design-with-amazon-dynamodb/" }
            ]
          },
          {
            text: "[Design] Design a serverless image-processing pipeline: S3 upload → Lambda (resize/thumbnail) → S3 output bucket → DynamoDB metadata table → SNS notification on completion",
            links: [
              { t: "ref", label: "AWS — Serverless image handler reference", url: "https://aws.amazon.com/solutions/implementations/serverless-image-handler/" }
            ]
          }
        ],
        resources: [
          { label: "AWS S3 Docs",       url: "https://docs.aws.amazon.com/s3/" },
          { label: "AWS Lambda Docs",   url: "https://docs.aws.amazon.com/lambda/" },
          { label: "AWS DynamoDB Docs", url: "https://docs.aws.amazon.com/dynamodb/" }
        ]
      }
    ]
  },

  // ─────────────────────────────────────────────
  // MONTH 3 — SQL deep dive + Redis + CI/CD + Microservices
  // ─────────────────────────────────────────────
  {
    title: "Month 3 — SQL Deep Dive + Redis + CI/CD + Microservices",
    goal:  "Master relational data modeling and query performance, add Redis for caching/rate-limiting/pub-sub, get comfortable with CI/CD pipelines and containers, then tie it all together with microservices patterns and mock system design rounds.",
    weeks: [
      {
        label: "Week 9",
        title: "SQL deep dive: indexing, query plans & data modeling",
        badges: ["sql"],
        tasks: [
          {
            text: "[SQL] Indexing deep dive: B-tree indexes, composite index column order, covering indexes, when an index is NOT used (leading wildcard LIKE, functions on columns)",
            links: [
              { t: "ref", label: "Use The Index, Luke — full guide", url: "https://use-the-index-luke.com/" },
              { t: "doc", label: "PostgreSQL — Indexes",             url: "https://www.postgresql.org/docs/current/indexes.html" }
            ]
          },
          {
            text: "[SQL] Reading EXPLAIN / EXPLAIN ANALYZE query plans; identifying sequential scans, nested loop vs hash join vs merge join costs",
            links: [
              { t: "doc", label: "PostgreSQL — Using EXPLAIN",       url: "https://www.postgresql.org/docs/current/using-explain.html" },
              { t: "ref", label: "Depesz — Explain visualizer",       url: "https://explain.depesz.com/" }
            ]
          },
          {
            text: "[SQL] Data modeling: normalization (1NF–3NF) vs denormalization trade-offs, when to denormalize for read-heavy services, designing a schema for a multi-tenant SaaS app",
            links: [
              { t: "ref", label: "Baeldung — Database normalization", url: "https://www.baeldung.com/cs/database-normalization" }
            ]
          },
          {
            text: "[SQL] Practice: solve 10 SQL problems covering joins, window functions, and subqueries under time pressure",
            links: [
              { t: "lc", label: "LeetCode — Top SQL 50",         url: "https://leetcode.com/studyplan/top-sql-50/" }
            ]
          },
          {
            text: "[SQL] Replication & sharding basics: read replicas, leader/follower replication lag, horizontal sharding strategies (range vs hash-based) and their trade-offs",
            links: [
              { t: "ref", label: "AWS — RDS read replicas",      url: "https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_ReadRepl.html" },
              { t: "ref", label: "System Design Primer — Sharding", url: "https://github.com/donnemartin/system-design-primer#sharding" }
            ]
          }
        ],
        resources: [
          { label: "Use The Index, Luke", url: "https://use-the-index-luke.com/" },
          { label: "PostgreSQL Docs",     url: "https://www.postgresql.org/docs/current/" }
        ]
      },
      {
        label: "Week 10",
        title: "Redis: caching, data structures, pub/sub & rate limiting",
        badges: ["redis", "spring"],
        tasks: [
          {
            text: "[Redis] Core data structures: strings, hashes, lists, sets, sorted sets — map each to a real use case (session store, leaderboard, dedup set)",
            links: [
              { t: "doc", label: "Redis — Data types",           url: "https://redis.io/docs/latest/develop/data-types/" }
            ]
          },
          {
            text: "[Redis] Caching patterns: cache-aside (lazy loading), write-through, write-behind; TTL and eviction policies (LRU, LFU, noeviction) — pick the right one per scenario",
            links: [
              { t: "ref", label: "AWS — Caching strategies",     url: "https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/Strategies.html" },
              { t: "doc", label: "Redis — Eviction policies",     url: "https://redis.io/docs/latest/develop/reference/eviction/" }
            ]
          },
          {
            text: "[Redis] Build a rate limiter (token bucket via Redis + Lua script for atomicity) and a distributed lock (Redlock or SET NX PX pattern) in Spring Boot",
            links: [
              { t: "ref", label: "Redis — Rate limiting pattern",  url: "https://redis.io/glossary/rate-limiting/" },
              { t: "ref", label: "Redis — Distributed locks",      url: "https://redis.io/docs/latest/develop/clients/patterns/distributed-locks/" }
            ]
          },
          {
            text: "[Redis] Pub/Sub basics and Redis Streams as a lightweight alternative to Kafka for smaller-scale event pipelines; compare guarantees vs Kafka",
            links: [
              { t: "doc", label: "Redis — Pub/Sub",     url: "https://redis.io/docs/latest/develop/interact/pubsub/" },
              { t: "doc", label: "Redis — Streams",     url: "https://redis.io/docs/latest/develop/data-types/streams/" }
            ]
          },
          {
            text: "[Spring Boot + Redis] Integrate Spring Cache abstraction (@Cacheable/@CacheEvict) backed by Redis; add Redis-based session storage with Spring Session",
            links: [
              { t: "doc", label: "Spring Data Redis reference",  url: "https://docs.spring.io/spring-data/redis/reference/" },
              { t: "ref", label: "Baeldung — Spring caching with Redis", url: "https://www.baeldung.com/spring-boot-redis-cache" }
            ]
          }
        ],
        resources: [
          { label: "Redis Docs",       url: "https://redis.io/docs/latest/" },
          { label: "Redis University", url: "https://university.redis.io/" }
        ]
      },
      {
        label: "Week 11",
        title: "CI/CD, containers & deployment",
        badges: ["cicd"],
        tasks: [
          {
            text: "[Docker] Write a multi-stage Dockerfile for a Spring Boot app (build stage with Maven, slim runtime JRE image); understand layer caching for faster builds",
            links: [
              { t: "doc", label: "Docker — Multi-stage builds",        url: "https://docs.docker.com/build/building/multi-stage/" },
              { t: "ref", label: "Spring Boot — Container images",     url: "https://docs.spring.io/spring-boot/reference/packaging/container-images/index.html" }
            ]
          },
          {
            text: "[CI/CD] Build a GitHub Actions pipeline: run unit + integration tests, build a Docker image, push to a registry (ECR/Docker Hub), gate merges on passing checks",
            links: [
              { t: "doc", label: "GitHub Actions docs",       url: "https://docs.github.com/en/actions" },
              { t: "doc", label: "AWS — Push image to ECR from GitHub Actions", url: "https://docs.aws.amazon.com/AmazonECR/latest/userguide/getting-started-cli.html" }
            ]
          },
          {
            text: "[CI/CD] Deployment strategies: blue-green, canary, rolling deployments — trade-offs in rollback speed vs blast radius",
            links: [
              { t: "ref", label: "AWS — Blue/green vs canary deployments", url: "https://docs.aws.amazon.com/whitepapers/latest/practicing-continuous-integration-continuous-delivery/deployment-methods.html" }
            ]
          },
          {
            text: "[Kubernetes] Core objects: Pod, Deployment, Service, ConfigMap/Secret, readiness vs liveness probes — deploy your Spring Boot app to a local cluster (minikube/kind)",
            links: [
              { t: "doc", label: "Kubernetes — Concepts",        url: "https://kubernetes.io/docs/concepts/" },
              { t: "doc", label: "Kubernetes — kind (local clusters)", url: "https://kind.sigs.k8s.io/" }
            ]
          },
          {
            text: "[Observability] Add structured logging, metrics (Micrometer + Prometheus), and distributed tracing (OpenTelemetry) to your Spring Boot service",
            links: [
              { t: "doc", label: "Spring Boot Actuator + Micrometer", url: "https://docs.spring.io/spring-boot/reference/actuator/metrics.html" },
              { t: "doc", label: "OpenTelemetry — Java instrumentation", url: "https://opentelemetry.io/docs/zero-code/java/" }
            ]
          }
        ],
        resources: [
          { label: "Docker Docs",       url: "https://docs.docker.com/" },
          { label: "Kubernetes Docs",   url: "https://kubernetes.io/docs/home/" },
          { label: "GitHub Actions",    url: "https://docs.github.com/en/actions" }
        ]
      },
      {
        label: "Week 12",
        title: "Microservices patterns + capstone system design mocks",
        badges: ["msa", "sd", "mock"],
        tasks: [
          {
            text: "[Microservices] Decomposition strategies (by business capability vs subdomain), database-per-service, API gateway pattern, service discovery (Eureka/Consul)",
            links: [
              { t: "ref", label: "Microservices.io — Decomposition patterns", url: "https://microservices.io/patterns/decomposition/decompose-by-business-capability.html" },
              { t: "ref", label: "Microservices.io — API Gateway",             url: "https://microservices.io/patterns/apigateway.html" }
            ]
          },
          {
            text: "[Microservices] Resilience patterns: circuit breaker (Resilience4j), retries with exponential backoff + jitter, bulkheads, timeouts — implement all four in Spring Boot",
            links: [
              { t: "gh",  label: "Resilience4j — GitHub",           url: "https://github.com/resilience4j/resilience4j" },
              { t: "ref", label: "Baeldung — Resilience4j guide",   url: "https://www.baeldung.com/resilience4j" }
            ]
          },
          {
            text: "[Microservices] Distributed transactions: 2PC vs Saga (choreography vs orchestration) — design a saga for an order+payment+inventory flow using Kafka events",
            links: [
              { t: "ref", label: "Microservices.io — Saga pattern",  url: "https://microservices.io/patterns/data/saga.html" }
            ]
          },
          {
            text: "[Capstone] Build and connect a 3-service system: Order Service (Spring Boot + Postgres) → Kafka → Inventory Service (DynamoDB) → SNS/SQS notification fan-out, cached with Redis, deployed via your CI/CD pipeline",
            links: [
              { t: "ref", label: "AWS — Event-driven architecture reference", url: "https://aws.amazon.com/event-driven-architecture/" }
            ]
          },
          {
            text: "[Mock] 2 system design mocks focused on this stack: 'design a scalable order processing system' and 'design a rate-limited notification service' — narrate trade-offs out loud",
            links: [
              { t: "ref", label: "Interviewing.io",  url: "https://interviewing.io" },
              { t: "ref", label: "Pramp.com",         url: "https://www.pramp.com" }
            ]
          }
        ],
        resources: [
          { label: "microservices.io",               url: "https://microservices.io/" },
          { label: "Resilience4j",                   url: "https://resilience4j.readme.io/" },
          { label: "AWS Event-Driven Architecture",  url: "https://aws.amazon.com/event-driven-architecture/" }
        ]
      }
    ]
  }

]; // end PLAN
