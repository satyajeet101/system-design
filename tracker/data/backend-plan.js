/* Final dashboard-ready curriculum. Task IDs follow <track>-w<week>-<category-slug>-<n>; keep them stable so saved progress is preserved. */
window.BACKEND_TRACK = {
  "id": "backend",
  "title": "Backend Interview",
  "subtitle": "Java, Spring Boot, Kafka, AWS, SQL, Redis, CI/CD, microservices, and production engineering.",
  "durationWeeks": 12,
  "categories": [
    {
      "name": "Java",
      "color": "#8b8bf5"
    },
    {
      "name": "Spring Boot",
      "color": "#6db33f"
    },
    {
      "name": "SQL",
      "color": "#14b8a6"
    },
    {
      "name": "Kafka",
      "color": "#a78bfa"
    },
    {
      "name": "System Design",
      "color": "#00a699"
    },
    {
      "name": "AWS",
      "color": "#ff9900"
    },
    {
      "name": "Redis",
      "color": "#ef4444"
    },
    {
      "name": "CI/CD",
      "color": "#22d3ee"
    },
    {
      "name": "Microservices",
      "color": "#ec4899"
    },
    {
      "name": "Mock Interview",
      "color": "#f472b6"
    }
  ],
  "weeks": [
    {
      "number": 1,
      "theme": "Java OOP, collections & exceptions + Spring Boot bootstrapping",
      "outcome": "Rebuild Java fundamentals to interview sharpness (OOP, collections, concurrency, JVM, modern Java), then layer Spring Boot on top: REST APIs, data access, security, and testing.",
      "resources": [
        {
          "label": "Effective Java, 3rd Ed.",
          "url": "https://www.oreilly.com/library/view/effective-java/9780134686097/"
        },
        {
          "label": "Baeldung",
          "url": "https://www.baeldung.com/"
        },
        {
          "label": "Spring Boot Reference Docs",
          "url": "https://docs.spring.io/spring-boot/index.html"
        }
      ],
      "tasks": [
        {
          "id": "backend-w1-java-1",
          "category": "Java",
          "title": "OOP deep dive",
          "detail": "encapsulation, inheritance vs composition, polymorphism, abstract class vs interface, equals()/hashCode()/toString() contracts",
          "links": [
            {
              "t": "ref",
              "label": "Baeldung — equals & hashCode",
              "url": "https://www.baeldung.com/java-equals-hashcode-contracts"
            },
            {
              "t": "ref",
              "label": "Effective Java (Items 10-12)",
              "url": "https://www.oreilly.com/library/view/effective-java/9780134686097/"
            }
          ]
        },
        {
          "id": "backend-w1-java-2",
          "category": "Java",
          "title": "Collections framework",
          "detail": "List/Set/Map implementations, when to use ArrayDeque vs LinkedList, TreeMap vs HashMap vs LinkedHashMap, comparator vs comparable",
          "links": [
            {
              "t": "doc",
              "label": "Java Collections Framework overview",
              "url": "https://docs.oracle.com/javase/tutorial/collections/index.html"
            },
            {
              "t": "ref",
              "label": "Baeldung — HashMap internals",
              "url": "https://www.baeldung.com/java-hashmap"
            }
          ]
        },
        {
          "id": "backend-w1-java-3",
          "category": "Java",
          "title": "Exception handling",
          "detail": "checked vs unchecked, custom exceptions, try-with-resources, exception chaining — write a small library that models both",
          "links": [
            {
              "t": "doc",
              "label": "Oracle — Exceptions tutorial",
              "url": "https://docs.oracle.com/javase/tutorial/essential/exceptions/"
            },
            {
              "t": "ref",
              "label": "Baeldung — Custom exceptions",
              "url": "https://www.baeldung.com/java-new-custom-exception"
            }
          ]
        },
        {
          "id": "backend-w1-spring-boot-1",
          "category": "Spring Boot",
          "title": "Set up a Spring Boot 3.x project (Spring Initializr), understand auto-configuration, application.yml profiles, and the component-scan/bean lifecycle",
          "detail": "",
          "links": [
            {
              "t": "doc",
              "label": "Spring Initializr",
              "url": "https://start.spring.io/"
            },
            {
              "t": "ref",
              "label": "Baeldung — Spring Boot annotations",
              "url": "https://www.baeldung.com/spring-boot-annotations"
            }
          ]
        },
        {
          "id": "backend-w1-spring-boot-2",
          "category": "Spring Boot",
          "title": "Build a first REST controller with @RestController, @RequestMapping, DTOs, and global exception handling via @ControllerAdvice",
          "detail": "",
          "links": [
            {
              "t": "ref",
              "label": "Baeldung — Error handling for REST",
              "url": "https://www.baeldung.com/exception-handling-for-rest-with-spring"
            },
            {
              "t": "doc",
              "label": "Spring MVC docs",
              "url": "https://docs.spring.io/spring-framework/reference/web/webmvc.html"
            }
          ]
        },
        {
          "id": "backend-w1-java-4",
          "category": "Java",
          "title": "Java syntax and type system",
          "detail": "Primitives, wrappers, casting, operators, control flow, arrays, varargs, and enums.",
          "links": []
        },
        {
          "id": "backend-w1-java-5",
          "category": "Java",
          "title": "Classes and object-oriented fundamentals",
          "detail": "Encapsulation, inheritance, polymorphism, abstraction, composition, and immutability.",
          "links": []
        },
        {
          "id": "backend-w1-java-6",
          "category": "Java",
          "title": "Set up coding templates",
          "detail": "Fast input, assertions, test harness, common collections, and complexity notes.",
          "links": []
        }
      ]
    },
    {
      "number": 2,
      "theme": "Java concurrency + Spring Boot REST, validation & DTOs",
      "outcome": "Rebuild Java fundamentals to interview sharpness (OOP, collections, concurrency, JVM, modern Java), then layer Spring Boot on top: REST APIs, data access, security, and testing.",
      "resources": [
        {
          "label": "Java Concurrency in Practice",
          "url": "https://jcip.net/"
        },
        {
          "label": "Baeldung — Concurrency",
          "url": "https://www.baeldung.com/java-concurrency"
        }
      ],
      "tasks": [
        {
          "id": "backend-w2-java-1",
          "category": "Java",
          "title": "Threads & the JMM",
          "detail": "Runnable vs Thread, synchronized, volatile, happens-before relationship — explain why double-checked locking needs volatile",
          "links": [
            {
              "t": "ref",
              "label": "Baeldung — Java Memory Model",
              "url": "https://www.baeldung.com/java-volatile"
            },
            {
              "t": "doc",
              "label": "JLS — Threads and Locks",
              "url": "https://docs.oracle.com/javase/specs/jls/se17/html/jls-17.html"
            }
          ]
        },
        {
          "id": "backend-w2-java-2",
          "category": "Java",
          "title": "java.util.concurrent",
          "detail": "ExecutorService, Future/CompletableFuture, ConcurrentHashMap, CountDownLatch, Semaphore — build a small thread-pool based file processor",
          "links": [
            {
              "t": "ref",
              "label": "Baeldung — ExecutorService guide",
              "url": "https://www.baeldung.com/java-executor-service-tutorial"
            },
            {
              "t": "ref",
              "label": "Baeldung — CompletableFuture guide",
              "url": "https://www.baeldung.com/java-completablefuture"
            }
          ]
        },
        {
          "id": "backend-w2-java-3",
          "category": "Java",
          "title": "Deadlocks, livelocks, race conditions — reproduce a deadlock intentionally, then fix it with lock ordering",
          "detail": "",
          "links": [
            {
              "t": "ref",
              "label": "Baeldung — Deadlock in Java",
              "url": "https://www.baeldung.com/java-deadlock-livelock"
            }
          ]
        },
        {
          "id": "backend-w2-spring-boot-1",
          "category": "Spring Boot",
          "title": "Request validation with Bean Validation (@Valid, @NotNull, custom validators), consistent error response shape (RFC 7807 problem details)",
          "detail": "",
          "links": [
            {
              "t": "ref",
              "label": "Baeldung — Validation for REST APIs",
              "url": "https://www.baeldung.com/spring-boot-bean-validation"
            },
            {
              "t": "doc",
              "label": "Spring — ProblemDetail",
              "url": "https://docs.spring.io/spring-framework/reference/web/webmvc/mvc-ann-rest-exceptions.html"
            }
          ]
        },
        {
          "id": "backend-w2-spring-boot-2",
          "category": "Spring Boot",
          "title": "Layered architecture",
          "detail": "Controller → Service → Repository, DTO vs Entity mapping (MapStruct), and idempotent PUT vs POST semantics",
          "links": [
            {
              "t": "ref",
              "label": "Baeldung — MapStruct guide",
              "url": "https://www.baeldung.com/mapstruct"
            },
            {
              "t": "ref",
              "label": "REST API best practices",
              "url": "https://www.baeldung.com/rest-api-best-practices-design"
            }
          ]
        },
        {
          "id": "backend-w2-java-4",
          "category": "Java",
          "title": "Collections Framework",
          "detail": "List, Set, Map, Queue, Deque implementations, complexity, ordering, and iterators.",
          "links": []
        },
        {
          "id": "backend-w2-java-5",
          "category": "Java",
          "title": "Generics",
          "detail": "Bounds, wildcards, type erasure, PECS, and generic methods/classes.",
          "links": []
        },
        {
          "id": "backend-w2-java-6",
          "category": "Java",
          "title": "equals, hashCode, Comparable, and Comparator",
          "detail": "Contracts, stable ordering, records, and safe use as map keys.",
          "links": []
        }
      ]
    },
    {
      "number": 3,
      "theme": "Modern Java (streams/lambdas) + Spring Data JPA & SQL basics",
      "outcome": "Rebuild Java fundamentals to interview sharpness (OOP, collections, concurrency, JVM, modern Java), then layer Spring Boot on top: REST APIs, data access, security, and testing.",
      "resources": [
        {
          "label": "Spring Data JPA Docs",
          "url": "https://docs.spring.io/spring-data/jpa/reference/"
        },
        {
          "label": "Mode SQL Tutorial",
          "url": "https://mode.com/sql-tutorial/"
        },
        {
          "label": "Use The Index, Luke",
          "url": "https://use-the-index-luke.com/"
        }
      ],
      "tasks": [
        {
          "id": "backend-w3-java-1",
          "category": "Java",
          "title": "Streams API",
          "detail": "map/filter/reduce/collect, Collectors.groupingBy/partitioningBy, parallel streams and when they hurt more than help",
          "links": [
            {
              "t": "ref",
              "label": "Baeldung — Java Streams guide",
              "url": "https://www.baeldung.com/java-8-streams"
            },
            {
              "t": "ref",
              "label": "Baeldung — Collectors guide",
              "url": "https://www.baeldung.com/java-8-collectors"
            }
          ]
        },
        {
          "id": "backend-w3-java-2",
          "category": "Java",
          "title": "Functional interfaces & lambdas",
          "detail": "Function/Supplier/Consumer/Predicate, method references, Optional (avoid null-checking anti-patterns)",
          "links": [
            {
              "t": "ref",
              "label": "Baeldung — Functional interfaces",
              "url": "https://www.baeldung.com/java-8-functional-interfaces"
            },
            {
              "t": "ref",
              "label": "Baeldung — Optional guide",
              "url": "https://www.baeldung.com/java-optional"
            }
          ]
        },
        {
          "id": "backend-w3-spring-boot-1",
          "category": "Spring Boot",
          "title": "Spring Data JPA",
          "detail": "repositories, derived queries, @Query/JPQL, pagination & sorting, N+1 problem and fetch strategies",
          "links": [
            {
              "t": "doc",
              "label": "Spring Data JPA reference",
              "url": "https://docs.spring.io/spring-data/jpa/reference/"
            },
            {
              "t": "ref",
              "label": "Baeldung — Avoiding N+1 in JPA",
              "url": "https://www.baeldung.com/hibernate-common-performance-problems-in-logs"
            }
          ]
        },
        {
          "id": "backend-w3-java-3",
          "category": "Java",
          "title": "Exceptions and resource management",
          "detail": "Checked vs unchecked, custom exceptions, try-with-resources, suppression, and API boundaries.",
          "links": []
        },
        {
          "id": "backend-w3-java-4",
          "category": "Java",
          "title": "I/O, NIO.2, and serialization concepts",
          "detail": "Streams, readers/writers, Path/Files, buffers/channels, and serialization risks.",
          "links": []
        },
        {
          "id": "backend-w3-java-5",
          "category": "Java",
          "title": "Annotations, reflection, and modules",
          "detail": "Runtime metadata, reflection tradeoffs, JPMS basics, and framework use cases.",
          "links": []
        },
        {
          "id": "backend-w3-sql-1",
          "category": "SQL",
          "title": "SQL query foundations",
          "detail": "SELECT execution order, filtering, CASE, NULL semantics, sorting, aggregation, GROUP BY, HAVING, and pagination.",
          "links": [
            {
              "t": "ref",
              "label": "Mode — SQL window functions tutorial",
              "url": "https://mode.com/sql-tutorial/sql-window-functions/"
            },
            {
              "t": "lc",
              "label": "LeetCode — SQL 50 study plan",
              "url": "https://leetcode.com/studyplan/top-sql-50/"
            }
          ]
        },
        {
          "id": "backend-w3-sql-2",
          "category": "SQL",
          "title": "Joins and set operations",
          "detail": "INNER, LEFT, RIGHT, FULL, CROSS, and self joins; many-to-many joins, duplicate control, UNION, INTERSECT, and EXCEPT.",
          "links": [
            {
              "t": "ref",
              "label": "Mode — SQL window functions tutorial",
              "url": "https://mode.com/sql-tutorial/sql-window-functions/"
            },
            {
              "t": "lc",
              "label": "LeetCode — SQL 50 study plan",
              "url": "https://leetcode.com/studyplan/top-sql-50/"
            },
            {
              "t": "doc",
              "label": "PostgreSQL — Using EXPLAIN",
              "url": "https://www.postgresql.org/docs/current/using-explain.html"
            },
            {
              "t": "ref",
              "label": "Depesz — Explain visualizer",
              "url": "https://explain.depesz.com/"
            }
          ]
        },
        {
          "id": "backend-w3-sql-3",
          "category": "SQL",
          "title": "Subqueries and CTEs",
          "detail": "Scalar and correlated subqueries, EXISTS, common table expressions, recursive CTEs, hierarchy traversal, and readability tradeoffs.",
          "links": [
            {
              "t": "lc",
              "label": "LeetCode — Top SQL 50",
              "url": "https://leetcode.com/studyplan/top-sql-50/"
            }
          ]
        },
        {
          "id": "backend-w3-sql-4",
          "category": "SQL",
          "title": "Window functions and analytical queries",
          "detail": "ROW_NUMBER, RANK, DENSE_RANK, LAG/LEAD, running totals, window frames, top-N per group, gaps-and-islands, funnels, and retention.",
          "links": [
            {
              "t": "ref",
              "label": "Mode — SQL window functions tutorial",
              "url": "https://mode.com/sql-tutorial/sql-window-functions/"
            },
            {
              "t": "lc",
              "label": "LeetCode — SQL 50 study plan",
              "url": "https://leetcode.com/studyplan/top-sql-50/"
            }
          ]
        },
        {
          "id": "backend-w3-sql-5",
          "category": "SQL",
          "title": "Foundational and advanced SQL practice",
          "detail": "Solve at least 35 progressively difficult queries covering aggregation, joins, subqueries, CTEs, and windows using a booking or product schema.",
          "links": [
            {
              "t": "ref",
              "label": "Mode — SQL window functions tutorial",
              "url": "https://mode.com/sql-tutorial/sql-window-functions/"
            },
            {
              "t": "lc",
              "label": "LeetCode — SQL 50 study plan",
              "url": "https://leetcode.com/studyplan/top-sql-50/"
            }
          ]
        }
      ]
    },
    {
      "number": 4,
      "theme": "JVM internals + Spring Security & testing",
      "outcome": "Rebuild Java fundamentals to interview sharpness (OOP, collections, concurrency, JVM, modern Java), then layer Spring Boot on top: REST APIs, data access, security, and testing.",
      "resources": [
        {
          "label": "Spring Security Docs",
          "url": "https://docs.spring.io/spring-security/reference/"
        },
        {
          "label": "Testcontainers",
          "url": "https://testcontainers.com/"
        },
        {
          "label": "Baeldung — JVM",
          "url": "https://www.baeldung.com/jvm-tutorial"
        }
      ],
      "tasks": [
        {
          "id": "backend-w4-java-1",
          "category": "Java",
          "title": "JVM memory model",
          "detail": "heap vs stack, young/old gen, GC algorithms (G1, ZGC) at a high level, reading a basic GC log, common OOM causes",
          "links": [
            {
              "t": "ref",
              "label": "Baeldung — JVM garbage collectors",
              "url": "https://www.baeldung.com/jvm-garbage-collectors"
            },
            {
              "t": "doc",
              "label": "Oracle — HotSpot GC tuning guide",
              "url": "https://docs.oracle.com/en/java/javase/17/gctuning/"
            }
          ]
        },
        {
          "id": "backend-w4-java-2",
          "category": "Java",
          "title": "Classloading, JIT compilation basics, and how to read a thread dump / heap dump when debugging a stuck production service",
          "detail": "",
          "links": [
            {
              "t": "ref",
              "label": "Baeldung — Analyzing thread dumps",
              "url": "https://www.baeldung.com/java-analyze-thread-dumps"
            }
          ]
        },
        {
          "id": "backend-w4-spring-boot-1",
          "category": "Spring Boot",
          "title": "Spring Security fundamentals",
          "detail": "filter chain, authentication vs authorization, stateless JWT auth, method-level security (@PreAuthorize)",
          "links": [
            {
              "t": "doc",
              "label": "Spring Security reference",
              "url": "https://docs.spring.io/spring-security/reference/"
            },
            {
              "t": "ref",
              "label": "Baeldung — JWT with Spring Security",
              "url": "https://www.baeldung.com/spring-security-oauth-jwt"
            }
          ]
        },
        {
          "id": "backend-w4-spring-boot-2",
          "category": "Spring Boot",
          "title": "Testing pyramid",
          "detail": "JUnit 5 + Mockito for unit tests, @SpringBootTest / @WebMvcTest / @DataJpaTest slices, Testcontainers for integration tests",
          "links": [
            {
              "t": "ref",
              "label": "Baeldung — Testing in Spring Boot",
              "url": "https://www.baeldung.com/spring-boot-testing"
            },
            {
              "t": "doc",
              "label": "Testcontainers docs",
              "url": "https://testcontainers.com/"
            }
          ]
        },
        {
          "id": "backend-w4-java-3",
          "category": "Java",
          "title": "Build and fully test a small 'Task Management' REST service (CRUD + validation + JPA + JWT auth) end-to-end — this becomes your reusable base project",
          "detail": "",
          "links": [
            {
              "t": "ref",
              "label": "Baeldung — Spring Boot CRUD REST API",
              "url": "https://www.baeldung.com/spring-boot-crud-thymeleaf"
            }
          ]
        },
        {
          "id": "backend-w4-java-4",
          "category": "Java",
          "title": "Threading and the Java Memory Model",
          "detail": "Visibility, atomicity, ordering, happens-before, volatile, and safe publication.",
          "links": []
        },
        {
          "id": "backend-w4-java-5",
          "category": "Java",
          "title": "Locks and concurrent collections",
          "detail": "synchronized, Lock, atomics, semaphores, latches, barriers, ConcurrentHashMap, and blocking queues.",
          "links": []
        },
        {
          "id": "backend-w4-java-6",
          "category": "Java",
          "title": "Executors and asynchronous programming",
          "detail": "Thread pools, Future, CompletableFuture, ForkJoinPool, virtual threads, and structured concurrency concepts.",
          "links": []
        }
      ]
    },
    {
      "number": 5,
      "theme": "Kafka fundamentals + Spring Kafka producer/consumer",
      "outcome": "Go deep on event streaming with Kafka, master core AWS building blocks used in almost every distributed backend, and add Redis for caching, rate limiting, and pub/sub.",
      "resources": [
        {
          "label": "Kafka: The Definitive Guide",
          "url": "https://www.confluent.io/resources/kafka-the-definitive-guide-v2/"
        },
        {
          "label": "Confluent Developer",
          "url": "https://developer.confluent.io/"
        }
      ],
      "tasks": [
        {
          "id": "backend-w5-kafka-1",
          "category": "Kafka",
          "title": "Core concepts",
          "detail": "topics, partitions, offsets, brokers, replication factor, ISR (in-sync replicas) — draw the architecture from memory",
          "links": [
            {
              "t": "doc",
              "label": "Kafka — Introduction",
              "url": "https://kafka.apache.org/documentation/#introduction"
            },
            {
              "t": "ref",
              "label": "Confluent — Kafka 101",
              "url": "https://developer.confluent.io/courses/apache-kafka/events/"
            }
          ]
        },
        {
          "id": "backend-w5-kafka-2",
          "category": "Kafka",
          "title": "Producers",
          "detail": "acks (0/1/all), idempotent producer, batching (linger.ms/batch.size), partitioning strategy (key-based vs round robin)",
          "links": [
            {
              "t": "doc",
              "label": "Kafka — Producer configs",
              "url": "https://kafka.apache.org/documentation/#producerconfigs"
            },
            {
              "t": "ref",
              "label": "Confluent — Producer internals",
              "url": "https://developer.confluent.io/courses/apache-kafka/producers/"
            }
          ]
        },
        {
          "id": "backend-w5-kafka-3",
          "category": "Kafka",
          "title": "Consumers",
          "detail": "consumer groups, partition assignment/rebalancing, offset commit strategies (auto vs manual), at-least-once vs at-most-once vs exactly-once",
          "links": [
            {
              "t": "doc",
              "label": "Kafka — Consumer configs",
              "url": "https://kafka.apache.org/documentation/#consumerconfigs"
            },
            {
              "t": "ref",
              "label": "Confluent — Consumer groups",
              "url": "https://developer.confluent.io/courses/apache-kafka/consumers/"
            }
          ]
        },
        {
          "id": "backend-w5-kafka-4",
          "category": "Kafka",
          "title": "Build a producer/consumer pair with Spring Kafka",
          "detail": "KafkaTemplate, @KafkaListener, custom serializers (JSON/Avro), error handling with a SeekToCurrentErrorHandler",
          "links": [
            {
              "t": "doc",
              "label": "Spring for Apache Kafka reference",
              "url": "https://docs.spring.io/spring-kafka/reference/"
            },
            {
              "t": "ref",
              "label": "Baeldung — Intro to Spring Kafka",
              "url": "https://www.baeldung.com/spring-kafka"
            }
          ]
        },
        {
          "id": "backend-w5-kafka-5",
          "category": "Kafka",
          "title": "Local practice",
          "detail": "spin up Kafka via Docker Compose, produce/consume via CLI, then via your Spring Boot app; inspect topics with kafka-console-consumer",
          "links": [
            {
              "t": "doc",
              "label": "Kafka — Quickstart",
              "url": "https://kafka.apache.org/quickstart"
            },
            {
              "t": "gh",
              "label": "Confluent — cp-all-in-one Docker Compose",
              "url": "https://github.com/confluentinc/cp-all-in-one"
            }
          ]
        },
        {
          "id": "backend-w5-java-1",
          "category": "Java",
          "title": "Lambdas, streams, and Optional",
          "detail": "Functional interfaces, collectors, lazy evaluation, parallel-stream risks, and null modeling.",
          "links": []
        },
        {
          "id": "backend-w5-java-2",
          "category": "Java",
          "title": "JVM architecture",
          "detail": "Class loading, bytecode, stack/heap/metaspace, JIT, escape analysis, and profiling concepts.",
          "links": []
        },
        {
          "id": "backend-w5-java-3",
          "category": "Java",
          "title": "Garbage collection and memory tuning",
          "detail": "Generational GC, G1/ZGC concepts, allocation, leaks, pauses, and observability.",
          "links": []
        }
      ]
    },
    {
      "number": 6,
      "theme": "Kafka advanced (exactly-once, DLQ, Streams) + design",
      "outcome": "Go deep on event streaming with Kafka, master core AWS building blocks used in almost every distributed backend, and add Redis for caching, rate limiting, and pub/sub.",
      "resources": [
        {
          "label": "Confluent Blog",
          "url": "https://www.confluent.io/blog/"
        },
        {
          "label": "Kafka Streams Docs",
          "url": "https://kafka.apache.org/documentation/streams/"
        }
      ],
      "tasks": [
        {
          "id": "backend-w6-kafka-1",
          "category": "Kafka",
          "title": "Exactly-once semantics",
          "detail": "idempotent producers + transactions API, transactional.id, read_committed isolation level — explain the end-to-end guarantee",
          "links": [
            {
              "t": "ref",
              "label": "Confluent — Exactly-once semantics",
              "url": "https://www.confluent.io/blog/exactly-once-semantics-are-possible-heres-how-apache-kafka-does-it/"
            }
          ]
        },
        {
          "id": "backend-w6-kafka-2",
          "category": "Kafka",
          "title": "Dead-letter queues, retry topics, and poison-pill handling; schema evolution with Avro/Protobuf + Schema Registry (backward/forward compatibility)",
          "detail": "",
          "links": [
            {
              "t": "ref",
              "label": "Confluent — Dead letter queues",
              "url": "https://www.confluent.io/blog/kafka-connect-deep-dive-error-handling-dead-letter-queues/"
            },
            {
              "t": "doc",
              "label": "Confluent — Schema Registry",
              "url": "https://docs.confluent.io/platform/current/schema-registry/index.html"
            }
          ]
        },
        {
          "id": "backend-w6-kafka-3",
          "category": "Kafka",
          "title": "Kafka Streams / ksqlDB basics",
          "detail": "stateless (map/filter) vs stateful (aggregate/join) operations, KTable vs KStream",
          "links": [
            {
              "t": "doc",
              "label": "Kafka Streams — concepts",
              "url": "https://kafka.apache.org/documentation/streams/core-concepts"
            }
          ]
        },
        {
          "id": "backend-w6-system-design-1",
          "category": "System Design",
          "title": "Design an event-driven order pipeline using Kafka",
          "detail": "Order Service → OrderCreated topic → Inventory/Payment/Notification consumers, with compensating events for failures",
          "links": [
            {
              "t": "ref",
              "label": "Microservices.io — Event-driven architecture",
              "url": "https://microservices.io/patterns/data/event-driven-architecture.html"
            },
            {
              "t": "ref",
              "label": "Saga pattern",
              "url": "https://microservices.io/patterns/data/saga.html"
            }
          ]
        },
        {
          "id": "backend-w6-kafka-4",
          "category": "Kafka",
          "title": "Operational awareness",
          "detail": "consumer lag monitoring, partition count vs throughput trade-offs, over-partitioning pitfalls",
          "links": [
            {
              "t": "ref",
              "label": "Confluent — How to choose partition count",
              "url": "https://www.confluent.io/blog/how-choose-number-topics-partitions-kafka-cluster/"
            }
          ]
        },
        {
          "id": "backend-w6-java-1",
          "category": "Java",
          "title": "Design patterns and SOLID",
          "detail": "Factory, builder, strategy, observer, adapter, decorator, proxy, and dependency inversion.",
          "links": []
        },
        {
          "id": "backend-w6-java-2",
          "category": "Java",
          "title": "Testing Java systems",
          "detail": "JUnit, mocking tradeoffs, property tests, integration tests, contract tests, and testability.",
          "links": []
        }
      ]
    },
    {
      "number": 7,
      "theme": "AWS messaging: SQS & SNS",
      "outcome": "Go deep on event streaming with Kafka, master core AWS building blocks used in almost every distributed backend, and add Redis for caching, rate limiting, and pub/sub.",
      "resources": [
        {
          "label": "AWS SQS Docs",
          "url": "https://docs.aws.amazon.com/sqs/"
        },
        {
          "label": "AWS SNS Docs",
          "url": "https://docs.aws.amazon.com/sns/"
        },
        {
          "label": "LocalStack",
          "url": "https://www.localstack.cloud/"
        }
      ],
      "tasks": [
        {
          "id": "backend-w7-system-design-1",
          "category": "System Design",
          "title": "Design a notification fan-out system using SNS",
          "detail": "user signs up → SNS topic → email (SES), SMS, push (via SQS-backed workers) subscribers",
          "links": [
            {
              "t": "ref",
              "label": "AWS Architecture Blog — Fan-out messaging",
              "url": "https://aws.amazon.com/blogs/compute/"
            }
          ]
        },
        {
          "id": "backend-w7-java-1",
          "category": "Java",
          "title": "Spring and dependency injection",
          "detail": "IoC lifecycle, configuration, bean scopes, AOP, validation, and common pitfalls.",
          "links": []
        },
        {
          "id": "backend-w7-java-2",
          "category": "Java",
          "title": "REST and API design",
          "detail": "Resource modeling, HTTP semantics, pagination, versioning, idempotency, auth, and error contracts.",
          "links": []
        },
        {
          "id": "backend-w7-java-3",
          "category": "Java",
          "title": "Persistence with JDBC, JPA, and Hibernate",
          "detail": "Transactions, entity lifecycle, fetching, N+1, batching, locking, and connection pools.",
          "links": []
        },
        {
          "id": "backend-w7-java-4",
          "category": "Java",
          "title": "Java service observability",
          "detail": "Structured logs, metrics, tracing, health checks, profiling, and SLO-oriented alerts.",
          "links": []
        },
        {
          "id": "backend-w7-aws-1",
          "category": "AWS",
          "title": "Global infrastructure and cloud architecture",
          "detail": "Regions, Availability Zones, edge locations, accounts, Organizations, shared responsibility, and the AWS Well-Architected pillars.",
          "links": []
        },
        {
          "id": "backend-w7-aws-2",
          "category": "AWS",
          "title": "IAM, encryption, and security services",
          "detail": "Users, roles, policies, STS, least privilege, identity- vs resource-based policies, SCPs, KMS, Secrets Manager, WAF, Shield, and CloudTrail.",
          "links": [
            {
              "t": "doc",
              "label": "AWS — SNS developer guide",
              "url": "https://docs.aws.amazon.com/sns/latest/dg/welcome.html"
            },
            {
              "t": "ref",
              "label": "AWS — Fanout scenario (SNS+SQS)",
              "url": "https://docs.aws.amazon.com/sns/latest/dg/sns-common-scenarios.html"
            },
            {
              "t": "doc",
              "label": "AWS — IAM policies for SQS",
              "url": "https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-authentication-and-access-control.html"
            },
            {
              "t": "doc",
              "label": "AWS — S3 user guide",
              "url": "https://docs.aws.amazon.com/AmazonS3/latest/userguide/Welcome.html"
            },
            {
              "t": "ref",
              "label": "AWS — Presigned URLs",
              "url": "https://docs.aws.amazon.com/AmazonS3/latest/userguide/ShareObjectPreSignedURL.html"
            }
          ]
        },
        {
          "id": "backend-w7-aws-3",
          "category": "AWS",
          "title": "VPC networking and connectivity",
          "detail": "CIDR planning, public/private subnets, route tables, internet and NAT gateways, security groups vs NACLs, endpoints, peering, Transit Gateway, Route 53, and hybrid networking.",
          "links": []
        },
        {
          "id": "backend-w7-aws-4",
          "category": "AWS",
          "title": "Compute and container platforms",
          "detail": "EC2, Auto Scaling, Elastic Load Balancing, ECS, EKS, Fargate, Batch, and choosing between instances, containers, and serverless compute.",
          "links": []
        },
        {
          "id": "backend-w7-aws-5",
          "category": "AWS",
          "title": "SQS messaging and resilient consumers",
          "detail": "Standard vs FIFO queues, visibility timeout, long polling, deduplication, dead-letter queues, at-least-once delivery, backpressure, and idempotent consumer design.",
          "links": [
            {
              "t": "doc",
              "label": "AWS — SQS developer guide",
              "url": "https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/welcome.html"
            },
            {
              "t": "ref",
              "label": "AWS — SQS dead-letter queues",
              "url": "https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-dead-letter-queues.html"
            },
            {
              "t": "doc",
              "label": "AWS — SNS developer guide",
              "url": "https://docs.aws.amazon.com/sns/latest/dg/welcome.html"
            },
            {
              "t": "ref",
              "label": "AWS — Fanout scenario (SNS+SQS)",
              "url": "https://docs.aws.amazon.com/sns/latest/dg/sns-common-scenarios.html"
            },
            {
              "t": "doc",
              "label": "Spring Cloud AWS reference",
              "url": "https://docs.awspring.io/spring-cloud-aws/docs/current/reference/html/index.html"
            },
            {
              "t": "doc",
              "label": "LocalStack docs",
              "url": "https://docs.localstack.cloud/"
            },
            {
              "t": "doc",
              "label": "AWS — IAM policies for SQS",
              "url": "https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-authentication-and-access-control.html"
            },
            {
              "t": "doc",
              "label": "AWS — Lambda developer guide",
              "url": "https://docs.aws.amazon.com/lambda/latest/dg/welcome.html"
            },
            {
              "t": "ref",
              "label": "AWS — Lambda best practices",
              "url": "https://docs.aws.amazon.com/lambda/latest/dg/best-practices.html"
            }
          ]
        },
        {
          "id": "backend-w7-aws-6",
          "category": "AWS",
          "title": "SNS, EventBridge, and event-driven integration",
          "detail": "Pub/sub fan-out, SNS-to-SQS subscriptions, filtering, EventBridge routing, Kinesis streams, Step Functions, API Gateway, and SNS/SQS vs Kafka tradeoffs.",
          "links": [
            {
              "t": "doc",
              "label": "AWS — SNS developer guide",
              "url": "https://docs.aws.amazon.com/sns/latest/dg/welcome.html"
            },
            {
              "t": "ref",
              "label": "AWS — Fanout scenario (SNS+SQS)",
              "url": "https://docs.aws.amazon.com/sns/latest/dg/sns-common-scenarios.html"
            },
            {
              "t": "doc",
              "label": "Spring Cloud AWS reference",
              "url": "https://docs.awspring.io/spring-cloud-aws/docs/current/reference/html/index.html"
            },
            {
              "t": "doc",
              "label": "LocalStack docs",
              "url": "https://docs.localstack.cloud/"
            },
            {
              "t": "doc",
              "label": "AWS — IAM policies for SQS",
              "url": "https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-authentication-and-access-control.html"
            }
          ]
        },
        {
          "id": "backend-w7-aws-7",
          "category": "AWS",
          "title": "Build an AWS messaging integration",
          "detail": "Publish from Spring Boot to SNS and consume through SQS using AWS SDK v2 or Spring Cloud AWS; test locally with LocalStack and exercise retries and DLQs.",
          "links": [
            {
              "t": "doc",
              "label": "Spring Cloud AWS reference",
              "url": "https://docs.awspring.io/spring-cloud-aws/docs/current/reference/html/index.html"
            },
            {
              "t": "doc",
              "label": "LocalStack docs",
              "url": "https://docs.localstack.cloud/"
            }
          ]
        }
      ]
    },
    {
      "number": 8,
      "theme": "AWS storage & serverless: S3, Lambda, DynamoDB",
      "outcome": "Go deep on event streaming with Kafka, master core AWS building blocks used in almost every distributed backend, and add Redis for caching, rate limiting, and pub/sub.",
      "resources": [
        {
          "label": "AWS S3 Docs",
          "url": "https://docs.aws.amazon.com/s3/"
        },
        {
          "label": "AWS Lambda Docs",
          "url": "https://docs.aws.amazon.com/lambda/"
        },
        {
          "label": "AWS DynamoDB Docs",
          "url": "https://docs.aws.amazon.com/dynamodb/"
        }
      ],
      "tasks": [
        {
          "id": "backend-w8-system-design-1",
          "category": "System Design",
          "title": "Design a serverless image-processing pipeline",
          "detail": "S3 upload → Lambda (resize/thumbnail) → S3 output bucket → DynamoDB metadata table → SNS notification on completion",
          "links": [
            {
              "t": "ref",
              "label": "AWS — Serverless image handler reference",
              "url": "https://aws.amazon.com/solutions/implementations/serverless-image-handler/"
            }
          ]
        },
        {
          "id": "backend-w8-aws-1",
          "category": "AWS",
          "title": "S3 and storage architecture",
          "detail": "Buckets, strong consistency, storage classes, lifecycle policies, versioning, presigned URLs, events, replication, encryption, plus EBS, EFS, FSx, and backup tradeoffs.",
          "links": [
            {
              "t": "doc",
              "label": "AWS — S3 user guide",
              "url": "https://docs.aws.amazon.com/AmazonS3/latest/userguide/Welcome.html"
            },
            {
              "t": "ref",
              "label": "AWS — Presigned URLs",
              "url": "https://docs.aws.amazon.com/AmazonS3/latest/userguide/ShareObjectPreSignedURL.html"
            },
            {
              "t": "doc",
              "label": "AWS — Lambda developer guide",
              "url": "https://docs.aws.amazon.com/lambda/latest/dg/welcome.html"
            },
            {
              "t": "ref",
              "label": "AWS — Lambda best practices",
              "url": "https://docs.aws.amazon.com/lambda/latest/dg/best-practices.html"
            },
            {
              "t": "doc",
              "label": "AWS — Java Lambda handlers",
              "url": "https://docs.aws.amazon.com/lambda/latest/dg/java-handler.html"
            },
            {
              "t": "doc",
              "label": "AWS — S3 event notifications",
              "url": "https://docs.aws.amazon.com/AmazonS3/latest/userguide/EventNotifications.html"
            }
          ]
        },
        {
          "id": "backend-w8-aws-2",
          "category": "AWS",
          "title": "Lambda and serverless execution",
          "detail": "Execution environments, cold starts, concurrency, memory and timeout tuning, S3/SQS/API Gateway event sources, retries, destinations, and idempotency.",
          "links": [
            {
              "t": "doc",
              "label": "AWS — Lambda developer guide",
              "url": "https://docs.aws.amazon.com/lambda/latest/dg/welcome.html"
            },
            {
              "t": "ref",
              "label": "AWS — Lambda best practices",
              "url": "https://docs.aws.amazon.com/lambda/latest/dg/best-practices.html"
            },
            {
              "t": "doc",
              "label": "AWS — Java Lambda handlers",
              "url": "https://docs.aws.amazon.com/lambda/latest/dg/java-handler.html"
            },
            {
              "t": "doc",
              "label": "AWS — S3 event notifications",
              "url": "https://docs.aws.amazon.com/AmazonS3/latest/userguide/EventNotifications.html"
            }
          ]
        },
        {
          "id": "backend-w8-aws-3",
          "category": "AWS",
          "title": "Managed databases, search, and caching",
          "detail": "RDS and Aurora, DynamoDB, ElastiCache, Redshift, OpenSearch, and Neptune; choose by access pattern, consistency, scaling, availability, and cost.",
          "links": [
            {
              "t": "doc",
              "label": "AWS — Java Lambda handlers",
              "url": "https://docs.aws.amazon.com/lambda/latest/dg/java-handler.html"
            },
            {
              "t": "doc",
              "label": "AWS — S3 event notifications",
              "url": "https://docs.aws.amazon.com/AmazonS3/latest/userguide/EventNotifications.html"
            },
            {
              "t": "doc",
              "label": "AWS — DynamoDB developer guide",
              "url": "https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Introduction.html"
            },
            {
              "t": "ref",
              "label": "AWS — DynamoDB single-table design",
              "url": "https://aws.amazon.com/blogs/compute/creating-a-single-table-design-with-amazon-dynamodb/"
            }
          ]
        },
        {
          "id": "backend-w8-aws-4",
          "category": "AWS",
          "title": "DynamoDB data modeling",
          "detail": "Partition and sort keys, access-pattern-first and single-table design, GSIs vs LSIs, hot partitions, capacity modes, transactions, streams, and consistency options.",
          "links": [
            {
              "t": "doc",
              "label": "AWS — Java Lambda handlers",
              "url": "https://docs.aws.amazon.com/lambda/latest/dg/java-handler.html"
            },
            {
              "t": "doc",
              "label": "AWS — S3 event notifications",
              "url": "https://docs.aws.amazon.com/AmazonS3/latest/userguide/EventNotifications.html"
            },
            {
              "t": "doc",
              "label": "AWS — DynamoDB developer guide",
              "url": "https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Introduction.html"
            },
            {
              "t": "ref",
              "label": "AWS — DynamoDB single-table design",
              "url": "https://aws.amazon.com/blogs/compute/creating-a-single-table-design-with-amazon-dynamodb/"
            }
          ]
        },
        {
          "id": "backend-w8-aws-5",
          "category": "AWS",
          "title": "Build a serverless processing pipeline",
          "detail": "Process S3 uploads with Java Lambda, persist metadata in DynamoDB, publish completion events, and handle duplicate delivery, partial failure, and replay.",
          "links": [
            {
              "t": "doc",
              "label": "AWS — Java Lambda handlers",
              "url": "https://docs.aws.amazon.com/lambda/latest/dg/java-handler.html"
            },
            {
              "t": "doc",
              "label": "AWS — S3 event notifications",
              "url": "https://docs.aws.amazon.com/AmazonS3/latest/userguide/EventNotifications.html"
            }
          ]
        }
      ]
    },
    {
      "number": 9,
      "theme": "SQL deep dive: indexing, query plans & data modeling",
      "outcome": "Master relational data modeling and query performance, add Redis for caching/rate-limiting/pub-sub, get comfortable with CI/CD pipelines and containers, then tie it all together with microservices patterns and mock system design rounds.",
      "resources": [
        {
          "label": "Use The Index, Luke",
          "url": "https://use-the-index-luke.com/"
        },
        {
          "label": "PostgreSQL Docs",
          "url": "https://www.postgresql.org/docs/current/"
        }
      ],
      "tasks": [
        {
          "id": "backend-w9-java-1",
          "category": "Java",
          "title": "Build a small concurrent booking service",
          "detail": "Implement inventory holds, idempotent requests, tests, metrics, and clear transaction boundaries.",
          "links": []
        },
        {
          "id": "backend-w9-sql-1",
          "category": "SQL",
          "title": "Transactions, isolation, and concurrency",
          "detail": "ACID, MVCC, isolation levels and anomalies, pessimistic vs optimistic locking, deadlocks, retries, and transaction-boundary design.",
          "links": [
            {
              "t": "ref",
              "label": "PostgreSQL — Transaction isolation",
              "url": "https://www.postgresql.org/docs/current/transaction-iso.html"
            },
            {
              "t": "ref",
              "label": "Baeldung — Optimistic locking in JPA",
              "url": "https://www.baeldung.com/jpa-optimistic-locking"
            }
          ]
        },
        {
          "id": "backend-w9-sql-2",
          "category": "SQL",
          "title": "Indexes and query execution plans",
          "detail": "B-tree and hash indexes, composite column order, covering indexes, selectivity, non-sargable predicates, EXPLAIN ANALYZE, scans, and nested-loop/hash/merge joins.",
          "links": [
            {
              "t": "ref",
              "label": "Use The Index, Luke — full guide",
              "url": "https://use-the-index-luke.com/"
            },
            {
              "t": "doc",
              "label": "PostgreSQL — Indexes",
              "url": "https://www.postgresql.org/docs/current/indexes.html"
            },
            {
              "t": "doc",
              "label": "PostgreSQL — Using EXPLAIN",
              "url": "https://www.postgresql.org/docs/current/using-explain.html"
            },
            {
              "t": "ref",
              "label": "Depesz — Explain visualizer",
              "url": "https://explain.depesz.com/"
            }
          ]
        },
        {
          "id": "backend-w9-sql-3",
          "category": "SQL",
          "title": "Relational schema and data modeling",
          "detail": "Keys, constraints, normalization through 3NF, denormalization, multi-tenant schemas, temporal data, soft deletion, and auditability.",
          "links": [
            {
              "t": "ref",
              "label": "Baeldung — Database normalization",
              "url": "https://www.baeldung.com/cs/database-normalization"
            }
          ]
        },
        {
          "id": "backend-w9-sql-4",
          "category": "SQL",
          "title": "Database scaling and migration",
          "detail": "Connection pooling, caching, read replicas and replication lag, range/hash sharding, hotspot mitigation, online schema changes, and safe migration strategy.",
          "links": [
            {
              "t": "ref",
              "label": "AWS — RDS read replicas",
              "url": "https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_ReadRepl.html"
            },
            {
              "t": "ref",
              "label": "System Design Primer — Sharding",
              "url": "https://github.com/donnemartin/system-design-primer#sharding"
            }
          ]
        },
        {
          "id": "backend-w9-sql-5",
          "category": "SQL",
          "title": "Analytics and data-platform architecture",
          "detail": "OLTP vs OLAP, warehouses and lakehouses, ETL/ELT, change-data capture, dimensional modeling, and data-quality controls.",
          "links": []
        },
        {
          "id": "backend-w9-sql-6",
          "category": "SQL",
          "title": "SQL interview assessment and final review",
          "detail": "Complete a timed assessment spanning joins, CTEs, windows, optimization, transactions, modeling, and scaling; then create a one-page review sheet.",
          "links": [
            {
              "t": "lc",
              "label": "LeetCode — Top SQL 50",
              "url": "https://leetcode.com/studyplan/top-sql-50/"
            }
          ]
        }
      ]
    },
    {
      "number": 10,
      "theme": "Redis: caching, data structures, pub/sub & rate limiting",
      "outcome": "Master relational data modeling and query performance, add Redis for caching/rate-limiting/pub-sub, get comfortable with CI/CD pipelines and containers, then tie it all together with microservices patterns and mock system design rounds.",
      "resources": [
        {
          "label": "Redis Docs",
          "url": "https://redis.io/docs/latest/"
        },
        {
          "label": "Redis University",
          "url": "https://university.redis.io/"
        }
      ],
      "tasks": [
        {
          "id": "backend-w10-redis-1",
          "category": "Redis",
          "title": "Core data structures",
          "detail": "strings, hashes, lists, sets, sorted sets — map each to a real use case (session store, leaderboard, dedup set)",
          "links": [
            {
              "t": "doc",
              "label": "Redis — Data types",
              "url": "https://redis.io/docs/latest/develop/data-types/"
            }
          ]
        },
        {
          "id": "backend-w10-redis-2",
          "category": "Redis",
          "title": "Caching patterns",
          "detail": "cache-aside (lazy loading), write-through, write-behind; TTL and eviction policies (LRU, LFU, noeviction) — pick the right one per scenario",
          "links": [
            {
              "t": "ref",
              "label": "AWS — Caching strategies",
              "url": "https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/Strategies.html"
            },
            {
              "t": "doc",
              "label": "Redis — Eviction policies",
              "url": "https://redis.io/docs/latest/develop/reference/eviction/"
            }
          ]
        },
        {
          "id": "backend-w10-redis-3",
          "category": "Redis",
          "title": "Build a rate limiter (token bucket via Redis + Lua script for atomicity) and a distributed lock (Redlock or SET NX PX pattern) in Spring Boot",
          "detail": "",
          "links": [
            {
              "t": "ref",
              "label": "Redis — Rate limiting pattern",
              "url": "https://redis.io/glossary/rate-limiting/"
            },
            {
              "t": "ref",
              "label": "Redis — Distributed locks",
              "url": "https://redis.io/docs/latest/develop/clients/patterns/distributed-locks/"
            }
          ]
        },
        {
          "id": "backend-w10-redis-4",
          "category": "Redis",
          "title": "Pub/Sub basics and Redis Streams as a lightweight alternative to Kafka for smaller-scale event pipelines; compare guarantees vs Kafka",
          "detail": "",
          "links": [
            {
              "t": "doc",
              "label": "Redis — Pub/Sub",
              "url": "https://redis.io/docs/latest/develop/interact/pubsub/"
            },
            {
              "t": "doc",
              "label": "Redis — Streams",
              "url": "https://redis.io/docs/latest/develop/data-types/streams/"
            }
          ]
        },
        {
          "id": "backend-w10-redis-5",
          "category": "Redis",
          "title": "Integrate Spring Cache abstraction (@Cacheable/@CacheEvict) backed by Redis; add Redis-based session storage with Spring Session",
          "detail": "",
          "links": [
            {
              "t": "doc",
              "label": "Spring Data Redis reference",
              "url": "https://docs.spring.io/spring-data/redis/reference/"
            },
            {
              "t": "ref",
              "label": "Baeldung — Spring caching with Redis",
              "url": "https://www.baeldung.com/spring-boot-redis-cache"
            }
          ]
        },
        {
          "id": "backend-w10-java-1",
          "category": "Java",
          "title": "Java performance and production review",
          "detail": "Diagnose CPU, memory, lock contention, GC pauses, thread-pool exhaustion, and slow database access.",
          "links": []
        }
      ]
    },
    {
      "number": 11,
      "theme": "CI/CD, containers & deployment",
      "outcome": "Master relational data modeling and query performance, add Redis for caching/rate-limiting/pub-sub, get comfortable with CI/CD pipelines and containers, then tie it all together with microservices patterns and mock system design rounds.",
      "resources": [
        {
          "label": "Docker Docs",
          "url": "https://docs.docker.com/"
        },
        {
          "label": "Kubernetes Docs",
          "url": "https://kubernetes.io/docs/home/"
        },
        {
          "label": "GitHub Actions",
          "url": "https://docs.github.com/en/actions"
        }
      ],
      "tasks": [
        {
          "id": "backend-w11-ci-cd-1",
          "category": "CI/CD",
          "title": "Write a multi-stage Dockerfile for a Spring Boot app (build stage with Maven, slim runtime JRE image); understand layer caching for faster builds",
          "detail": "",
          "links": [
            {
              "t": "doc",
              "label": "Docker — Multi-stage builds",
              "url": "https://docs.docker.com/build/building/multi-stage/"
            },
            {
              "t": "ref",
              "label": "Spring Boot — Container images",
              "url": "https://docs.spring.io/spring-boot/reference/packaging/container-images/index.html"
            }
          ]
        },
        {
          "id": "backend-w11-ci-cd-2",
          "category": "CI/CD",
          "title": "Build a GitHub Actions pipeline",
          "detail": "run unit + integration tests, build a Docker image, push to a registry (ECR/Docker Hub), gate merges on passing checks",
          "links": [
            {
              "t": "doc",
              "label": "GitHub Actions docs",
              "url": "https://docs.github.com/en/actions"
            },
            {
              "t": "doc",
              "label": "AWS — Push image to ECR from GitHub Actions",
              "url": "https://docs.aws.amazon.com/AmazonECR/latest/userguide/getting-started-cli.html"
            }
          ]
        },
        {
          "id": "backend-w11-ci-cd-3",
          "category": "CI/CD",
          "title": "Deployment strategies",
          "detail": "blue-green, canary, rolling deployments — trade-offs in rollback speed vs blast radius",
          "links": [
            {
              "t": "ref",
              "label": "AWS — Blue/green vs canary deployments",
              "url": "https://docs.aws.amazon.com/whitepapers/latest/practicing-continuous-integration-continuous-delivery/deployment-methods.html"
            }
          ]
        },
        {
          "id": "backend-w11-ci-cd-4",
          "category": "CI/CD",
          "title": "Core objects",
          "detail": "Pod, Deployment, Service, ConfigMap/Secret, readiness vs liveness probes — deploy your Spring Boot app to a local cluster (minikube/kind)",
          "links": [
            {
              "t": "doc",
              "label": "Kubernetes — Concepts",
              "url": "https://kubernetes.io/docs/concepts/"
            },
            {
              "t": "doc",
              "label": "Kubernetes — kind (local clusters)",
              "url": "https://kind.sigs.k8s.io/"
            }
          ]
        },
        {
          "id": "backend-w11-microservices-1",
          "category": "Microservices",
          "title": "Add structured logging, metrics (Micrometer + Prometheus), and distributed tracing (OpenTelemetry) to your Spring Boot service",
          "detail": "",
          "links": [
            {
              "t": "doc",
              "label": "Spring Boot Actuator + Micrometer",
              "url": "https://docs.spring.io/spring-boot/reference/actuator/metrics.html"
            },
            {
              "t": "doc",
              "label": "OpenTelemetry — Java instrumentation",
              "url": "https://opentelemetry.io/docs/zero-code/java/"
            }
          ]
        },
        {
          "id": "backend-w11-java-1",
          "category": "Java",
          "title": "Complete a Java depth mock",
          "detail": "Cover language, collections, concurrency, JVM, APIs, persistence, testing, and production diagnosis.",
          "links": []
        },
        {
          "id": "backend-w11-aws-1",
          "category": "AWS",
          "title": "Observability, reliability, and disaster recovery",
          "detail": "CloudWatch, X-Ray, Config, Systems Manager, health checks, multi-AZ and multi-region patterns, backups, failover, RTO/RPO, and operational readiness.",
          "links": []
        },
        {
          "id": "backend-w11-aws-2",
          "category": "AWS",
          "title": "Infrastructure delivery, deployment, and governance",
          "detail": "CloudFormation, CDK, and Terraform concepts; CI/CD, rolling, blue-green and canary releases, Control Tower, tagging, budgets, and cost controls.",
          "links": []
        },
        {
          "id": "backend-w11-aws-3",
          "category": "AWS",
          "title": "AWS architecture scenario drills",
          "detail": "Design cost-optimized, highly available, event-driven, and multi-region workloads; justify service choices, security boundaries, failure handling, and cost.",
          "links": []
        },
        {
          "id": "backend-w11-aws-4",
          "category": "AWS",
          "title": "AWS architecture mock and final review",
          "detail": "Complete a timed architecture interview covering networking, compute, storage, data, integration, security, observability, resilience, disaster recovery, and cost; create a one-page service map.",
          "links": []
        }
      ]
    },
    {
      "number": 12,
      "theme": "Microservices patterns + capstone system design mocks",
      "outcome": "Master relational data modeling and query performance, add Redis for caching/rate-limiting/pub-sub, get comfortable with CI/CD pipelines and containers, then tie it all together with microservices patterns and mock system design rounds.",
      "resources": [
        {
          "label": "microservices.io",
          "url": "https://microservices.io/"
        },
        {
          "label": "Resilience4j",
          "url": "https://resilience4j.readme.io/"
        },
        {
          "label": "AWS Event-Driven Architecture",
          "url": "https://aws.amazon.com/event-driven-architecture/"
        }
      ],
      "tasks": [
        {
          "id": "backend-w12-microservices-1",
          "category": "Microservices",
          "title": "Decomposition strategies (by business capability vs subdomain), database-per-service, API gateway pattern, service discovery (Eureka/Consul)",
          "detail": "",
          "links": [
            {
              "t": "ref",
              "label": "Microservices.io — Decomposition patterns",
              "url": "https://microservices.io/patterns/decomposition/decompose-by-business-capability.html"
            },
            {
              "t": "ref",
              "label": "Microservices.io — API Gateway",
              "url": "https://microservices.io/patterns/apigateway.html"
            }
          ]
        },
        {
          "id": "backend-w12-microservices-2",
          "category": "Microservices",
          "title": "Resilience patterns",
          "detail": "circuit breaker (Resilience4j), retries with exponential backoff + jitter, bulkheads, timeouts — implement all four in Spring Boot",
          "links": [
            {
              "t": "gh",
              "label": "Resilience4j — GitHub",
              "url": "https://github.com/resilience4j/resilience4j"
            },
            {
              "t": "ref",
              "label": "Baeldung — Resilience4j guide",
              "url": "https://www.baeldung.com/resilience4j"
            }
          ]
        },
        {
          "id": "backend-w12-microservices-3",
          "category": "Microservices",
          "title": "Distributed transactions",
          "detail": "2PC vs Saga (choreography vs orchestration) — design a saga for an order+payment+inventory flow using Kafka events",
          "links": [
            {
              "t": "ref",
              "label": "Microservices.io — Saga pattern",
              "url": "https://microservices.io/patterns/data/saga.html"
            }
          ]
        },
        {
          "id": "backend-w12-microservices-4",
          "category": "Microservices",
          "title": "Build and connect a 3-service system",
          "detail": "Order Service (Spring Boot + Postgres) → Kafka → Inventory Service (DynamoDB) → SNS/SQS notification fan-out, cached with Redis, deployed via your CI/CD pipeline",
          "links": [
            {
              "t": "ref",
              "label": "AWS — Event-driven architecture reference",
              "url": "https://aws.amazon.com/event-driven-architecture/"
            }
          ]
        },
        {
          "id": "backend-w12-mock-interview-1",
          "category": "Mock Interview",
          "title": "2 system design mocks focused on this stack",
          "detail": "'design a scalable order processing system' and 'design a rate-limited notification service' — narrate trade-offs out loud",
          "links": [
            {
              "t": "ref",
              "label": "Interviewing.io",
              "url": "https://interviewing.io"
            },
            {
              "t": "ref",
              "label": "Pramp.com",
              "url": "https://www.pramp.com"
            }
          ]
        },
        {
          "id": "backend-w12-java-1",
          "category": "Java",
          "title": "Review Java one-page notes",
          "detail": "Collections, concurrency, JVM, streams, exceptions, APIs, persistence, testing, and performance.",
          "links": []
        }
      ]
    }
  ]
};
