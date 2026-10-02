/* Final dashboard-ready curriculum. Task IDs follow <track>-w<week>-<category-slug>-<n>; keep them stable so saved progress is preserved. */
window.TECH_TRACK = {
  "id": "tech",
  "title": "Tech Prep",
  "subtitle": "DSA, architecture, LLD, leadership, machine coding, and complete interview loops.",
  "durationWeeks": 24,
  "categories": [
    {
      "name": "DSA",
      "color": "#ff385c"
    },
    {
      "name": "LLD",
      "color": "#c084fc"
    },
    {
      "name": "Behavioral",
      "color": "#a3a3a3"
    },
    {
      "name": "System Design",
      "color": "#00a699"
    },
    {
      "name": "Code Review",
      "color": "#fb923c"
    },
    {
      "name": "Machine Coding",
      "color": "#38bdf8"
    },
    {
      "name": "Mock Interview",
      "color": "#f472b6"
    },
    {
      "name": "Leadership",
      "color": "#facc15"
    }
  ],
  "weeks": [
    {
      "number": 1,
      "theme": "Arrays, strings & LLD mindset",
      "outcome": "Build core data structure fundamentals and begin thinking in object-oriented design. DSA: easy problems only. LLD: start with SOLID and simple class diagrams before any code.",
      "resources": [
        {
          "label": "Neetcode.io",
          "url": "https://neetcode.io"
        },
        {
          "label": "Visualgo.net",
          "url": "https://visualgo.net/en"
        },
        {
          "label": "Refactoring.Guru",
          "url": "https://refactoring.guru"
        },
        {
          "label": "Hello Interview Overview",
          "url": "https://www.hellointerview.com/learn/code/two-pointers/overview"
        }
      ],
      "tasks": [
        {
          "id": "tech-w1-dsa-1",
          "category": "DSA",
          "title": "Two-pointer",
          "detail": "Two Sum, Valid Palindrome, 3Sum",
          "links": [
            {
              "t": "lc",
              "label": "LC #1 Two Sum",
              "url": "https://leetcode.com/problems/two-sum/"
            },
            {
              "t": "lc",
              "label": "LC #125 Valid Palindrome",
              "url": "https://leetcode.com/problems/valid-palindrome/"
            },
            {
              "t": "lc",
              "label": "LC #15 3Sum",
              "url": "https://leetcode.com/problems/3sum/"
            }
          ]
        },
        {
          "id": "tech-w1-dsa-2",
          "category": "DSA",
          "title": "Sliding window",
          "detail": "Longest Substring Without Repeating Characters",
          "links": [
            {
              "t": "lc",
              "label": "LC3 Longest Substring",
              "url": "https://leetcode.com/problems/longest-substring-without-repeating-characters/"
            },
            {
              "t": "hi",
              "label": "HI Max sub array sum",
              "url": "https://www.hellointerview.com/learn/code/sliding-window/maximum-sum-of-subarrays-of-size-k"
            },
            {
              "t": "lc",
              "label": "LC1423 Max point",
              "url": "https://leetcode.com/problems/maximum-points-you-can-obtain-from-cards/description/"
            },
            {
              "t": "lc",
              "label": "LC2461 Max sum distinct sub array",
              "url": "https://leetcode.com/problems/maximum-sum-of-distinct-subarrays-with-length-k/description/"
            },
            {
              "t": "lc",
              "label": "LC424 Longest repeating char replacement",
              "url": "https://leetcode.com/problems/longest-repeating-character-replacement/description/"
            }
          ]
        },
        {
          "id": "tech-w1-dsa-3",
          "category": "DSA",
          "title": "Arrays, strings and hashing",
          "detail": "Traversal, in-place operations, prefix sums, frequency counting, and matrix basics; hash map/set collision concepts, lookup tradeoffs, counting, grouping, and deduplication.",
          "links": [
            {
              "t": "lc",
              "label": "LC2306 Naming a Company",
              "url": "https://leetcode.com/problems/naming-a-company/"
            },
            {
              "t": "lc",
              "label": "LC1074 Number of Submatrices Sum to Target",
              "url": "https://leetcode.com/problems/number-of-submatrices-that-sum-to-target/"
            },
            {
              "t": "lc",
              "label": "LC41 First Missing Positive",
              "url": "https://leetcode.com/problems/first-missing-positive/"
            },
            {
              "t": "lc",
              "label": "LC214 Shortest Palindrome",
              "url": "https://leetcode.com/problems/shortest-palindrome/"
            },
            {
              "t": "lc",
              "label": "Transpose Matrix",
              "url": "https://leetcode.com/problems/transpose-matrix/description/"
            },
            {
              "t": "lc",
              "label": "Rotate Image",
              "url": "https://leetcode.com/problems/rotate-image/description/"
            },
            {
              "t": "lc",
              "label": "Spiral Matrix",
              "url": "https://leetcode.com/problems/spiral-matrix/description/"
            },
            {
              "t": "lc",
              "label": "Range Sum Query - Immutable",
              "url": "https://leetcode.com/problems/range-sum-query-immutable/description/"
            },
            {
              "t": "lc",
              "label": "Find Pivot Index",
              "url": "https://leetcode.com/problems/find-pivot-index/description/"
            },
            {
              "t": "lc",
              "label": "Subarray Sum Equals K",
              "url": "https://leetcode.com/problems/subarray-sum-equals-k/description/"
            },
            {
              "t": "lc",
              "label": "Remove Element",
              "url": "https://leetcode.com/problems/remove-element/description/"
            },
            {
              "t": "lc",
              "label": "Move Zeroes",
              "url": "https://leetcode.com/problems/move-zeroes/description/"
            },
            {
              "t": "lc",
              "label": "Set Matrix Zeroes",
              "url": "https://leetcode.com/problems/set-matrix-zeroes/description/"
            },
            {
              "t": "lc",
              "label": "Valid Anagram",
              "url": "https://leetcode.com/problems/valid-anagram/description/"
            },
            {
              "t": "lc",
              "label": "Majority Element",
              "url": "https://leetcode.com/problems/majority-element/description/"
            }
          ]
        },
        {
          "id": "tech-w1-lld-1",
          "category": "LLD",
          "title": "KISS, YAGNI, DRY, Separation of concern, Law of Demeter, SOLID",
          "detail": "",
          "links": [
            {
              "t": "hi",
              "label": "Design Principle",
              "url": "https://www.hellointerview.com/learn/low-level-design/in-a-hurry/design-principles"
            }
          ]
        },
        {
          "id": "tech-w1-lld-2",
          "category": "LLD",
          "title": "Draw a UML class diagram for a Parking Lot system (no code yet — classes, attributes, methods, relationships)",
          "detail": "",
          "links": [
            {
              "t": "gh",
              "label": "Parking Lot — awesome-lld",
              "url": "https://github.com/ashishps1/awesome-low-level-design/blob/main/problems/parking-lot.md"
            },
            {
              "t": "ref",
              "label": "draw.io (free UML)",
              "url": "https://app.diagrams.net/"
            }
          ]
        },
        {
          "id": "tech-w1-dsa-4",
          "category": "DSA",
          "title": "Big-O time and space complexity",
          "detail": "Analyze loops, recursion, amortized cost, and common growth rates.",
          "links": []
        },
        {
          "id": "tech-w1-dsa-5",
          "category": "DSA",
          "title": "Solve array/string problems",
          "detail": "Explain complexity aloud.",
          "links": [
            {
              "t": "lc",
              "label": "Brace Expansion II",
              "url": "https://leetcode.com/problems/brace-expansion-ii/description/?envType=problem-list-v2&envId=string"
            },
            {
              "t": "lc",
              "label": "Text Justification",
              "url": "https://leetcode.com/problems/text-justification/description/?envType=problem-list-v2&envId=string"
            },
            {
              "t": "lc",
              "label": "Scramble String",
              "url": "https://leetcode.com/problems/scramble-string/description/?envType=problem-list-v2&envId=string"
            },
            {
              "t": "lc",
              "label": "Word Ladder",
              "url": "https://leetcode.com/problems/word-ladder/description/?envType=problem-list-v2&envId=string"
            },
            {
              "t": "lc",
              "label": "Basic Calculator",
              "url": "https://leetcode.com/problems/basic-calculator/description/?envType=problem-list-v2&envId=string"
            },
            {
              "t": "lc",
              "label": "Sudoku Solver",
              "url": "https://leetcode.com/problems/sudoku-solver/description/?envType=problem-list-v2&envId=array"
            },
            {
              "t": "lc",
              "label": "Trapping Rain Water",
              "url": "https://leetcode.com/problems/trapping-rain-water/description/?envType=problem-list-v2&envId=array"
            },
            {
              "t": "lc",
              "label": "N-Queens",
              "url": "https://leetcode.com/problems/n-queens/description/?envType=problem-list-v2&envId=array"
            },
            {
              "t": "lc",
              "label": "Largest Rectangle In Histogram",
              "url": "https://leetcode.com/problems/largest-rectangle-in-histogram/description/?envType=problem-list-v2&envId=array"
            },
            {
              "t": "lc",
              "label": "Burst Balloons",
              "url": "https://leetcode.com/problems/burst-balloons/description/?envType=problem-list-v2&envId=array"
            },
            {
              "t": "lc",
              "label": "Count Of Range Sum",
              "url": "https://leetcode.com/problems/count-of-range-sum/description/?envType=problem-list-v2&envId=array"
            }
          ]
        },
        {
          "id": "tech-w1-behavioral-1",
          "category": "Behavioral",
          "title": "Create a career achievement inventory",
          "detail": "List 15 projects, conflicts, failures, decisions, and measurable outcomes.",
          "links": []
        },
        {
          "id": "tech-w1-behavioral-2",
          "category": "Behavioral",
          "title": "Write two STAR stories",
          "detail": "Focus on ownership and delivering significant business impact.",
          "links": []
        },
        {
          "id": "tech-w1-system-design-1",
          "category": "System Design",
          "title": "Take a baseline mock interview",
          "detail": "One coding and one system-design prompt; record gaps without over-preparing.",
          "links": []
        }
      ]
    },
    {
      "number": 2,
      "theme": "HashMaps, sets, prefix sums & OOP patterns",
      "outcome": "Build core data structure fundamentals and begin thinking in object-oriented design. DSA: easy problems only. LLD: start with SOLID and simple class diagrams before any code.",
      "resources": [
        {
          "label": "Head First Design Patterns",
          "url": "https://www.oreilly.com/library/view/head-first-design/0596007124/"
        },
        {
          "label": "Google Java Style Guide",
          "url": "https://google.github.io/styleguide/javaguide.html"
        }
      ],
      "tasks": [
        {
          "id": "tech-w2-dsa-1",
          "category": "DSA",
          "title": "HashMap patterns",
          "detail": "Group Anagrams, Valid Anagram, Contains Duplicate",
          "links": [
            {
              "t": "lc",
              "label": "LC #49 Group Anagrams",
              "url": "https://leetcode.com/problems/group-anagrams/"
            },
            {
              "t": "lc",
              "label": "LC #217 Contains Duplicate",
              "url": "https://leetcode.com/problems/contains-duplicate/"
            }
          ]
        },
        {
          "id": "tech-w2-dsa-2",
          "category": "DSA",
          "title": "Prefix sum",
          "detail": "Subarray Sum Equals K, Range Sum Query",
          "links": []
        },
        {
          "id": "tech-w2-dsa-3",
          "category": "DSA",
          "title": "Target",
          "detail": "8–10 easy problems. Write Big-O for every solution",
          "links": [
            {
              "t": "nc",
              "label": "Neetcode — Arrays & Hashing",
              "url": "https://neetcode.io/problems/contains-duplicate"
            }
          ]
        },
        {
          "id": "tech-w2-lld-1",
          "category": "LLD",
          "title": "Creational patterns",
          "detail": "Singleton, Factory, Builder — implement each in Java",
          "links": [
            {
              "t": "ref",
              "label": "Singleton",
              "url": "https://refactoring.guru/design-patterns/singleton"
            },
            {
              "t": "ref",
              "label": "Factory",
              "url": "https://refactoring.guru/design-patterns/factory-method"
            },
            {
              "t": "ref",
              "label": "Builder",
              "url": "https://refactoring.guru/design-patterns/builder"
            }
          ]
        },
        {
          "id": "tech-w2-lld-2",
          "category": "LLD",
          "title": "Implement Parking Lot in Java using your class diagram from Week 1",
          "detail": "",
          "links": [
            {
              "t": "gh",
              "label": "Parking Lot Java solution",
              "url": "https://github.com/ashishps1/awesome-low-level-design/tree/main/solutions/java/parkinglot"
            }
          ]
        },
        {
          "id": "tech-w2-dsa-4",
          "category": "DSA",
          "title": "Linked lists",
          "detail": "Reversal, merge, middle, cycle detection, intersection, and sentinel nodes.",
          "links": []
        },
        {
          "id": "tech-w2-dsa-5",
          "category": "DSA",
          "title": "Stacks, queues, and deques",
          "detail": "Monotonic stack, expression parsing, BFS queue, circular queue, and deque patterns.",
          "links": []
        },
        {
          "id": "tech-w2-dsa-6",
          "category": "DSA",
          "title": "Two pointers and sliding window",
          "detail": "Fixed/variable windows, fast/slow pointers, partitioning, and palindrome patterns.",
          "links": []
        },
        {
          "id": "tech-w2-dsa-7",
          "category": "DSA",
          "title": "Solve 15 linear-structure problems",
          "detail": "Prioritize medium problems and re-solve misses after 48 hours.",
          "links": []
        },
        {
          "id": "tech-w2-behavioral-1",
          "category": "Behavioral",
          "title": "Prepare influence-without-authority stories",
          "detail": "Write two examples involving senior peers or cross-functional leaders.",
          "links": []
        },
        {
          "id": "tech-w2-behavioral-2",
          "category": "Behavioral",
          "title": "Practice a 90-second introduction",
          "detail": "Connect your trajectory, scope, technical depth, and Airbnb motivation.",
          "links": []
        }
      ]
    },
    {
      "number": 3,
      "theme": "Linked lists, stacks & structural patterns",
      "outcome": "Build core data structure fundamentals and begin thinking in object-oriented design. DSA: easy problems only. LLD: start with SOLID and simple class diagrams before any code.",
      "resources": [
        {
          "label": "Visualgo — Linked List",
          "url": "https://visualgo.net/en/list"
        },
        {
          "label": "Refactoring.Guru — Structural",
          "url": "https://refactoring.guru/design-patterns/structural-patterns"
        }
      ],
      "tasks": [
        {
          "id": "tech-w3-dsa-1",
          "category": "DSA",
          "title": "Linked list",
          "detail": "Reverse Linked List, Merge Two Sorted Lists, Linked List Cycle",
          "links": [
            {
              "t": "lc",
              "label": "LC #206 Reverse Linked List",
              "url": "https://leetcode.com/problems/reverse-linked-list/"
            },
            {
              "t": "lc",
              "label": "LC #21 Merge Two Sorted Lists",
              "url": "https://leetcode.com/problems/merge-two-sorted-lists/"
            },
            {
              "t": "lc",
              "label": "LC #141 Linked List Cycle",
              "url": "https://leetcode.com/problems/linked-list-cycle/"
            }
          ]
        },
        {
          "id": "tech-w3-dsa-2",
          "category": "DSA",
          "title": "Stack",
          "detail": "Valid Parentheses, Min Stack, Daily Temperatures",
          "links": [
            {
              "t": "lc",
              "label": "LC #20 Valid Parentheses",
              "url": "https://leetcode.com/problems/valid-parentheses/"
            },
            {
              "t": "lc",
              "label": "LC #155 Min Stack",
              "url": "https://leetcode.com/problems/min-stack/"
            },
            {
              "t": "lc",
              "label": "LC #739 Daily Temperatures",
              "url": "https://leetcode.com/problems/daily-temperatures/"
            }
          ]
        },
        {
          "id": "tech-w3-lld-1",
          "category": "LLD",
          "title": "Structural patterns",
          "detail": "Adapter, Decorator, Composite — implement each in Java",
          "links": [
            {
              "t": "ref",
              "label": "Adapter",
              "url": "https://refactoring.guru/design-patterns/adapter"
            },
            {
              "t": "ref",
              "label": "Decorator",
              "url": "https://refactoring.guru/design-patterns/decorator"
            },
            {
              "t": "ref",
              "label": "Composite",
              "url": "https://refactoring.guru/design-patterns/composite"
            }
          ]
        },
        {
          "id": "tech-w3-lld-2",
          "category": "LLD",
          "title": "Design a Library Management System",
          "detail": "Book, Member, Loan, Library entities",
          "links": [
            {
              "t": "gh",
              "label": "Library Management — awesome-lld",
              "url": "https://github.com/ashishps1/awesome-low-level-design/blob/main/problems/library-management-system.md"
            }
          ]
        },
        {
          "id": "tech-w3-code-review-1",
          "category": "Code Review",
          "title": "Review your own Parking Lot code",
          "detail": "SOLID violations, naming, method length",
          "links": [
            {
              "t": "ref",
              "label": "Google Java Style Guide",
              "url": "https://google.github.io/styleguide/javaguide.html"
            },
            {
              "t": "ref",
              "label": "SonarLint IDE plugin",
              "url": "https://www.sonarsource.com/products/sonarlint/"
            }
          ]
        },
        {
          "id": "tech-w3-dsa-3",
          "category": "DSA",
          "title": "Recursion and backtracking",
          "detail": "Decision trees, subsets, permutations, combinations, pruning, and state restoration.",
          "links": []
        },
        {
          "id": "tech-w3-dsa-4",
          "category": "DSA",
          "title": "Binary trees and BSTs",
          "detail": "DFS traversals, BFS, depth, diameter, LCA, validation, serialization, and reconstruction.",
          "links": []
        },
        {
          "id": "tech-w3-dsa-5",
          "category": "DSA",
          "title": "Tries",
          "detail": "Prefix search, wildcard matching, autocomplete, and memory tradeoffs.",
          "links": []
        },
        {
          "id": "tech-w3-dsa-6",
          "category": "DSA",
          "title": "Solve 16 tree/backtracking problems",
          "detail": "Include at least two hard problems and timed explanations.",
          "links": []
        },
        {
          "id": "tech-w3-behavioral-1",
          "category": "Behavioral",
          "title": "Prepare failure and learning stories",
          "detail": "Show accountability, changed behavior, and durable organizational improvement.",
          "links": []
        }
      ]
    },
    {
      "number": 4,
      "theme": "Binary search, recursion & behavioral patterns",
      "outcome": "Build core data structure fundamentals and begin thinking in object-oriented design. DSA: easy problems only. LLD: start with SOLID and simple class diagrams before any code.",
      "resources": [
        {
          "label": "Visualgo — Binary Search",
          "url": "https://visualgo.net/en/bst"
        },
        {
          "label": "Refactoring.Guru — Behavioral",
          "url": "https://refactoring.guru/design-patterns/behavioral-patterns"
        }
      ],
      "tasks": [
        {
          "id": "tech-w4-dsa-1",
          "category": "DSA",
          "title": "Binary search",
          "detail": "Binary Search, Search in Rotated Sorted Array, Find Min in Rotated Array",
          "links": [
            {
              "t": "lc",
              "label": "LC #704 Binary Search",
              "url": "https://leetcode.com/problems/binary-search/"
            },
            {
              "t": "lc",
              "label": "LC #33 Search Rotated Array",
              "url": "https://leetcode.com/problems/search-in-rotated-sorted-array/"
            },
            {
              "t": "lc",
              "label": "LC #153 Find Min in Rotated Array",
              "url": "https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/"
            }
          ]
        },
        {
          "id": "tech-w4-dsa-2",
          "category": "DSA",
          "title": "Recursion",
          "detail": "Pow(x,n), Fibonacci, Climbing Stairs — trace the call stack by hand",
          "links": [
            {
              "t": "lc",
              "label": "LC #50 Pow(x,n)",
              "url": "https://leetcode.com/problems/powx-n/"
            },
            {
              "t": "lc",
              "label": "LC #509 Fibonacci",
              "url": "https://leetcode.com/problems/fibonacci-number/"
            },
            {
              "t": "lc",
              "label": "LC #70 Climbing Stairs",
              "url": "https://leetcode.com/problems/climbing-stairs/"
            }
          ]
        },
        {
          "id": "tech-w4-lld-1",
          "category": "LLD",
          "title": "Behavioral patterns",
          "detail": "Observer, Strategy, Command — implement each in Java",
          "links": [
            {
              "t": "ref",
              "label": "Observer",
              "url": "https://refactoring.guru/design-patterns/observer"
            },
            {
              "t": "ref",
              "label": "Strategy",
              "url": "https://refactoring.guru/design-patterns/strategy"
            },
            {
              "t": "ref",
              "label": "Command",
              "url": "https://refactoring.guru/design-patterns/command"
            }
          ]
        },
        {
          "id": "tech-w4-lld-2",
          "category": "LLD",
          "title": "Refactor Library Management System to use Strategy pattern for search",
          "detail": "",
          "links": [
            {
              "t": "gh",
              "label": "awesome-low-level-design",
              "url": "https://github.com/ashishps1/awesome-low-level-design"
            }
          ]
        },
        {
          "id": "tech-w4-dsa-3",
          "category": "DSA",
          "title": "Month 1 review",
          "detail": "redo 5 problems you got wrong. List your 3 weakest areas for month 2",
          "links": [
            {
              "t": "nc",
              "label": "Neetcode Roadmap (track progress)",
              "url": "https://neetcode.io/roadmap"
            }
          ]
        },
        {
          "id": "tech-w4-dsa-4",
          "category": "DSA",
          "title": "Heaps and priority queues",
          "detail": "Top-K, k-way merge, streaming median, scheduling, and custom comparators.",
          "links": []
        },
        {
          "id": "tech-w4-dsa-5",
          "category": "DSA",
          "title": "Graph representation and traversal",
          "detail": "Adjacency lists/matrices, BFS, DFS, connected components, bipartite testing, and cycle detection.",
          "links": []
        },
        {
          "id": "tech-w4-dsa-6",
          "category": "DSA",
          "title": "Topological sort and union-find",
          "detail": "Kahn/DFS ordering, dependency graphs, path compression, and union by rank.",
          "links": []
        },
        {
          "id": "tech-w4-dsa-7",
          "category": "DSA",
          "title": "Shortest paths and MST",
          "detail": "Dijkstra, Bellman-Ford, Floyd-Warshall, Prim, Kruskal, and selection criteria.",
          "links": []
        },
        {
          "id": "tech-w4-dsa-8",
          "category": "DSA",
          "title": "Solve 18 graph/heap problems",
          "detail": "Practice identifying graph models hidden inside word problems.",
          "links": []
        },
        {
          "id": "tech-w4-behavioral-1",
          "category": "Behavioral",
          "title": "Prepare conflict and disagreement stories",
          "detail": "Demonstrate listening, data-driven decisions, backbone, and commitment.",
          "links": []
        },
        {
          "id": "tech-w4-system-design-1",
          "category": "System Design",
          "title": "Month-one review and mock",
          "detail": "Run one 45-minute coding mock; revisit every missed problem and update gap notes.",
          "links": []
        }
      ]
    },
    {
      "number": 5,
      "theme": "Trees, DFS/BFS & machine coding setup",
      "outcome": "Master the most frequently tested DSA patterns. Introduce machine coding rounds (build a working feature in 75–90 min). Begin structured code review practice with a checklist.",
      "resources": [
        {
          "label": "Neetcode — Trees",
          "url": "https://neetcode.io/problems/invert-a-binary-tree"
        },
        {
          "label": "Machine Coding Primer (GitHub)",
          "url": "https://github.com/prasadgujar/low-level-design-primer"
        }
      ],
      "tasks": [
        {
          "id": "tech-w5-dsa-1",
          "category": "DSA",
          "title": "Tree traversals",
          "detail": "Binary Tree Level Order, Right Side View, Zigzag Level Order",
          "links": [
            {
              "t": "lc",
              "label": "LC #102 Level Order",
              "url": "https://leetcode.com/problems/binary-tree-level-order-traversal/"
            },
            {
              "t": "lc",
              "label": "LC #199 Right Side View",
              "url": "https://leetcode.com/problems/binary-tree-right-side-view/"
            },
            {
              "t": "lc",
              "label": "LC #103 Zigzag Level",
              "url": "https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/"
            }
          ]
        },
        {
          "id": "tech-w5-dsa-2",
          "category": "DSA",
          "title": "DFS",
          "detail": "Max Depth of Binary Tree, Same Tree, Invert Binary Tree",
          "links": [
            {
              "t": "lc",
              "label": "LC #104 Max Depth",
              "url": "https://leetcode.com/problems/maximum-depth-of-binary-tree/"
            },
            {
              "t": "lc",
              "label": "LC #100 Same Tree",
              "url": "https://leetcode.com/problems/same-tree/"
            },
            {
              "t": "lc",
              "label": "LC #226 Invert Tree",
              "url": "https://leetcode.com/problems/invert-binary-tree/"
            }
          ]
        },
        {
          "id": "tech-w5-dsa-3",
          "category": "DSA",
          "title": "Target",
          "detail": "10–12 medium problems. Start timing at 35 min per problem",
          "links": [
            {
              "t": "nc",
              "label": "Neetcode — Trees",
              "url": "https://neetcode.io/problems/invert-a-binary-tree"
            }
          ]
        },
        {
          "id": "tech-w5-machine-coding-1",
          "category": "Machine Coding",
          "title": "Setup",
          "detail": "create a clean Java Maven project template (no frameworks, console I/O)",
          "links": [
            {
              "t": "ref",
              "label": "Maven in 5 minutes",
              "url": "https://maven.apache.org/guides/getting-started/maven-in-five-minutes.html"
            }
          ]
        },
        {
          "id": "tech-w5-machine-coding-2",
          "category": "Machine Coding",
          "title": "Build a working Parking Lot from scratch in 90 min — full OOP, multiple vehicle types, multiple floors",
          "detail": "",
          "links": [
            {
              "t": "gh",
              "label": "Parking Lot Java solution",
              "url": "https://github.com/ashishps1/awesome-low-level-design/tree/main/solutions/java/parkinglot"
            }
          ]
        },
        {
          "id": "tech-w5-dsa-4",
          "category": "DSA",
          "title": "Dynamic programming foundations",
          "detail": "State, transition, base cases, memoization, tabulation, and space optimization.",
          "links": []
        },
        {
          "id": "tech-w5-dsa-5",
          "category": "DSA",
          "title": "One-dimensional DP",
          "detail": "House robber, decoding, coin change, subsequences, and interval decisions.",
          "links": []
        },
        {
          "id": "tech-w5-dsa-6",
          "category": "DSA",
          "title": "Two-dimensional and grid DP",
          "detail": "Paths, edit distance, LCS, knapsack, matrix states, and reconstruction.",
          "links": []
        },
        {
          "id": "tech-w5-dsa-7",
          "category": "DSA",
          "title": "Solve 16 DP problems",
          "detail": "Write recurrence before code and compare top-down vs bottom-up.",
          "links": []
        },
        {
          "id": "tech-w5-system-design-1",
          "category": "System Design",
          "title": "System-design interview framework",
          "detail": "Requirements, estimates, APIs, data model, high-level design, bottlenecks, and tradeoffs.",
          "links": []
        },
        {
          "id": "tech-w5-system-design-2",
          "category": "System Design",
          "title": "Scalability fundamentals",
          "detail": "Vertical/horizontal scaling, load balancing, caching, CDNs, partitioning, replication, and backpressure.",
          "links": []
        },
        {
          "id": "tech-w5-system-design-3",
          "category": "System Design",
          "title": "Design a URL shortener",
          "detail": "Complete a timed design and capture assumptions, alternatives, and failure modes.",
          "links": []
        },
        {
          "id": "tech-w5-behavioral-1",
          "category": "Behavioral",
          "title": "Prepare a major technical decision story",
          "detail": "Show ambiguity reduction, alternatives, long-term consequences, and stakeholder alignment.",
          "links": []
        }
      ]
    },
    {
      "number": 6,
      "theme": "BST, heap & LLD: ride sharing",
      "outcome": "Master the most frequently tested DSA patterns. Introduce machine coding rounds (build a working feature in 75–90 min). Begin structured code review practice with a checklist.",
      "resources": [
        {
          "label": "Neetcode — Heap",
          "url": "https://neetcode.io/problems/kth-largest-element-in-a-stream"
        },
        {
          "label": "Pramp.com",
          "url": "https://www.pramp.com"
        }
      ],
      "tasks": [
        {
          "id": "tech-w6-dsa-1",
          "category": "DSA",
          "title": "BST",
          "detail": "Validate Binary Search Tree, Kth Smallest Element in BST, Lowest Common Ancestor",
          "links": [
            {
              "t": "lc",
              "label": "LC #98 Validate BST",
              "url": "https://leetcode.com/problems/validate-binary-search-tree/"
            },
            {
              "t": "lc",
              "label": "LC #230 Kth Smallest",
              "url": "https://leetcode.com/problems/kth-smallest-element-in-a-bst/"
            },
            {
              "t": "lc",
              "label": "LC #235 LCA of BST",
              "url": "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/"
            }
          ]
        },
        {
          "id": "tech-w6-dsa-2",
          "category": "DSA",
          "title": "Heap",
          "detail": "Kth Largest Element, Top K Frequent Elements, Merge K Sorted Lists",
          "links": [
            {
              "t": "lc",
              "label": "LC #215 Kth Largest",
              "url": "https://leetcode.com/problems/kth-largest-element-in-an-array/"
            },
            {
              "t": "lc",
              "label": "LC #347 Top K Frequent",
              "url": "https://leetcode.com/problems/top-k-frequent-elements/"
            },
            {
              "t": "lc",
              "label": "LC #23 Merge K Sorted Lists",
              "url": "https://leetcode.com/problems/merge-k-sorted-lists/"
            }
          ]
        },
        {
          "id": "tech-w6-dsa-3",
          "category": "DSA",
          "title": "First Pramp mock — practice talking through your approach before writing any code",
          "detail": "",
          "links": [
            {
              "t": "ref",
              "label": "Pramp.com (free mocks)",
              "url": "https://www.pramp.com"
            }
          ]
        },
        {
          "id": "tech-w6-lld-1",
          "category": "LLD",
          "title": "Design Uber/Ola ride-sharing",
          "detail": "Driver, Rider, Trip, TripMatcher, PricingStrategy — use Strategy pattern",
          "links": [
            {
              "t": "gh",
              "label": "Ride Sharing LLD — awesome-lld",
              "url": "https://github.com/ashishps1/awesome-low-level-design/blob/main/problems/ride-sharing-system.md"
            }
          ]
        },
        {
          "id": "tech-w6-code-review-1",
          "category": "Code Review",
          "title": "Review an open-source Spring Boot Java repo",
          "detail": "find 5 issues (SOLID, naming, exception handling, thread safety, test coverage)",
          "links": [
            {
              "t": "gh",
              "label": "Spring Boot smoke tests",
              "url": "https://github.com/spring-projects/spring-boot/tree/main/spring-boot-tests/spring-boot-smoke-tests"
            },
            {
              "t": "ref",
              "label": "Java Code Review Checklist",
              "url": "https://dzone.com/articles/java-code-review-checklist"
            }
          ]
        },
        {
          "id": "tech-w6-dsa-4",
          "category": "DSA",
          "title": "Sorting and searching",
          "detail": "Quicksort, mergesort, heapsort, counting/radix concepts, binary search variants, and quickselect.",
          "links": []
        },
        {
          "id": "tech-w6-dsa-5",
          "category": "DSA",
          "title": "Greedy algorithms and intervals",
          "detail": "Exchange arguments, scheduling, merging, sweep line, and meeting-room patterns.",
          "links": []
        },
        {
          "id": "tech-w6-dsa-6",
          "category": "DSA",
          "title": "Bit manipulation and math",
          "detail": "Masks, XOR, shifts, subsets, GCD, primes, modular arithmetic, and overflow.",
          "links": []
        },
        {
          "id": "tech-w6-dsa-7",
          "category": "DSA",
          "title": "Advanced range data structures",
          "detail": "Fenwick tree, segment tree, sparse table concepts, and when to use each.",
          "links": []
        },
        {
          "id": "tech-w6-dsa-8",
          "category": "DSA",
          "title": "Solve 18 mixed algorithm problems",
          "detail": "Use a 35-minute limit and document pattern, error, and improved approach.",
          "links": []
        },
        {
          "id": "tech-w6-system-design-1",
          "category": "System Design",
          "title": "Distributed-system fundamentals",
          "detail": "CAP, consistency models, quorum, consensus concepts, clocks, idempotency, and split brain.",
          "links": []
        },
        {
          "id": "tech-w6-system-design-2",
          "category": "System Design",
          "title": "Messaging and event-driven architecture",
          "detail": "Queues vs streams, delivery semantics, ordering, consumer groups, DLQs, saga, and outbox.",
          "links": []
        },
        {
          "id": "tech-w6-system-design-3",
          "category": "System Design",
          "title": "Design a notification platform",
          "detail": "Cover prioritization, fan-out, retries, preferences, rate limits, and observability.",
          "links": []
        },
        {
          "id": "tech-w6-behavioral-1",
          "category": "Behavioral",
          "title": "Prepare a strategy and vision story",
          "detail": "Demonstrate multi-year thinking, sequencing, alignment, and measurable outcomes.",
          "links": []
        }
      ]
    },
    {
      "number": 7,
      "theme": "Graphs & machine coding: elevator system",
      "outcome": "Master the most frequently tested DSA patterns. Introduce machine coding rounds (build a working feature in 75–90 min). Begin structured code review practice with a checklist.",
      "resources": [
        {
          "label": "Neetcode — Graphs",
          "url": "https://neetcode.io/problems/number-of-islands"
        },
        {
          "label": "awesome-low-level-design",
          "url": "https://github.com/ashishps1/awesome-low-level-design"
        }
      ],
      "tasks": [
        {
          "id": "tech-w7-dsa-1",
          "category": "DSA",
          "title": "BFS",
          "detail": "Rotten Oranges, Number of Islands, Word Ladder",
          "links": [
            {
              "t": "lc",
              "label": "LC #994 Rotten Oranges",
              "url": "https://leetcode.com/problems/rotting-oranges/"
            },
            {
              "t": "lc",
              "label": "LC #200 Number of Islands",
              "url": "https://leetcode.com/problems/number-of-islands/"
            }
          ]
        },
        {
          "id": "tech-w7-dsa-2",
          "category": "DSA",
          "title": "DFS",
          "detail": "Clone Graph, Course Schedule, Pacific Atlantic Water Flow",
          "links": [
            {
              "t": "lc",
              "label": "LC #133 Clone Graph",
              "url": "https://leetcode.com/problems/clone-graph/"
            },
            {
              "t": "lc",
              "label": "LC #207 Course Schedule",
              "url": "https://leetcode.com/problems/course-schedule/"
            },
            {
              "t": "lc",
              "label": "LC #417 Pacific Atlantic",
              "url": "https://leetcode.com/problems/pacific-atlantic-water-flow/"
            }
          ]
        },
        {
          "id": "tech-w7-dsa-3",
          "category": "DSA",
          "title": "Union-Find",
          "detail": "Redundant Connection, Number of Connected Components",
          "links": [
            {
              "t": "lc",
              "label": "LC #684 Redundant Connection",
              "url": "https://leetcode.com/problems/redundant-connection/"
            },
            {
              "t": "lc",
              "label": "LC #323 Connected Components",
              "url": "https://leetcode.com/problems/number-of-connected-components-in-an-undirected-graph/"
            }
          ]
        },
        {
          "id": "tech-w7-machine-coding-1",
          "category": "Machine Coding",
          "title": "Build an Elevator System in 90 min",
          "detail": "multiple elevators, floor requests, SCAN scheduling",
          "links": [
            {
              "t": "gh",
              "label": "Elevator System — awesome-lld",
              "url": "https://github.com/ashishps1/awesome-low-level-design/blob/main/problems/elevator-system.md"
            }
          ]
        },
        {
          "id": "tech-w7-code-review-1",
          "category": "Code Review",
          "title": "Review your own Elevator code",
          "detail": "is scheduling logic separated from state? Thread-safe?",
          "links": [
            {
              "t": "ref",
              "label": "Java Concurrency — Baeldung",
              "url": "https://www.baeldung.com/java-concurrency"
            },
            {
              "t": "ref",
              "label": "Effective Java (Item 66)",
              "url": "https://www.oreilly.com/library/view/effective-java/9780134686097/"
            }
          ]
        },
        {
          "id": "tech-w7-system-design-1",
          "category": "System Design",
          "title": "Design a booking and reservation service",
          "detail": "Prevent double booking; cover inventory, holds, payments, consistency, and recovery.",
          "links": []
        },
        {
          "id": "tech-w7-dsa-4",
          "category": "DSA",
          "title": "Complete two timed coding mocks",
          "detail": "One medium pair and one hard problem; communicate tradeoffs and test thoroughly.",
          "links": []
        },
        {
          "id": "tech-w7-behavioral-1",
          "category": "Behavioral",
          "title": "Prepare mentorship and talent stories",
          "detail": "Show how you multiplied senior engineers and improved organizational capability.",
          "links": []
        }
      ]
    },
    {
      "number": 8,
      "theme": "Advanced sliding window & code review deep dive",
      "outcome": "Master the most frequently tested DSA patterns. Introduce machine coding rounds (build a working feature in 75–90 min). Begin structured code review practice with a checklist.",
      "resources": [
        {
          "label": "Neetcode — Sliding Window",
          "url": "https://neetcode.io/problems/best-time-to-buy-and-sell-stock"
        },
        {
          "label": "OWASP Java Cheat Sheet",
          "url": "https://cheatsheetseries.owasp.org/cheatsheets/Java_Security_Cheat_Sheet.html"
        }
      ],
      "tasks": [
        {
          "id": "tech-w8-dsa-1",
          "category": "DSA",
          "title": "Binary search on answer",
          "detail": "Koko Eating Bananas, Capacity to Ship Packages",
          "links": [
            {
              "t": "lc",
              "label": "LC #875 Koko Eating Bananas",
              "url": "https://leetcode.com/problems/koko-eating-bananas/"
            },
            {
              "t": "lc",
              "label": "LC #1011 Capacity to Ship",
              "url": "https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/"
            }
          ]
        },
        {
          "id": "tech-w8-dsa-2",
          "category": "DSA",
          "title": "Sliding window hard",
          "detail": "Minimum Window Substring, Sliding Window Maximum",
          "links": [
            {
              "t": "lc",
              "label": "LC #76 Min Window Substring",
              "url": "https://leetcode.com/problems/minimum-window-substring/"
            },
            {
              "t": "lc",
              "label": "LC #239 Sliding Window Max",
              "url": "https://leetcode.com/problems/sliding-window-maximum/"
            }
          ]
        },
        {
          "id": "tech-w8-dsa-3",
          "category": "DSA",
          "title": "Week 5–7 review",
          "detail": "redo all problems you couldn't solve on first attempt",
          "links": [
            {
              "t": "nc",
              "label": "Neetcode Roadmap",
              "url": "https://neetcode.io/roadmap"
            }
          ]
        },
        {
          "id": "tech-w8-code-review-1",
          "category": "Code Review",
          "title": "Review a Spring Boot REST API",
          "detail": "error handling, input validation, transaction boundaries, Kafka consumer patterns",
          "links": [
            {
              "t": "gh",
              "label": "Spring Kafka examples",
              "url": "https://github.com/spring-projects/spring-kafka"
            },
            {
              "t": "ref",
              "label": "Spring Best Practices — Baeldung",
              "url": "https://www.baeldung.com/spring-boot-application-configuration"
            }
          ]
        },
        {
          "id": "tech-w8-code-review-2",
          "category": "Code Review",
          "title": "Create your personal 15-item code review checklist",
          "detail": "naming, SOLID, concurrency, security, testability",
          "links": [
            {
              "t": "ref",
              "label": "OWASP Java Security Cheat Sheet",
              "url": "https://cheatsheetseries.owasp.org/cheatsheets/Java_Security_Cheat_Sheet.html"
            },
            {
              "t": "ref",
              "label": "Java Code Review Checklist",
              "url": "https://dzone.com/articles/java-code-review-checklist"
            }
          ]
        },
        {
          "id": "tech-w8-system-design-1",
          "category": "System Design",
          "title": "Design a multi-region photo platform on AWS",
          "detail": "Cover upload, processing, metadata, CDN, moderation, cost, resilience, and failover.",
          "links": []
        },
        {
          "id": "tech-w8-system-design-2",
          "category": "System Design",
          "title": "Month-two design mock",
          "detail": "Run a 60-minute principal-level mock and score requirements, depth, tradeoffs, and leadership.",
          "links": []
        },
        {
          "id": "tech-w8-behavioral-1",
          "category": "Behavioral",
          "title": "Prepare an operational excellence story",
          "detail": "Explain a severe incident, systems thinking, remediation, and prevention.",
          "links": []
        }
      ]
    },
    {
      "number": 9,
      "theme": "DP 1D + LLD: food delivery + HLD: URL shortener",
      "outcome": "Dynamic programming, backtracking, and tries. HLD system design starts (1 session/week). LLD moves to distributed-system-adjacent designs. Machine coding rounds timed at 75 min.",
      "resources": [
        {
          "label": "Neetcode — 1D DP",
          "url": "https://neetcode.io/problems/climbing-stairs"
        },
        {
          "label": "ByteByteGo",
          "url": "https://bytebytego.com"
        }
      ],
      "tasks": [
        {
          "id": "tech-w9-dsa-1",
          "category": "DSA",
          "title": "1D DP",
          "detail": "Climbing Stairs, House Robber, Coin Change — understand state → recurrence → base case",
          "links": [
            {
              "t": "lc",
              "label": "LC #198 House Robber",
              "url": "https://leetcode.com/problems/house-robber/"
            },
            {
              "t": "lc",
              "label": "LC #322 Coin Change",
              "url": "https://leetcode.com/problems/coin-change/"
            }
          ]
        },
        {
          "id": "tech-w9-dsa-2",
          "category": "DSA",
          "title": "Practice BOTH top-down (memoization) and bottom-up (tabulation) for same problem — don't skip",
          "detail": "",
          "links": [
            {
              "t": "ref",
              "label": "DP patterns — AlgoMaster",
              "url": "https://blog.algomaster.io/p/20-dsa-patterns"
            },
            {
              "t": "nc",
              "label": "Neetcode — 1D DP",
              "url": "https://neetcode.io/problems/climbing-stairs"
            }
          ]
        },
        {
          "id": "tech-w9-lld-1",
          "category": "LLD",
          "title": "Design a Food Delivery system (DoorDash analog)",
          "detail": "Restaurant, MenuItem, Order, DeliveryAgent, OrderTracker — Observer for status updates",
          "links": [
            {
              "t": "gh",
              "label": "Food Delivery LLD — awesome-lld",
              "url": "https://github.com/ashishps1/awesome-low-level-design/blob/main/problems/food-delivery-service.md"
            }
          ]
        },
        {
          "id": "tech-w9-lld-2",
          "category": "LLD",
          "title": "Apply Observer pattern for order status updates; Strategy pattern for delivery fee calculation",
          "detail": "",
          "links": [
            {
              "t": "ref",
              "label": "Observer pattern — Refactoring.Guru",
              "url": "https://refactoring.guru/design-patterns/observer"
            },
            {
              "t": "ref",
              "label": "Strategy pattern — Refactoring.Guru",
              "url": "https://refactoring.guru/design-patterns/strategy"
            }
          ]
        },
        {
          "id": "tech-w9-system-design-1",
          "category": "System Design",
          "title": "System Design (1hr)",
          "detail": "Design a URL Shortener — hashing, DB schema, redirect flow, caching, analytics",
          "links": [
            {
              "t": "ref",
              "label": "ByteByteGo — URL Shortener",
              "url": "https://bytebytego.com/courses/system-design-interview/design-a-url-shortener"
            },
            {
              "t": "gh",
              "label": "System Design Primer",
              "url": "https://github.com/donnemartin/system-design-primer#design-pastebin-dot-com-or-bit-dot-ly"
            }
          ]
        },
        {
          "id": "tech-w9-system-design-2",
          "category": "System Design",
          "title": "Design a global vacation-rental marketplace",
          "detail": "Listings, availability, pricing, search, booking, cancellation, and regional constraints.",
          "links": []
        },
        {
          "id": "tech-w9-system-design-3",
          "category": "System Design",
          "title": "Design search and ranking",
          "detail": "Indexing, geo search, filters, ranking signals, freshness, personalization, and experimentation.",
          "links": []
        },
        {
          "id": "tech-w9-system-design-4",
          "category": "System Design",
          "title": "Design pricing and availability calendars",
          "detail": "Rules, time zones, derived prices, cache invalidation, concurrency, and bulk updates.",
          "links": []
        },
        {
          "id": "tech-w9-system-design-5",
          "category": "System Design",
          "title": "Design payments and payouts",
          "detail": "Ledgers, idempotency, currency, fraud, asynchronous workflows, reconciliation, and compliance.",
          "links": []
        },
        {
          "id": "tech-w9-system-design-6",
          "category": "System Design",
          "title": "Reliability engineering",
          "detail": "SLIs/SLOs, error budgets, graceful degradation, retries, circuit breakers, load shedding, and chaos testing.",
          "links": []
        },
        {
          "id": "tech-w9-dsa-3",
          "category": "DSA",
          "title": "Solve 12 weak-pattern problems",
          "detail": "Choose only from tracked gaps and re-solve without notes.",
          "links": []
        },
        {
          "id": "tech-w9-behavioral-1",
          "category": "Behavioral",
          "title": "Prepare an ambiguous cross-org initiative story",
          "detail": "Show how you framed the problem, built a coalition, and created sustained leverage.",
          "links": []
        },
        {
          "id": "tech-w9-behavioral-2",
          "category": "Behavioral",
          "title": "Research Airbnb mission and engineering culture",
          "detail": "Connect belonging, host/guest trust, global scale, and product quality to your experience.",
          "links": []
        }
      ]
    },
    {
      "number": 10,
      "theme": "DP 2D + machine coding: LRU & LFU cache",
      "outcome": "Dynamic programming, backtracking, and tries. HLD system design starts (1 session/week). LLD moves to distributed-system-adjacent designs. Machine coding rounds timed at 75 min.",
      "resources": [
        {
          "label": "Neetcode — 2D DP",
          "url": "https://neetcode.io/problems/unique-paths"
        },
        {
          "label": "ByteByteGo",
          "url": "https://bytebytego.com"
        }
      ],
      "tasks": [
        {
          "id": "tech-w10-dsa-1",
          "category": "DSA",
          "title": "2D DP",
          "detail": "Unique Paths, Longest Common Subsequence, Edit Distance",
          "links": [
            {
              "t": "lc",
              "label": "LC #62 Unique Paths",
              "url": "https://leetcode.com/problems/unique-paths/"
            },
            {
              "t": "lc",
              "label": "LC #1143 LCS",
              "url": "https://leetcode.com/problems/longest-common-subsequence/"
            },
            {
              "t": "lc",
              "label": "LC #72 Edit Distance",
              "url": "https://leetcode.com/problems/edit-distance/"
            }
          ]
        },
        {
          "id": "tech-w10-dsa-2",
          "category": "DSA",
          "title": "Knapsack",
          "detail": "Partition Equal Subset Sum, Target Sum — DP needs volume, aim 8 problems",
          "links": [
            {
              "t": "lc",
              "label": "LC #416 Partition Subset Sum",
              "url": "https://leetcode.com/problems/partition-equal-subset-sum/"
            },
            {
              "t": "lc",
              "label": "LC #494 Target Sum",
              "url": "https://leetcode.com/problems/target-sum/"
            }
          ]
        },
        {
          "id": "tech-w10-machine-coding-1",
          "category": "Machine Coding",
          "title": "Build LRU Cache from scratch in 60 min (HashMap + doubly linked list, no built-ins)",
          "detail": "",
          "links": [
            {
              "t": "lc",
              "label": "LC #146 LRU Cache",
              "url": "https://leetcode.com/problems/lru-cache/"
            },
            {
              "t": "gh",
              "label": "Cache LLD reference",
              "url": "https://github.com/ashishps1/awesome-low-level-design/blob/main/problems/cache.md"
            }
          ]
        },
        {
          "id": "tech-w10-machine-coding-2",
          "category": "Machine Coding",
          "title": "Extend",
          "detail": "build LFU Cache — harder variant, frequently asked at Airbnb/DoorDash",
          "links": [
            {
              "t": "lc",
              "label": "LC #460 LFU Cache",
              "url": "https://leetcode.com/problems/lfu-cache/"
            }
          ]
        },
        {
          "id": "tech-w10-code-review-1",
          "category": "Code Review",
          "title": "Review your cache implementation",
          "detail": "is it thread-safe? Add ConcurrentHashMap + ReentrantLock",
          "links": [
            {
              "t": "ref",
              "label": "Java Concurrency in Practice",
              "url": "https://jcip.net/"
            },
            {
              "t": "ref",
              "label": "ConcurrentHashMap — Baeldung",
              "url": "https://www.baeldung.com/java-concurrent-map"
            }
          ]
        },
        {
          "id": "tech-w10-system-design-1",
          "category": "System Design",
          "title": "Architecture tradeoff drills",
          "detail": "Compare SQL/NoSQL, sync/async, consistency/availability, build/buy, monolith/services, and batch/stream.",
          "links": []
        },
        {
          "id": "tech-w10-system-design-2",
          "category": "System Design",
          "title": "Security and privacy by design",
          "detail": "Threat modeling, authentication/authorization, encryption, PII, tenancy, audit, abuse, and data deletion.",
          "links": []
        },
        {
          "id": "tech-w10-system-design-3",
          "category": "System Design",
          "title": "Capacity estimation drills",
          "detail": "Estimate QPS, storage, bandwidth, partitions, cache size, and cost for three systems.",
          "links": []
        },
        {
          "id": "tech-w10-system-design-4",
          "category": "System Design",
          "title": "Design reviews and migrations",
          "detail": "Plan zero-downtime migration, compatibility, dual writes, backfill, verification, rollback, and deprecation.",
          "links": []
        },
        {
          "id": "tech-w10-dsa-3",
          "category": "DSA",
          "title": "Complete three timed coding mocks",
          "detail": "Require clarification, optimal solution, compilable Java, tests, and complexity analysis.",
          "links": []
        },
        {
          "id": "tech-w10-behavioral-1",
          "category": "Behavioral",
          "title": "Prepare organizational transformation story",
          "detail": "Show technical vision, adoption strategy, resistance handling, and durable impact.",
          "links": []
        },
        {
          "id": "tech-w10-behavioral-2",
          "category": "Behavioral",
          "title": "Prepare ethics and values stories",
          "detail": "Cover a difficult principled decision and advocating for users or underrepresented perspectives.",
          "links": []
        }
      ]
    },
    {
      "number": 11,
      "theme": "Backtracking, tries & LLD: ticket booking",
      "outcome": "Dynamic programming, backtracking, and tries. HLD system design starts (1 session/week). LLD moves to distributed-system-adjacent designs. Machine coding rounds timed at 75 min.",
      "resources": [
        {
          "label": "Neetcode — Backtracking",
          "url": "https://neetcode.io/problems/combination-target-sum"
        },
        {
          "label": "Neetcode — Tries",
          "url": "https://neetcode.io/problems/implement-prefix-tree"
        },
        {
          "label": "Baeldung — Concurrency",
          "url": "https://www.baeldung.com/java-concurrency"
        }
      ],
      "tasks": [
        {
          "id": "tech-w11-dsa-1",
          "category": "DSA",
          "title": "Backtracking",
          "detail": "Subsets, Permutations, Combination Sum, Word Search",
          "links": [
            {
              "t": "lc",
              "label": "LC #78 Subsets",
              "url": "https://leetcode.com/problems/subsets/"
            },
            {
              "t": "lc",
              "label": "LC #46 Permutations",
              "url": "https://leetcode.com/problems/permutations/"
            },
            {
              "t": "lc",
              "label": "LC #39 Combination Sum",
              "url": "https://leetcode.com/problems/combination-sum/"
            },
            {
              "t": "lc",
              "label": "LC #79 Word Search",
              "url": "https://leetcode.com/problems/word-search/"
            }
          ]
        },
        {
          "id": "tech-w11-dsa-2",
          "category": "DSA",
          "title": "Trie",
          "detail": "Implement Trie, Word Search II, Design Add and Search Words",
          "links": [
            {
              "t": "lc",
              "label": "LC #208 Implement Trie",
              "url": "https://leetcode.com/problems/implement-trie-prefix-tree/"
            },
            {
              "t": "lc",
              "label": "LC #212 Word Search II",
              "url": "https://leetcode.com/problems/word-search-ii/"
            },
            {
              "t": "lc",
              "label": "LC #211 Add & Search Words",
              "url": "https://leetcode.com/problems/design-add-and-search-words-data-structure/"
            }
          ]
        },
        {
          "id": "tech-w11-lld-1",
          "category": "LLD",
          "title": "Design BookMyShow",
          "detail": "Show, Seat, Booking, PaymentProcessor, SeatLock — handle concurrent booking with optimistic locking",
          "links": [
            {
              "t": "gh",
              "label": "BookMyShow LLD — awesome-lld",
              "url": "https://github.com/ashishps1/awesome-low-level-design/blob/main/problems/online-ticket-booking-system.md"
            },
            {
              "t": "ref",
              "label": "Optimistic Locking — Baeldung",
              "url": "https://www.baeldung.com/jpa-optimistic-locking"
            }
          ]
        },
        {
          "id": "tech-w11-lld-2",
          "category": "LLD",
          "title": "Key challenge",
          "detail": "concurrent seat booking — use optimistic locking or synchronized blocks in Java",
          "links": [
            {
              "t": "ref",
              "label": "Java Optimistic Locking",
              "url": "https://www.baeldung.com/jpa-optimistic-locking"
            },
            {
              "t": "ref",
              "label": "Thread safety in Java",
              "url": "https://www.baeldung.com/java-thread-safety"
            }
          ]
        },
        {
          "id": "tech-w11-system-design-1",
          "category": "System Design",
          "title": "System Design (1hr)",
          "detail": "Design Autocomplete / Type-ahead — Trie vs Elasticsearch vs Redis sorted sets",
          "links": [
            {
              "t": "ref",
              "label": "ByteByteGo — Autocomplete",
              "url": "https://bytebytego.com/courses/system-design-interview/design-typeahead-suggestion"
            },
            {
              "t": "gh",
              "label": "System Design Primer",
              "url": "https://github.com/donnemartin/system-design-primer"
            }
          ]
        },
        {
          "id": "tech-w11-dsa-3",
          "category": "DSA",
          "title": "Complete two full coding interviews",
          "detail": "Use unseen medium/hard questions, 45 minutes each, with external feedback.",
          "links": []
        },
        {
          "id": "tech-w11-dsa-4",
          "category": "DSA",
          "title": "Review the complete DSA pattern sheet",
          "detail": "Arrays, hashing, pointers, windows, lists, stacks, trees, tries, heaps, graphs, backtracking, greedy, DP, intervals, bits, and range queries.",
          "links": []
        },
        {
          "id": "tech-w11-system-design-2",
          "category": "System Design",
          "title": "Complete two principal-level design mocks",
          "detail": "One marketplace system and one infrastructure/platform system.",
          "links": []
        },
        {
          "id": "tech-w11-system-design-3",
          "category": "System Design",
          "title": "Practice deep-dive follow-up questions",
          "detail": "Handle hotspots, failures, consistency, migration, observability, security, and tenfold growth.",
          "links": []
        },
        {
          "id": "tech-w11-behavioral-1",
          "category": "Behavioral",
          "title": "Complete a leadership interview mock",
          "detail": "Use concise STAR-L answers and expect repeated probing into your personal contribution.",
          "links": []
        },
        {
          "id": "tech-w11-behavioral-2",
          "category": "Behavioral",
          "title": "Build an eight-story interview matrix",
          "detail": "Map stories to leadership, conflict, failure, ambiguity, strategy, execution, mentoring, and operations.",
          "links": []
        },
        {
          "id": "tech-w11-system-design-4",
          "category": "System Design",
          "title": "Create a final gap-closing list",
          "detail": "Rank no more than five gaps by interview risk and assign a concrete drill to each.",
          "links": []
        }
      ]
    },
    {
      "number": 12,
      "theme": "Intervals, greedy, monotonic stack & machine coding: rate limiter",
      "outcome": "Dynamic programming, backtracking, and tries. HLD system design starts (1 session/week). LLD moves to distributed-system-adjacent designs. Machine coding rounds timed at 75 min.",
      "resources": [
        {
          "label": "ByteByteGo",
          "url": "https://bytebytego.com"
        },
        {
          "label": "Neetcode — Intervals",
          "url": "https://neetcode.io/problems/meeting-schedule"
        },
        {
          "label": "System Design Primer",
          "url": "https://github.com/donnemartin/system-design-primer"
        }
      ],
      "tasks": [
        {
          "id": "tech-w12-dsa-1",
          "category": "DSA",
          "title": "Intervals",
          "detail": "Merge Intervals, Insert Interval, Meeting Rooms II",
          "links": [
            {
              "t": "lc",
              "label": "LC #56 Merge Intervals",
              "url": "https://leetcode.com/problems/merge-intervals/"
            },
            {
              "t": "lc",
              "label": "LC #57 Insert Interval",
              "url": "https://leetcode.com/problems/insert-interval/"
            },
            {
              "t": "lc",
              "label": "LC #253 Meeting Rooms II",
              "url": "https://leetcode.com/problems/meeting-rooms-ii/"
            }
          ]
        },
        {
          "id": "tech-w12-dsa-2",
          "category": "DSA",
          "title": "Greedy",
          "detail": "Jump Game, Gas Station, Task Scheduler",
          "links": [
            {
              "t": "lc",
              "label": "LC #55 Jump Game",
              "url": "https://leetcode.com/problems/jump-game/"
            },
            {
              "t": "lc",
              "label": "LC #134 Gas Station",
              "url": "https://leetcode.com/problems/gas-station/"
            },
            {
              "t": "lc",
              "label": "LC #621 Task Scheduler",
              "url": "https://leetcode.com/problems/task-scheduler/"
            }
          ]
        },
        {
          "id": "tech-w12-dsa-3",
          "category": "DSA",
          "title": "Monotonic Stack",
          "detail": "Largest Rectangle in Histogram, Trapping Rain Water",
          "links": []
        },
        {
          "id": "tech-w12-machine-coding-1",
          "category": "Machine Coding",
          "title": "Build a Rate Limiter in 75 min",
          "detail": "Token Bucket AND Sliding Window algorithms, configurable per user, thread-safe",
          "links": [
            {
              "t": "ref",
              "label": "ByteByteGo — Rate Limiter",
              "url": "https://bytebytego.com/courses/system-design-interview/design-a-rate-limiter"
            },
            {
              "t": "ref",
              "label": "Guava RateLimiter (reference)",
              "url": "https://guava.dev/releases/snapshot/api/docs/com/google/common/util/concurrent/RateLimiter.html"
            }
          ]
        },
        {
          "id": "tech-w12-system-design-1",
          "category": "System Design",
          "title": "System Design (1hr)",
          "detail": "Design a Hotel / Accommodation Booking Platform — availability calendar, search, pricing (Airbnb analog)",
          "links": [
            {
              "t": "ref",
              "label": "ByteByteGo — Hotel Reservation",
              "url": "https://bytebytego.com/courses/system-design-interview/design-a-hotel-reservation-system"
            },
            {
              "t": "gh",
              "label": "System Design Primer",
              "url": "https://github.com/donnemartin/system-design-primer"
            }
          ]
        },
        {
          "id": "tech-w12-dsa-4",
          "category": "DSA",
          "title": "Re-solve the 15 highest-value coding problems",
          "detail": "Select representative patterns and previously missed problems; no new problem binge.",
          "links": []
        },
        {
          "id": "tech-w12-system-design-2",
          "category": "System Design",
          "title": "Complete one final system-design mock",
          "detail": "Optimize for structure, collaboration, risk identification, and business-aware tradeoffs.",
          "links": []
        },
        {
          "id": "tech-w12-behavioral-1",
          "category": "Behavioral",
          "title": "Rehearse the eight-story matrix",
          "detail": "Keep answers flexible rather than memorized; quantify scope, decisions, and impact.",
          "links": []
        },
        {
          "id": "tech-w12-behavioral-2",
          "category": "Behavioral",
          "title": "Prepare thoughtful interviewer questions",
          "detail": "Ask about technical strategy, principal scope, decision-making, culture, and Airbnb's current challenges.",
          "links": []
        },
        {
          "id": "tech-w12-behavioral-3",
          "category": "Behavioral",
          "title": "Finalize resume walkthrough and Airbnb motivation",
          "detail": "Give a coherent career narrative and specific reasons this role, company, and timing fit.",
          "links": []
        },
        {
          "id": "tech-w12-system-design-3",
          "category": "System Design",
          "title": "Run a realistic full-loop simulation",
          "detail": "Coding, design, technical depth, and behavioral sessions with breaks and written feedback.",
          "links": []
        },
        {
          "id": "tech-w12-behavioral-4",
          "category": "Behavioral",
          "title": "Create interview-day plan",
          "detail": "Confirm logistics, environment, sleep, meals, materials, timing, and recovery between sessions.",
          "links": []
        },
        {
          "id": "tech-w12-behavioral-5",
          "category": "Behavioral",
          "title": "Taper and rest",
          "detail": "Stop heavy preparation 24 hours before the interview; use only light recall and confidence review.",
          "links": []
        }
      ]
    },
    {
      "number": 13,
      "theme": "Airbnb-tagged DSA + LLD: search & availability",
      "outcome": "Mirror what Airbnb and DoorDash actually test. Company-tagged DSA, deeper HLD, LLD for marketplace systems, timed machine coding, and behavioral STAR story preparation.",
      "resources": [
        {
          "label": "Airbnb Engineering Blog",
          "url": "https://medium.com/airbnb-engineering"
        },
        {
          "label": "System Design Primer",
          "url": "https://github.com/donnemartin/system-design-primer"
        },
        {
          "label": "Grokking System Design",
          "url": "https://www.designgurus.io/course/grokking-the-system-design-interview"
        }
      ],
      "tasks": [
        {
          "id": "tech-w13-dsa-1",
          "category": "DSA",
          "title": "Airbnb calendar booking",
          "detail": "My Calendar I, My Calendar II, Job Scheduling",
          "links": [
            {
              "t": "lc",
              "label": "LC #729 My Calendar I",
              "url": "https://leetcode.com/problems/my-calendar-i/"
            },
            {
              "t": "lc",
              "label": "LC #731 My Calendar II",
              "url": "https://leetcode.com/problems/my-calendar-ii/"
            },
            {
              "t": "lc",
              "label": "LC #1235 Job Scheduling",
              "url": "https://leetcode.com/problems/maximum-profit-in-job-scheduling/"
            }
          ]
        },
        {
          "id": "tech-w13-dsa-2",
          "category": "DSA",
          "title": "OOP design problem",
          "detail": "Design an in-memory key-value store with TTL expiry",
          "links": [
            {
              "t": "gh",
              "label": "Cache LLD",
              "url": "https://github.com/ashishps1/awesome-low-level-design/blob/main/problems/cache.md"
            }
          ]
        },
        {
          "id": "tech-w13-lld-1",
          "category": "LLD",
          "title": "Design Airbnb search system",
          "detail": "Property, SearchFilter, RankingEngine, AvailabilityCalendar — Strategy pattern for ranking criteria",
          "links": [
            {
              "t": "gh",
              "label": "awesome-low-level-design",
              "url": "https://github.com/ashishps1/awesome-low-level-design"
            },
            {
              "t": "ref",
              "label": "Airbnb Engineering Blog",
              "url": "https://medium.com/airbnb-engineering"
            }
          ]
        },
        {
          "id": "tech-w13-lld-2",
          "category": "LLD",
          "title": "Key",
          "detail": "how does RankingEngine rank listings? Use Strategy pattern for ranking criteria",
          "links": [
            {
              "t": "ref",
              "label": "Strategy pattern — Refactoring.Guru",
              "url": "https://refactoring.guru/design-patterns/strategy"
            },
            {
              "t": "ref",
              "label": "Ranking algorithms for search",
              "url": "https://medium.com/airbnb-engineering/search-ranking-at-airbnb-f1570f6c8f8b"
            }
          ]
        },
        {
          "id": "tech-w13-system-design-1",
          "category": "System Design",
          "title": "System Design (1.5hr)",
          "detail": "Airbnb search & listing — availability, geo-search, caching, ranking, idempotent booking",
          "links": [
            {
              "t": "ref",
              "label": "ByteByteGo — Hotel Reservation",
              "url": "https://bytebytego.com/courses/system-design-interview/design-a-hotel-reservation-system"
            },
            {
              "t": "ref",
              "label": "Airbnb Engineering — Search Ranking",
              "url": "https://medium.com/airbnb-engineering/search-ranking-at-airbnb-f1570f6c8f8b"
            }
          ]
        }
      ]
    },
    {
      "number": 14,
      "theme": "DoorDash-tagged DSA + machine coding: order system",
      "outcome": "Mirror what Airbnb and DoorDash actually test. Company-tagged DSA, deeper HLD, LLD for marketplace systems, timed machine coding, and behavioral STAR story preparation.",
      "resources": [
        {
          "label": "DoorDash Engineering Blog",
          "url": "https://doordash.engineering/"
        },
        {
          "label": "ByteByteGo",
          "url": "https://bytebytego.com"
        },
        {
          "label": "Kafka Documentation",
          "url": "https://kafka.apache.org/documentation/"
        }
      ],
      "tasks": [
        {
          "id": "tech-w14-dsa-1",
          "category": "DSA",
          "title": "Graphs & routing",
          "detail": "Network Delay Time (Dijkstra), Cheapest Flights Within K Stops, Find the City",
          "links": [
            {
              "t": "lc",
              "label": "LC #743 Network Delay Time",
              "url": "https://leetcode.com/problems/network-delay-time/"
            },
            {
              "t": "lc",
              "label": "LC #787 Cheapest Flights",
              "url": "https://leetcode.com/problems/cheapest-flights-within-k-stops/"
            },
            {
              "t": "lc",
              "label": "LC #1334 Find the City",
              "url": "https://leetcode.com/problems/find-the-city-with-the-smallest-number-of-neighbors-at-a-threshold-distance/"
            }
          ]
        },
        {
          "id": "tech-w14-dsa-2",
          "category": "DSA",
          "title": "Must-know cold",
          "detail": "LRU Cache #146 — solve in under 25 min without hints. Also Find Median from Data Stream",
          "links": [
            {
              "t": "lc",
              "label": "LC #295 Find Median from Stream",
              "url": "https://leetcode.com/problems/find-median-from-data-stream/"
            }
          ]
        },
        {
          "id": "tech-w14-machine-coding-1",
          "category": "Machine Coding",
          "title": "Build simplified DoorDash order management in 75 min",
          "detail": "Order, Restaurant, Driver, Dispatcher — Observer for status, Strategy for driver assignment",
          "links": [
            {
              "t": "gh",
              "label": "Food Delivery LLD reference",
              "url": "https://github.com/ashishps1/awesome-low-level-design/blob/main/problems/food-delivery-service.md"
            },
            {
              "t": "ref",
              "label": "DoorDash Engineering Blog",
              "url": "https://doordash.engineering/"
            }
          ]
        },
        {
          "id": "tech-w14-machine-coding-2",
          "category": "Machine Coding",
          "title": "Add real-time status updates via Observer pattern; implement driver assignment via Strategy",
          "detail": "",
          "links": [
            {
              "t": "ref",
              "label": "Observer pattern — Refactoring.Guru",
              "url": "https://refactoring.guru/design-patterns/observer"
            },
            {
              "t": "ref",
              "label": "Strategy pattern — Refactoring.Guru",
              "url": "https://refactoring.guru/design-patterns/strategy"
            }
          ]
        },
        {
          "id": "tech-w14-system-design-1",
          "category": "System Design",
          "title": "System Design (1.5hr)",
          "detail": "DoorDash delivery dispatch — driver matching, Kafka event stream, ETA prediction, surge pricing",
          "links": [
            {
              "t": "ref",
              "label": "DoorDash — How we scaled order dispatch",
              "url": "https://doordash.engineering/2020/09/02/optimizing-real-time-last-mile-delivery/"
            },
            {
              "t": "ref",
              "label": "ByteByteGo — Ride Sharing Design",
              "url": "https://bytebytego.com/courses/system-design-interview/design-a-ride-sharing-service"
            }
          ]
        }
      ]
    },
    {
      "number": 15,
      "theme": "Hard DSA + mock interviews + code review",
      "outcome": "Mirror what Airbnb and DoorDash actually test. Company-tagged DSA, deeper HLD, LLD for marketplace systems, timed machine coding, and behavioral STAR story preparation.",
      "resources": [
        {
          "label": "Interviewing.io",
          "url": "https://interviewing.io"
        },
        {
          "label": "Google Code Review Guide",
          "url": "https://google.github.io/eng-practices/review/"
        },
        {
          "label": "ByteByteGo",
          "url": "https://bytebytego.com"
        }
      ],
      "tasks": [
        {
          "id": "tech-w15-dsa-1",
          "category": "DSA",
          "title": "3 hard problems — partial solution + clear verbal communication scores well at senior level",
          "detail": "",
          "links": []
        },
        {
          "id": "tech-w15-mock-interview-1",
          "category": "Mock Interview",
          "title": "2 full DSA mocks on Interviewing.io — ask for written feedback on communication specifically",
          "detail": "",
          "links": [
            {
              "t": "ref",
              "label": "Interviewing.io (free sessions)",
              "url": "https://interviewing.io"
            }
          ]
        },
        {
          "id": "tech-w15-code-review-1",
          "category": "Code Review",
          "title": "Review a Spring Boot microservice on GitHub",
          "detail": "REST design, exception handling, DB transactions, Kafka patterns",
          "links": [
            {
              "t": "gh",
              "label": "Spring Kafka reference",
              "url": "https://github.com/spring-projects/spring-kafka"
            },
            {
              "t": "gh",
              "label": "Spring Boot microservice example",
              "url": "https://github.com/rohitghatol/spring-boot-microservices"
            }
          ]
        },
        {
          "id": "tech-w15-code-review-2",
          "category": "Code Review",
          "title": "Write a PR review document as if reviewing a junior's code — practice tone expected of a Tech Lead",
          "detail": "",
          "links": [
            {
              "t": "ref",
              "label": "Google Code Review Guide",
              "url": "https://google.github.io/eng-practices/review/reviewer/"
            },
            {
              "t": "ref",
              "label": "Conventional Comments",
              "url": "https://conventionalcomments.org/"
            }
          ]
        },
        {
          "id": "tech-w15-system-design-1",
          "category": "System Design",
          "title": "System Design (1.5hr)",
          "detail": "Design a Notification Service + Rate Limiter",
          "links": [
            {
              "t": "ref",
              "label": "ByteByteGo — Rate Limiter",
              "url": "https://bytebytego.com/courses/system-design-interview/design-a-rate-limiter"
            },
            {
              "t": "ref",
              "label": "ByteByteGo — Notification System",
              "url": "https://bytebytego.com/courses/system-design-interview/design-a-notification-system"
            }
          ]
        }
      ]
    },
    {
      "number": 16,
      "theme": "Behavioral + LLD: payment system",
      "outcome": "Mirror what Airbnb and DoorDash actually test. Company-tagged DSA, deeper HLD, LLD for marketplace systems, timed machine coding, and behavioral STAR story preparation.",
      "resources": [
        {
          "label": "Stripe Engineering Blog",
          "url": "https://stripe.com/blog"
        },
        {
          "label": "ByteByteGo — Payment",
          "url": "https://bytebytego.com/courses/system-design-interview/design-a-payment-system"
        },
        {
          "label": "STAR method",
          "url": "https://www.indeed.com/career-advice/interviewing/how-to-use-the-star-interview-response-technique"
        }
      ],
      "tasks": [
        {
          "id": "tech-w16-behavioral-1",
          "category": "Behavioral",
          "title": "Write all 8 STAR stories",
          "detail": "migrations, incidents, mentoring, conflict, ownership, failure, cross-team, delivery under pressure",
          "links": [
            {
              "t": "ref",
              "label": "STAR method guide",
              "url": "https://www.indeed.com/career-advice/interviewing/how-to-use-the-star-interview-response-technique"
            },
            {
              "t": "ref",
              "label": "Airbnb interview values",
              "url": "https://careers.airbnb.com/"
            }
          ]
        },
        {
          "id": "tech-w16-behavioral-2",
          "category": "Behavioral",
          "title": "Practice each story out loud, record yourself — 90 seconds max per story with clear metrics",
          "detail": "",
          "links": [
            {
              "t": "ref",
              "label": "Pramp — Behavioral mock",
              "url": "https://www.pramp.com"
            }
          ]
        },
        {
          "id": "tech-w16-lld-1",
          "category": "LLD",
          "title": "Design a payment processing system",
          "detail": "PaymentRequest, PaymentProcessor, PaymentGateway, RefundHandler, IdempotencyKey",
          "links": [
            {
              "t": "gh",
              "label": "awesome-low-level-design",
              "url": "https://github.com/ashishps1/awesome-low-level-design"
            },
            {
              "t": "ref",
              "label": "Idempotency — Stripe Engineering",
              "url": "https://stripe.com/blog/idempotency"
            }
          ]
        },
        {
          "id": "tech-w16-lld-2",
          "category": "LLD",
          "title": "Key challenge",
          "detail": "idempotency — how do you prevent double charges? Implement idempotency key pattern",
          "links": [
            {
              "t": "ref",
              "label": "Idempotency key pattern",
              "url": "https://stripe.com/blog/idempotency"
            },
            {
              "t": "ref",
              "label": "Exactly-once semantics",
              "url": "https://en.wikipedia.org/wiki/Exactly-once_delivery"
            }
          ]
        },
        {
          "id": "tech-w16-system-design-1",
          "category": "System Design",
          "title": "System Design (1.5hr)",
          "detail": "Distributed payment system — splits, retry logic, idempotency, exactly-once semantics",
          "links": [
            {
              "t": "ref",
              "label": "Stripe Engineering Blog",
              "url": "https://stripe.com/blog/idempotency"
            },
            {
              "t": "ref",
              "label": "ByteByteGo — Payment System",
              "url": "https://bytebytego.com/courses/system-design-interview/design-a-payment-system"
            }
          ]
        }
      ]
    },
    {
      "number": 17,
      "theme": "Weak area DSA + LLD mock #1",
      "outcome": "2–3 mocks per week. LLD mocks added alongside DSA. Machine coding under real interview pressure. Fix weak spots. Start applying to warm-up companies now.",
      "resources": [
        {
          "label": "Interviewing.io",
          "url": "https://interviewing.io"
        },
        {
          "label": "awesome-low-level-design",
          "url": "https://github.com/ashishps1/awesome-low-level-design"
        },
        {
          "label": "AlgoMaster Blog",
          "url": "https://blog.algomaster.io/"
        }
      ],
      "tasks": [
        {
          "id": "tech-w17-dsa-1",
          "category": "DSA",
          "title": "Identify your #1 weakest pattern (typically DP or graphs) — spend the full week drilling it: 15 problems (10 medium, 5 hard)",
          "detail": "",
          "links": [
            {
              "t": "nc",
              "label": "Neetcode — DP",
              "url": "https://neetcode.io/problems/climbing-stairs"
            },
            {
              "t": "ref",
              "label": "AlgoMaster Newsletter",
              "url": "https://blog.algomaster.io/"
            }
          ]
        },
        {
          "id": "tech-w17-mock-interview-1",
          "category": "Mock Interview",
          "title": "2 full DSA mocks on Interviewing.io — ask specifically for feedback on communication, not just correctness",
          "detail": "",
          "links": [
            {
              "t": "ref",
              "label": "Interviewing.io",
              "url": "https://interviewing.io"
            }
          ]
        },
        {
          "id": "tech-w17-dsa-2",
          "category": "DSA",
          "title": "Cold LLD",
          "detail": "design Snake game or Tic-Tac-Toe from scratch in 60 min",
          "links": [
            {
              "t": "gh",
              "label": "Snake Game — awesome-lld",
              "url": "https://github.com/ashishps1/awesome-low-level-design/blob/main/problems/snake-and-ladder-game.md"
            },
            {
              "t": "gh",
              "label": "Tic-Tac-Toe — awesome-lld",
              "url": "https://github.com/ashishps1/awesome-low-level-design/blob/main/problems/tic-tac-toe.md"
            }
          ]
        },
        {
          "id": "tech-w17-dsa-3",
          "category": "DSA",
          "title": "Debrief",
          "detail": "were classes cohesive? Design patterns applied correctly? Extensible to new requirements?",
          "links": [
            {
              "t": "gh",
              "label": "awesome-low-level-design",
              "url": "https://github.com/ashishps1/awesome-low-level-design"
            }
          ]
        },
        {
          "id": "tech-w17-system-design-1",
          "category": "System Design",
          "title": "System design mock",
          "detail": "present a full design for 45 min without notes — have a friend ask questions",
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
        }
      ]
    },
    {
      "number": 18,
      "theme": "Weak area #2 + machine coding: Splitwise",
      "outcome": "2–3 mocks per week. LLD mocks added alongside DSA. Machine coding under real interview pressure. Fix weak spots. Start applying to warm-up companies now.",
      "resources": [
        {
          "label": "Clean Code — Robert Martin",
          "url": "https://www.oreilly.com/library/view/clean-code-a/9780136083238/"
        },
        {
          "label": "awesome-low-level-design",
          "url": "https://github.com/ashishps1/awesome-low-level-design"
        }
      ],
      "tasks": [
        {
          "id": "tech-w18-dsa-1",
          "category": "DSA",
          "title": "Weak area #2 (typically backtracking or bit manipulation) — drill 10+ problems",
          "detail": "",
          "links": [
            {
              "t": "nc",
              "label": "Neetcode — Backtracking",
              "url": "https://neetcode.io/problems/combination-target-sum"
            },
            {
              "t": "nc",
              "label": "Neetcode — Bit Manipulation",
              "url": "https://neetcode.io/problems/single-number"
            }
          ]
        },
        {
          "id": "tech-w18-machine-coding-1",
          "category": "Machine Coding",
          "title": "Build Splitwise expense splitter in 75 min",
          "detail": "Group, Expense, Settlement, Balance — handle equal/percentage/exact splits",
          "links": [
            {
              "t": "gh",
              "label": "Splitwise LLD — awesome-lld",
              "url": "https://github.com/ashishps1/awesome-low-level-design/blob/main/problems/splitwise.md"
            }
          ]
        },
        {
          "id": "tech-w18-machine-coding-2",
          "category": "Machine Coding",
          "title": "Debrief",
          "detail": "clean APIs? Proper encapsulation? No god classes? Would a Tech Lead approve this PR?",
          "links": [
            {
              "t": "ref",
              "label": "Refactoring best practices",
              "url": "https://refactoring.guru/refactoring"
            }
          ]
        },
        {
          "id": "tech-w18-code-review-1",
          "category": "Code Review",
          "title": "Review your own Splitwise code 24 hrs later — find issues with fresh eyes",
          "detail": "",
          "links": [
            {
              "t": "ref",
              "label": "Google Code Review Guide",
              "url": "https://google.github.io/eng-practices/review/reviewer/"
            }
          ]
        },
        {
          "id": "tech-w18-behavioral-1",
          "category": "Behavioral",
          "title": "Refine your 3 best STAR stories into polished 90-second narratives — time them with a stopwatch",
          "detail": "",
          "links": [
            {
              "t": "ref",
              "label": "Pramp — Behavioral mock",
              "url": "https://www.pramp.com"
            }
          ]
        }
      ]
    },
    {
      "number": 19,
      "theme": "Full loop simulation #1",
      "outcome": "2–3 mocks per week. LLD mocks added alongside DSA. Machine coding under real interview pressure. Fix weak spots. Start applying to warm-up companies now.",
      "resources": [
        {
          "label": "ByteByteGo — Chat System",
          "url": "https://bytebytego.com/courses/system-design-interview/design-a-chat-system"
        },
        {
          "label": "Glassdoor — Airbnb SE",
          "url": "https://www.glassdoor.com/Interview/Airbnb-Software-Engineer-Interview-Questions-EI_IE391850.0,6_KO7,24.htm"
        }
      ],
      "tasks": [
        {
          "id": "tech-w19-mock-interview-1",
          "category": "Mock Interview",
          "title": "Simulate complete interview in one sitting",
          "detail": "DSA (35 min) → LLD (45 min) → HLD (45 min) → Behavioral (20 min)",
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
          "id": "tech-w19-behavioral-1",
          "category": "Behavioral",
          "title": "Submit to 5 warm-up companies",
          "detail": "Stripe, Lyft, Pinterest, Robinhood, Twilio",
          "links": [
            {
              "t": "ref",
              "label": "Levels.fyi salary research",
              "url": "https://www.levels.fyi"
            },
            {
              "t": "ref",
              "label": "Blind (interview reports)",
              "url": "https://www.teamblind.com"
            }
          ]
        },
        {
          "id": "tech-w19-system-design-1",
          "category": "System Design",
          "title": "System Design (1.5hr)",
          "detail": "Design a real-time chat system (Slack/WhatsApp scale)",
          "links": [
            {
              "t": "ref",
              "label": "ByteByteGo — Chat System",
              "url": "https://bytebytego.com/courses/system-design-interview/design-a-chat-system"
            },
            {
              "t": "gh",
              "label": "System Design Primer",
              "url": "https://github.com/donnemartin/system-design-primer"
            }
          ]
        },
        {
          "id": "tech-w19-lld-1",
          "category": "LLD",
          "title": "Design a Notification System",
          "detail": "NotificationService, Channel (Email/SMS/Push), TemplateEngine, DeliveryTracker",
          "links": [
            {
              "t": "gh",
              "label": "Notification System LLD",
              "url": "https://github.com/ashishps1/awesome-low-level-design/blob/main/problems/notification-service.md"
            }
          ]
        },
        {
          "id": "tech-w19-code-review-1",
          "category": "Code Review",
          "title": "Review an open-source Kafka consumer project — error handling, retry, dead letter queue patterns",
          "detail": "",
          "links": [
            {
              "t": "gh",
              "label": "Spring Kafka DLQ patterns",
              "url": "https://github.com/spring-projects/spring-kafka"
            },
            {
              "t": "ref",
              "label": "Kafka DLQ — Confluent",
              "url": "https://www.confluent.io/blog/kafka-connect-deep-dive-error-handling-dead-letter-queues/"
            }
          ]
        }
      ]
    },
    {
      "number": 20,
      "theme": "Full loop simulation #2 + apply to targets",
      "outcome": "2–3 mocks per week. LLD mocks added alongside DSA. Machine coding under real interview pressure. Fix weak spots. Start applying to warm-up companies now.",
      "resources": [
        {
          "label": "ByteByteGo Vol 2",
          "url": "https://bytebytego.com"
        },
        {
          "label": "Levels.fyi",
          "url": "https://www.levels.fyi"
        },
        {
          "label": "Blind",
          "url": "https://www.teamblind.com"
        }
      ],
      "tasks": [
        {
          "id": "tech-w20-mock-interview-1",
          "category": "Mock Interview",
          "title": "Full loop simulation #2 — improve specifically on timing and communication gaps from Week 19",
          "detail": "",
          "links": [
            {
              "t": "ref",
              "label": "Interviewing.io",
              "url": "https://interviewing.io"
            }
          ]
        },
        {
          "id": "tech-w20-behavioral-1",
          "category": "Behavioral",
          "title": "Submit to Airbnb, DoorDash, Uber, Lyft — have tailored resume and cover letter ready",
          "detail": "",
          "links": [
            {
              "t": "ref",
              "label": "Airbnb Careers",
              "url": "https://careers.airbnb.com/"
            },
            {
              "t": "ref",
              "label": "DoorDash Careers",
              "url": "https://careers.doordash.com/"
            },
            {
              "t": "ref",
              "label": "Levels.fyi comp",
              "url": "https://www.levels.fyi"
            }
          ]
        },
        {
          "id": "tech-w20-machine-coding-1",
          "category": "Machine Coding",
          "title": "Build simplified Twitter timeline (in-memory) in 75 min",
          "detail": "Tweet, User, Feed, FollowGraph",
          "links": [
            {
              "t": "gh",
              "label": "Twitter/Instagram LLD reference",
              "url": "https://github.com/ashishps1/awesome-low-level-design/blob/main/problems/twitter.md"
            }
          ]
        },
        {
          "id": "tech-w20-system-design-1",
          "category": "System Design",
          "title": "System Design (1.5hr)",
          "detail": "Design a video streaming platform — CDN, chunked upload, adaptive bitrate",
          "links": [
            {
              "t": "ref",
              "label": "ByteByteGo — YouTube Design",
              "url": "https://bytebytego.com/courses/system-design-interview/design-youtube"
            },
            {
              "t": "ref",
              "label": "Netflix Tech Blog",
              "url": "https://netflixtechblog.com/"
            }
          ]
        },
        {
          "id": "tech-w20-behavioral-2",
          "category": "Behavioral",
          "title": "Compile your cheat sheet",
          "detail": "10 DSA patterns + 5 LLD patterns + top 5 HLD building blocks",
          "links": [
            {
              "t": "ref",
              "label": "AlgoMaster — 20 DSA Patterns",
              "url": "https://blog.algomaster.io/p/20-dsa-patterns"
            },
            {
              "t": "gh",
              "label": "System Design Primer",
              "url": "https://github.com/donnemartin/system-design-primer"
            }
          ]
        }
      ]
    },
    {
      "number": 21,
      "theme": "Full revision sprint — DSA + LLD + Leadership, product sense & influence",
      "outcome": "Revise more than you learn new things. Live interviews are happening. Lead with your 14 years of system design depth — it's your biggest differentiator over junior candidates.",
      "resources": [
        {
          "label": "awesome-low-level-design",
          "url": "https://github.com/ashishps1/awesome-low-level-design"
        },
        {
          "label": "Neetcode Roadmap",
          "url": "https://neetcode.io/roadmap"
        },
        {
          "label": "Managing Humans — Leadership reading",
          "url": "https://hbr.org/"
        }
      ],
      "tasks": [
        {
          "id": "tech-w21-dsa-1",
          "category": "DSA",
          "title": "Redo every problem you marked wrong in months 1–4 — aim 50+ problems, under 20 min each without hints",
          "detail": "",
          "links": [
            {
              "t": "nc",
              "label": "Neetcode Roadmap (review mode)",
              "url": "https://neetcode.io/roadmap"
            },
            {
              "t": "ref",
              "label": "AlgoMaster spaced repetition",
              "url": "https://algomaster.io/"
            }
          ]
        },
        {
          "id": "tech-w21-lld-1",
          "category": "LLD",
          "title": "Redo your 3 weakest designs from scratch without notes, timed at 45 min each",
          "detail": "",
          "links": [
            {
              "t": "gh",
              "label": "awesome-low-level-design",
              "url": "https://github.com/ashishps1/awesome-low-level-design"
            },
            {
              "t": "gh",
              "label": "low-level-design-primer",
              "url": "https://github.com/prasadgujar/low-level-design-primer"
            }
          ]
        },
        {
          "id": "tech-w21-lld-2",
          "category": "LLD",
          "title": "Must be solid cold",
          "detail": "Parking Lot, Ride Sharing, BookMyShow, LRU Cache, Rate Limiter, Notification System",
          "links": [
            {
              "t": "gh",
              "label": "awesome-lld — all problems",
              "url": "https://github.com/ashishps1/awesome-low-level-design"
            }
          ]
        },
        {
          "id": "tech-w21-code-review-1",
          "category": "Code Review",
          "title": "Final review of all machine coding projects — would you approve this as a Tech Lead?",
          "detail": "",
          "links": [
            {
              "t": "ref",
              "label": "Google Code Review Guide",
              "url": "https://google.github.io/eng-practices/review/reviewer/"
            }
          ]
        },
        {
          "id": "tech-w21-behavioral-1",
          "category": "Behavioral",
          "title": "Update resume — add any new skills, tools, or AI/RAG projects completed during prep",
          "detail": "",
          "links": [
            {
              "t": "ref",
              "label": "Levels.fyi — resume tips",
              "url": "https://www.levels.fyi"
            }
          ]
        },
        {
          "id": "tech-w21-leadership-1",
          "category": "Leadership",
          "title": "Prepare 6–8 stories showing technical leadership",
          "detail": "owning a roadmap, cross-team collaboration, technical vision, major tradeoffs, de-risking projects",
          "links": [
            {
              "t": "ref",
              "label": "Crafting leadership stories",
              "url": "https://www.linkedin.com/pulse/how-tell-your-leadership-story-interviews/"
            }
          ]
        },
        {
          "id": "tech-w21-leadership-2",
          "category": "Leadership",
          "title": "Practice 10 product-design prompts",
          "detail": "tradeoffs, metrics (North Star), experiments and launch criteria",
          "links": [
            {
              "t": "ref",
              "label": "Product sense guide",
              "url": "https://www.producttalk.org/"
            }
          ]
        },
        {
          "id": "tech-w21-leadership-3",
          "category": "Leadership",
          "title": "Run mock architecture reviews with PM/Design stakeholders — focus on tradeoffs, timelines, and risk",
          "detail": "",
          "links": [
            {
              "t": "ref",
              "label": "How to run an architecture review",
              "url": "https://martinfowler.com/articles/architecture-review.html"
            }
          ]
        }
      ]
    },
    {
      "number": 22,
      "theme": "Company research + final mocks + Advanced distributed systems & algorithms",
      "outcome": "Revise more than you learn new things. Live interviews are happening. Lead with your 14 years of system design depth — it's your biggest differentiator over junior candidates.",
      "resources": [
        {
          "label": "Airbnb Engineering Blog",
          "url": "https://medium.com/airbnb-engineering"
        },
        {
          "label": "DoorDash Engineering Blog",
          "url": "https://doordash.engineering/"
        },
        {
          "label": "Tech Interview Handbook",
          "url": "https://www.techinterviewhandbook.org/"
        },
        {
          "label": "Designing Data-Intensive Applications",
          "url": "https://dataintensive.net/"
        }
      ],
      "tasks": [
        {
          "id": "tech-w22-behavioral-1",
          "category": "Behavioral",
          "title": "Airbnb",
          "detail": "microservices migration, pricing engine, host guarantee system, search ranking",
          "links": [
            {
              "t": "ref",
              "label": "Airbnb Engineering Blog",
              "url": "https://medium.com/airbnb-engineering"
            },
            {
              "t": "ref",
              "label": "Airbnb — Search Ranking post",
              "url": "https://medium.com/airbnb-engineering/search-ranking-at-airbnb-f1570f6c8f8b"
            }
          ]
        },
        {
          "id": "tech-w22-behavioral-2",
          "category": "Behavioral",
          "title": "DoorDash",
          "detail": "real-time logistics, ML for ETA, merchant growth platform, DashPass architecture",
          "links": [
            {
              "t": "ref",
              "label": "DoorDash Engineering Blog",
              "url": "https://doordash.engineering/"
            },
            {
              "t": "ref",
              "label": "DoorDash — Order Dispatch post",
              "url": "https://doordash.engineering/2020/09/02/optimizing-real-time-last-mile-delivery/"
            }
          ]
        },
        {
          "id": "tech-w22-mock-interview-1",
          "category": "Mock Interview",
          "title": "3 full mock interviews — simulate exact format of your target company (check Glassdoor for recent loop reports)",
          "detail": "",
          "links": [
            {
              "t": "ref",
              "label": "Interviewing.io",
              "url": "https://interviewing.io"
            },
            {
              "t": "ref",
              "label": "Glassdoor — Airbnb SE",
              "url": "https://www.glassdoor.com/Interview/Airbnb-Software-Engineer-Interview-Questions-EI_IE391850.0,6_KO7,24.htm"
            }
          ]
        },
        {
          "id": "tech-w22-mock-interview-2",
          "category": "Mock Interview",
          "title": "Cold LLD",
          "detail": "design a Logging Framework or Distributed Job Scheduler in 45 min",
          "links": [
            {
              "t": "gh",
              "label": "Logging Framework — awesome-lld",
              "url": "https://github.com/ashishps1/awesome-low-level-design/blob/main/problems/logging-framework.md"
            }
          ]
        },
        {
          "id": "tech-w22-behavioral-3",
          "category": "Behavioral",
          "title": "Prepare 3 sharp technical questions to ask your interviewer — signals seniority and curiosity",
          "detail": "",
          "links": [
            {
              "t": "ref",
              "label": "Questions to ask in interviews",
              "url": "https://www.techinterviewhandbook.org/final-questions/"
            }
          ]
        },
        {
          "id": "tech-w22-system-design-1",
          "category": "System Design",
          "title": "Consensus",
          "detail": "Raft vs Paxos — leader election, log replication, membership changes",
          "links": [
            {
              "t": "ref",
              "label": "Raft paper/explainers",
              "url": "https://raft.github.io/"
            },
            {
              "t": "ref",
              "label": "Paxos overview",
              "url": "https://lamport.azurewebsites.net/pubs/paxos-simple.pdf"
            }
          ]
        },
        {
          "id": "tech-w22-system-design-2",
          "category": "System Design",
          "title": "Consistency models",
          "detail": "strong vs eventual, CRDTs, causal consistency, distributed transactions and sagas",
          "links": [
            {
              "t": "ref",
              "label": "Consistency models",
              "url": "https://queue.acm.org/detail.cfm?id=3321618"
            }
          ]
        },
        {
          "id": "tech-w22-system-design-3",
          "category": "System Design",
          "title": "Sharding, partitioning, indexing strategies and hotspot mitigation; capacity planning exercises",
          "detail": "",
          "links": [
            {
              "t": "ref",
              "label": "Scaling databases guide",
              "url": "https://www.cockroachlabs.com/blog/"
            }
          ]
        }
      ]
    },
    {
      "number": 23,
      "theme": "Live interviews — stay sharp + Observability, SRE & incident response",
      "outcome": "Revise more than you learn new things. Live interviews are happening. Lead with your 14 years of system design depth — it's your biggest differentiator over junior candidates.",
      "resources": [
        {
          "label": "Levels.fyi",
          "url": "https://www.levels.fyi"
        },
        {
          "label": "Blind",
          "url": "https://www.teamblind.com"
        },
        {
          "label": "USCIS H1B info",
          "url": "https://www.uscis.gov/working-in-the-united-states/h-1b-specialty-occupations"
        },
        {
          "label": "Google SRE Book",
          "url": "https://landing.google.com/sre/book.html"
        },
        {
          "label": "OpenTelemetry",
          "url": "https://opentelemetry.io/"
        }
      ],
      "tasks": [
        {
          "id": "tech-w23-dsa-1",
          "category": "DSA",
          "title": "1 problem per day to stay sharp — only confident patterns, no new hard problems",
          "detail": "",
          "links": [
            {
              "t": "ref",
              "label": "Leetcode Daily Challenge",
              "url": "https://leetcode.com/problemset/"
            },
            {
              "t": "nc",
              "label": "Neetcode Roadmap",
              "url": "https://neetcode.io/roadmap"
            }
          ]
        },
        {
          "id": "tech-w23-machine-coding-1",
          "category": "Machine Coding",
          "title": "1 machine coding round per week during active interviews — keep muscle memory fresh",
          "detail": "",
          "links": [
            {
              "t": "gh",
              "label": "awesome-lld — all problems",
              "url": "https://github.com/ashishps1/awesome-low-level-design"
            }
          ]
        },
        {
          "id": "tech-w23-behavioral-1",
          "category": "Behavioral",
          "title": "After each real interview",
          "detail": "write down immediately what you froze on, what landed well",
          "links": [
            {
              "t": "ref",
              "label": "Blind — interview debriefs",
              "url": "https://www.teamblind.com"
            }
          ]
        },
        {
          "id": "tech-w23-behavioral-2",
          "category": "Behavioral",
          "title": "Practice explaining your Kafka/RAG pipeline/AWS architecture in 5-min interview-friendly format",
          "detail": "",
          "links": [
            {
              "t": "ref",
              "label": "ByteByteGo — distributed systems vocabulary",
              "url": "https://bytebytego.com"
            }
          ]
        },
        {
          "id": "tech-w23-behavioral-3",
          "category": "Behavioral",
          "title": "Check Levels.fyi for Airbnb/DoorDash Senior/Staff comp before any offer conversations",
          "detail": "",
          "links": [
            {
              "t": "ref",
              "label": "Levels.fyi — Airbnb",
              "url": "https://www.levels.fyi/companies/airbnb/salaries/software-engineer"
            },
            {
              "t": "ref",
              "label": "Levels.fyi — DoorDash",
              "url": "https://www.levels.fyi/companies/doordash/salaries/software-engineer"
            }
          ]
        },
        {
          "id": "tech-w23-system-design-1",
          "category": "System Design",
          "title": "SLIs/SLOs/SLAs",
          "detail": "define, measure, and set error budgets; simulate burn scenarios",
          "links": [
            {
              "t": "ref",
              "label": "Google SRE book — SLIs/SLOs",
              "url": "https://landing.google.com/sre/book.html"
            }
          ]
        },
        {
          "id": "tech-w23-system-design-2",
          "category": "System Design",
          "title": "Tracing/metrics/logging",
          "detail": "instrument a sample service, add dashboards and an on-call playbook",
          "links": [
            {
              "t": "ref",
              "label": "OpenTelemetry",
              "url": "https://opentelemetry.io/"
            }
          ]
        },
        {
          "id": "tech-w23-system-design-3",
          "category": "System Design",
          "title": "Run a tabletop incident postmortem",
          "detail": "RCA, blameless postmortem template, mitigation plan",
          "links": [
            {
              "t": "ref",
              "label": "Blameless postmortem guide",
              "url": "https://incident.io/blog/how-to-run-blameless-postmortems"
            }
          ]
        }
      ]
    },
    {
      "number": 24,
      "theme": "Mindset, offers & celebration + Security, compliance, networking & cost",
      "outcome": "Revise more than you learn new things. Live interviews are happening. Lead with your 14 years of system design depth — it's your biggest differentiator over junior candidates.",
      "resources": [
        {
          "label": "USCIS H1B",
          "url": "https://www.uscis.gov/working-in-the-united-states/h-1b-specialty-occupations"
        },
        {
          "label": "Blind — negotiation",
          "url": "https://www.teamblind.com"
        },
        {
          "label": "OWASP",
          "url": "https://owasp.org/"
        },
        {
          "label": "gRPC",
          "url": "https://grpc.io/"
        },
        {
          "label": "AWS Cost Optimization",
          "url": "https://aws.amazon.com/architecture/cost-optimization/"
        }
      ],
      "tasks": [
        {
          "id": "tech-w24-dsa-1",
          "category": "DSA",
          "title": "Light only",
          "detail": "1 easy/medium per day — no new hard problems, protect your confidence",
          "links": [
            {
              "t": "ref",
              "label": "Leetcode Daily",
              "url": "https://leetcode.com/problemset/"
            }
          ]
        },
        {
          "id": "tech-w24-behavioral-1",
          "category": "Behavioral",
          "title": "Final run",
          "detail": "all 8 STAR stories, timed out loud, as if in a real interview — record yourself",
          "links": [
            {
              "t": "ref",
              "label": "STAR method",
              "url": "https://www.indeed.com/career-advice/interviewing/how-to-use-the-star-interview-response-technique"
            }
          ]
        },
        {
          "id": "tech-w24-lld-1",
          "category": "LLD",
          "title": "Quick mental walkthrough of top 5 LLD designs — 10 min visualization only, no coding needed",
          "detail": "",
          "links": [
            {
              "t": "gh",
              "label": "awesome-low-level-design",
              "url": "https://github.com/ashishps1/awesome-low-level-design"
            }
          ]
        },
        {
          "id": "tech-w24-behavioral-2",
          "category": "Behavioral",
          "title": "Have immigration attorney on standby — H1B transfer paperwork can move fast once offer is received",
          "detail": "",
          "links": [
            {
              "t": "ref",
              "label": "USCIS H1B Transfer info",
              "url": "https://www.uscis.gov/working-in-the-united-states/h-1b-specialty-occupations"
            },
            {
              "t": "ref",
              "label": "Immi.com H1B Transfer Guide",
              "url": "https://www.immi.com/h1b/h1b-transfer.html"
            }
          ]
        },
        {
          "id": "tech-w24-behavioral-3",
          "category": "Behavioral",
          "title": "6 months of consistent multi-track senior-level preparation is a genuine achievement — own it",
          "detail": "",
          "links": []
        },
        {
          "id": "tech-w24-system-design-1",
          "category": "System Design",
          "title": "Threat modelling, OWASP top 10, secure design for payment and PII systems",
          "detail": "",
          "links": [
            {
              "t": "ref",
              "label": "OWASP Top 10",
              "url": "https://owasp.org/www-project-top-ten/"
            }
          ]
        },
        {
          "id": "tech-w24-system-design-2",
          "category": "System Design",
          "title": "TCP vs UDP, HTTP/2, gRPC, TLS basics, CDN and geo-replication tradeoffs",
          "detail": "",
          "links": [
            {
              "t": "ref",
              "label": "gRPC docs",
              "url": "https://grpc.io/docs/"
            }
          ]
        },
        {
          "id": "tech-w24-system-design-3",
          "category": "System Design",
          "title": "Cost optimization",
          "detail": "right-sizing, multi-region costs, caching vs compute tradeoffs — prepare a cost-aware design pitch",
          "links": [
            {
              "t": "ref",
              "label": "Cloud cost optimization",
              "url": "https://aws.amazon.com/architecture/cost-optimization/"
            }
          ]
        },
        {
          "id": "tech-w24-leadership-1",
          "category": "Leadership",
          "title": "Mock interview loop",
          "detail": "run 2 hiring panels (DSA+Design+Behavioral) — give written feedback and calibration notes",
          "links": [
            {
              "t": "ref",
              "label": "Interview calibration guide",
              "url": "https://recruitingdaily.com/interview-calibration/"
            }
          ]
        }
      ]
    }
  ]
};
