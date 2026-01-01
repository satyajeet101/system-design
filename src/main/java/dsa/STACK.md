# Contents
[Stack](#Stack)

## Stack

| Description                                                                           | URL                                                                                                                                     | Remark                                                      |
|---------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------|
| Insert at bottom                                                                      | https://www.geeksforgeeks.org/problems/insert-an-element-at-the-bottom-of-a-stack/1                                                     | Try to think of: </br> ```TC: O(n)``` </br>```SC: O(1)```   |
| Reverse string                                                                        | https://leetcode.com/problems/reverse-string/                                                                                           | Use Recursion and than call push at bottom                  |
| Reverse stack                                                                         | https://www.geeksforgeeks.org/problems/reverse-a-stack/1                                                                                |                                                             |
| Stock span                                                                            | https://www.geeksforgeeks.org/problems/stock-span-problem-1587115621/1                                                                  | [Logic](#Stock-Span)                                        |
| Next greater Right</br>Next greater Left</br>Next smaller Right</br>Next smaller left | https://www.geeksforgeeks.org/problems/next-larger-element-1587115620/1                                                                 | [Logic](#Next-Greater)                                      |
| Valid Parentheses                                                                     | https://leetcode.com/problems/valid-parentheses/description/                                                                            |                                                             |
| 🔴 Redundant Parentheses                                                              | https://www.geeksforgeeks.org/problems/redundant-parenthesis--170647/1 </br>  https://leetcode.com/problems/remove-invalid-parentheses/ |                                                             |
| 🔴 Largest Rectangle in Histogram                                                     | https://leetcode.com/problems/largest-rectangle-in-histogram/description/                                                               |                                                             |
| 🔴 Simplify Path                                                                      | https://leetcode.com/problems/simplify-path/description/                                                                                |                                                             |
| 🔴 Decode String                                                                      | https://leetcode.com/problems/decode-string/                                                                                            |                                                             |



#### Stock-Span
- Intuition
  - Span of first is always ```1```, as no element exists in left, i.e. no element is smaller than this.
  - Span of other index is ```i - first greater element in left```
- Algo
  - Take a stack to store index
  - Iterate on stack 
    - if an element is smaller or equal at the index in stack, ```POP them```
    - else calculate the span using that index 
```java
public ArrayList<Integer> calculateSpan(int[] arr) {
        int len = arr.length;
        ArrayList<Integer>list = new ArrayList<>();
        Stack<Integer>st = new Stack<>();
        for(int i = 0; i < len; i++){
            while(!st.isEmpty() && arr[st.peek()] <= arr[i]){//
                st.pop();
            }
            int res = st.isEmpty() ? i+1 : i - st.peek();
            list.add(res);
            st.push(i);
        }
        return list;
    }
```

#### Next-Greater

```java
public ArrayList<Integer> nextLargerElement(int[] arr) {
        List<Integer>list = new LinkedList<>();
        Stack<Integer>stack = new Stack<>();
        for(int i = arr.length-1; i >= 0; i--){
            while(!stack.isEmpty() && stack.peek() <= arr[i]){
                stack.pop();
            }
            int item = stack.isEmpty() ? -1 : stack.peek();
            list.addFirst(item);
            stack.add(arr[i]);
        }
        return new ArrayList<>(list);
    }
```
- For other variations mentioned in the above table, you can play with ```for``` and ```while``` loop.
- For circular traversal 
  - Traverse til ```2 * len```
  - While accessing an element in array use ```i % len```