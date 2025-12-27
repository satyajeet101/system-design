# Contents
[ArrayList](#ArrayList) | [LinkedList](#LinkedList)

## ArrayList

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

#### Pair-Sum-Sorted-Rotated 
```java
    //Find Pivot point
    //Set left and right
    //And move left and right as below
    left = (left + len) % len;
    right = (right + len -1) % len;
```

## LinkedList


| Description                                   | URL                                                   | Remark                 |
|-----------------------------------------------|-------------------------------------------------------|------------------------|
| Reverse LL                                    | https://leetcode.com/problems/reverse-linked-list/    | [Logic](#Reverse-A-LL) |
| Check Palindrome                              | https://leetcode.com/problems/palindrome-linked-list/ | [Mid Node](#Mid-Node)  |
| Detect Cycle                                  | https://leetcode.com/problems/linked-list-cycle/      | [Logic](#Cycle)        |
| Detect position of cycle                      | https://leetcode.com/problems/linked-list-cycle-ii/   | [Logic](#Cycle-Pos)    |
| Remove Cycle                                  |                                                       |                        |
| Zig Zag                                       |                                                       |                        |
| Reverse a Doubly LL                           |                                                       |                        |
| Intersection of Two Linked Lists              |                                                       |                        |
| Delete N Nodes After M Nodes of a Linked List |                                                       |                        |
| Swap nodes for two given keys.                |                                                       |                        |
| All even numbers appear before all the odd    |                                                       |                        |
| Merge k Sorted Lists, print the sorted output |                                                       |                        |


#### Reverse-A-LL

```java
//3 variables 4 steps
        ListNode prev = null;
        ListNode curr = head;
        ListNode next;
        while(curr != null){
            next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }
        head = prev;
        return head;
```

#### Mid-Node

```java
public ListNode getMid(ListNode currHead){
        ListNode slow = currHead;
        ListNode fast = currHead;
        while(fast != null && fast.next != null){
            fast = fast.next.next;
            slow = slow.next;
        }
        return slow;
    }
```

#### Cycle

```java
public boolean hasCycle(ListNode head) {
    ListNode slow = head;
    ListNode fast = head;
    while(fast != null && fast.next != null){
        slow = slow.next;
        fast = fast.next.next;
        if(slow == fast){
            return true;
        }
    }
    return false;
}
```

#### Cycle-Pos
```java
            if(slow == fast){ //Cycle Exist
                // Reset slow pointer to head
                slow = head;
                while(slow != fast){
                    slow = slow.next;
                    fast = fast.next;
                }
                return slow; // Point of cycle
            }
```