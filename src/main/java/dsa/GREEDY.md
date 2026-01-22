# Content
[Greedy](#Greedy)

## Greedy


| Description                                                          | URL                                                                                                                                                   | Remark                                            |
|----------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------|
| 🔴 Max no. of events                                                 | https://leetcode.com/problems/maximum-number-of-events-that-can-be-attended/                                                                          |                                                   |
| Non-overlapping Intervals                                            | https://leetcode.com/problems/non-overlapping-intervals/description/                                                                                  | [Logic](#Non-Overlapping)                         |
| 🔴 Maximum Units on a Truck (Fractional knapsack)                    | https://leetcode.com/problems/maximum-units-on-a-truck/description/                                                                                   |                                                   |
| 🔴 Minimum Absolute Sum Difference  </br>Minimum Absolute Difference | https://leetcode.com/problems/minimum-absolute-sum-difference/description/</br>https://leetcode.com/problems/minimum-absolute-difference/description/ |                                                   |
| Maximum Length of Pair Chain                                         | https://leetcode.com/problems/maximum-length-of-pair-chain/description/                                                                               | Take care to track the right element of each pair |
| 🔴 Job Sequencing Problem                                            | https://www.geeksforgeeks.org/problems/job-sequencing-problem-1587115620/1                                                                            |                                                   |
| 🔴 Minimum Cost to cut a board into squares                          | https://www.geeksforgeeks.org/problems/minimum-cost-to-cut-a-board-into-squares/1                                                                     |                                                   |
| 🔴 Split a String in Balanced Strings                                | https://leetcode.com/problems/split-a-string-in-balanced-strings/description/                                                                         |                                                   |
| 🔴 Kth largest odd number in a given range                           | https://www.geeksforgeeks.org/dsa/kth-largest-odd-number-in-a-given-range/                                                                            | Take care to track the right element of each pair |
| 🔴 Lexicographically smallest string of length N and sum K           | https://www.geeksforgeeks.org/dsa/lexicographically-smallest-string-of-length-n-and-sum-k/                                                            |                                                   |
| 🔴 Best Time to Buy and Sell Stock II                                | https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/description/                                                                         | Take care to track the right element of each pair |
| 🔴 Split Array Largest Sum                                           | https://leetcode.com/problems/split-array-largest-sum/description/                                                                                    |                                                   |

#### Non-Overlapping
- **Intuition**
  - As we want to maximize the work, we have to take the work which is finishing fast, i.e., sort the work based on the time it finishes.
- How to sort events = [[1,2],[2,3],[3,4]]

  | Requirement    | Lambda                                                    |
  | -------------- |-----------------------------------------------------------|
  | First col ↑    | `(a,b) -> Integer.compare(a[0], b[0])`  [1LSORT](#1LSORT) |
  | First col ↓    | `(a,b) -> Integer.compare(b[0], a[0])`                    |
  | Second col ↑   | `(a,b) -> Integer.compare(a[1], b[1])`                    |
  | Two-level sort | [2LSORT](#2LSORT)                                         |
    
  #### 1LSORT
    ```java
        Arrays.sort(arr, (a, b) -> Integer.compare(a[0], b[0])); //O(n log n)
    ```
  #### 2LSORT
    ```java
       Arrays.sort(arr, (a, b) -> {
            if (a[0] != b[0]) {
                return Integer.compare(a[0], b[0]);
            }
            return Integer.compare(b[1], a[1]);
        });
   ```