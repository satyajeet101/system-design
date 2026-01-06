# Content
[Queue](#Queue)

## Queue


| Description                                  | URL                                                                                               | Remark                            |
|----------------------------------------------|---------------------------------------------------------------------------------------------------|-----------------------------------|
| Implement Queue using Stacks                 | https://leetcode.com/problems/implement-queue-using-stacks/                                       |                                   |
| First Unique Character in a String           | https://leetcode.com/problems/first-unique-character-in-a-string/                                 | [Logic](#Concept)                 |
| 🔴 Interleave the First and second Half of Q | https://www.geeksforgeeks.org/problems/interleave-the-first-half-of-the-queue-with-second-half/1  |                                   |

#### Concept
- To make a frequency map of any char in string we can use
```java
int []arr = new int[26];
for(char c : s.toCharArray()){
    arr[c - 'a']++;
 }
```