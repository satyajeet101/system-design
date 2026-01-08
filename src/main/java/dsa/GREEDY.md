# Content
[Greedy](#Greedy)

## Greedy


| Description                | URL                                                                          | Remark                    |
|----------------------------|------------------------------------------------------------------------------|---------------------------|
| 🔴 Max no. of events       | https://leetcode.com/problems/maximum-number-of-events-that-can-be-attended/ |                           |
| Non-overlapping Intervals  | https://leetcode.com/problems/non-overlapping-intervals/description/         | [Logic](#Non-Overlapping) |

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
            return Integer.compare(a[1], b[1]);
        });
   ```