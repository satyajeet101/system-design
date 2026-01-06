# Content
[Matrix](#Matrix)

## Matrix


| Description             | URL                                                                             | Remark                                                           |
|-------------------------|---------------------------------------------------------------------------------|------------------------------------------------------------------|
| Transpose a matrix      | https://leetcode.com/problems/transpose-matrix/                                 | A Square Matrix can be transpose in-place but not the non square |
| Search a 2D Matrix      | https://leetcode.com/problems/search-a-2d-matrix/description/                   | [Logic](#Search)                                                 |

#### Search

- Row and column will be calculated as below

```java
public boolean searchMatrix(int[][] matrix, int target) {
        int row = matrix.length;
        int column = matrix[0].length;
        
        int start = 0;
        int end = (row * column) - 1;
        
        int mid = start + (end - start) / 2;
        
        int currRow = mid / column;
        int currColumn = mid % column;
    }
```