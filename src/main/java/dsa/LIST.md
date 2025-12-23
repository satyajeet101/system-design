# Contents
[Problem-To-Practice](#problem-to-practice)

## Problem-To-Practice
| Description               | URL                                                                             | Remark                            |
|---------------------------|---------------------------------------------------------------------------------|-----------------------------------|
| Container With most water | https://leetcode.com/problems/container-with-most-water/description/            |                                   |
| Trapping Rainwater        | https://leetcode.com/problems/trapping-rain-water/                              |                                   |
| Pair Sum 2                | https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/                 |                                   |
| Pair sum unsorted         | https://leetcode.com/problems/two-sum/                                          |                                   |
| Pair Sum Sorted rotated   | https://www.geeksforgeeks.org/problems/pair-sum-in-a-sorted-and-rotated-array/1 | [Logic](#Pair-Sum-Sorted-Rotated) |
| Check Monotonic           | https://leetcode.com/problems/monotonic-array/                                  |                                   |
| Find lonely               | https://leetcode.com/problems/find-all-lonely-numbers-in-the-array/             |                                   |
| Most frequent number      | https://leetcode.com/problems/most-frequent-number-following-key-in-an-array/   |                                   |
| 🔴 Beautiful Array        | https://leetcode.com/problems/beautiful-array/description/                      |                                   |

## Pair-Sum-Sorted-Rotated 
```java
    //Find Pivot point
    //Set left and right
    //And move left and right as below
    left = (left + len) % len;
    right = (right + len -1) % len;
```
