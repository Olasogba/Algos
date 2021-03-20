/**
 * Given a grid with different colors in a different cell, each color represented 
 * by a different number. The task is to find out the largest connected component
 *  on the grid. Largest component grid refers to a maximum set of cells such that
 *  you can move from any cell to any other cell in this set by only moving 
 * between side-adjacent cells from the set. 
 * 
 * 
    Sample input:
    11000
    01100
    00101
    10001
    01011

    Sample output: 5
 */

// Java program to print the largest
// connected component in a grid
import java.util.*;
import java.lang.*;
import java.io.*;
 
class ConnectedCells2
{
    public static boolean isValid(int row, int col, int rowLength, int colLength) {
        return row<rowLength && col<colLength 
        && row>=0 && col>=0 ;
    }


    // THis search traverses once.
    static int rs(int[][] matrix , int i , int j){
        if(i<0 || j<0 || i >= matrix.length || j >= matrix[i].length)
            return 0;
        if(matrix[i][j] == 0)
            return 0;
        int size = 1;
        matrix[i][j] = 0;
        printResult(matrix);


        // for(int r = i-1; r<=i+1;r++){
        //     for(int c = j-1; c <= j+1; c++){
        //         if(r != i || c != j){
        //             size += rs(matrix,r,c);
        //         }
        //     }
        // }

        int[][] directions = new int[][] {{-1,-1},{-1,0},{-1,1},{0,-1},{0,1},{1,-1},{1,0},{1,1}};

        for(Integer k=0; k<8; k++) {
            int newi = i+directions[k][0];
            int newj = j+directions[k][1];
            
            size += rs(matrix,newi,newj);  
        }
        return size;
    }

    static int connectedCell(int[][] matrix,int n , int m ) {
        int max = 0;
        for(int i  = 0 ;i<n;i++){
            for(int j = 0 ;j<m;j++){
                if(matrix[i][j] == 1){
                    int size = rs(matrix , i ,j);
                    max = Math.max(size , max);
                }
            }
        }
        System.out.println(max);
        return max;
    }
    // Driver Code
    public static void main(String args[])
    {
        // int input[][] = {{1, 4, 4, 4, 4, 3, 3, 1},
        //                 {2, 1, 1, 4, 3, 3, 1, 1},
        //                 {3, 2, 1, 1, 2, 3, 2, 1},
        //                 {3, 3, 2, 1, 2, 2, 2, 2},
        //                 {3, 1, 3, 1, 1, 4, 4, 4},
        //                 {1, 1, 3, 1, 1, 4, 4, 4}};
        // int input[][] = {{1,1,0,0,0},
        //                 {0,1,1,0,0},
        //                 {0,0,1,0,1},
        //                 {1,0,0,0,1},
        //                 {0,1,0,1,1}};

        int input[][] = {{0, 1, 0, 0, 0, 0, 1, 1, 0},
                        {1, 1, 0, 0, 1, 0, 0, 0, 1},
                        {0, 0, 0, 0, 1, 0, 1, 0, 0},
                        {0, 1, 1, 1, 0, 1, 0, 1, 1},
                        {0, 1, 1, 1, 0, 0, 1, 1, 0},
                        {0, 1, 0, 1, 1, 0, 1, 1, 0},
                        {0, 1, 0, 0, 1, 1, 0, 1, 1},
                        {1, 0, 1, 1, 1, 1, 0, 0, 0}};
    
        // function to compute the largest
        // connected component in the grid
        connectedCell(input, 8,9);
    }

    static void printResult(int[][] matrix) {
        // loop over visited
        // where is 1 print value, else pritn '.'
        for(var i=0; i<matrix.length; i++) {
            for(var j=0; j<matrix[i].length; j++) {
                if(matrix[i][j]==0) {
                    System.out.print(". ");
                } else {
                    System.out.print(((Integer)matrix[i][j]).toString()+' ');
                }
            }
            System.out.println();
        }

        System.out.println();

    }
}

/**
// Java program to print the largest
// connected component in a grid
import java.util.*;
import java.lang.*;
import java.io.*;
 
class ConnectedCells2
{
    // for every node
    // move in all directions and
    // keep track of the largest region
    static final int rowLength = 5;
    static final int colLength = 5;
    static int sizeFound = 0;
    static final int[][] result = new int[rowLength][colLength];
    static final int[][] visited = new int[rowLength][colLength];
    static int maxCount = -100;
    static int stopper = 0;

    static void initVisited() {
        for (int i = 0; i < rowLength; i++)
            for (int j = 0; j < colLength; j++) {
                visited[i][j] = 0;
            }
    }


    public static boolean isValid(int row, int col, int rowLength, int colLength) {
        return row<rowLength && col<colLength && row>=0 && col>=0 && visited[row][col]==0;
    }


    public static void traverse(int[][] matrix, int row, int col, int rowLength, int colLength) {
        // update the size
        // traverse in all directions
        // repeat if the next direction is valid and unchecked
        // reset the checked after each complete traversal for other checkers
        
        if(row>=rowLength || col >= colLength) return;
        visited[row][col] = 1;
        
        sizeFound+=1;
        if(sizeFound>maxCount){
            maxCount=sizeFound;
            resetResult();
        } 

        int[][] directions = new int[][] {{-1,0},{-1,-1},{0,-1},{1,-1},{1,0},{1,1},{0,1},{-1,1}};

        for(Integer i=0; i<8; i++) {
            var newi = row+directions[i][0];
            var newj = col+directions[i][1];
            
            if(isValid(newi, newj, rowLength, colLength)) {
                if(matrix[row][col]==matrix[newi][newj]) {
                    traverse(matrix, newi, newj, rowLength, colLength);     
                }
            }
        }
               
        sizeFound = 0;
        visited[row][col] = 0;
    }

    static void resetResult() {
        // loop over visited
        // where is 1 print value, else pritn '.'
        for(var i=0; i<rowLength; i++) {
            for(var j=0; j<colLength; j++) {
                if(visited[i][j]==0) {
                    result[i][j]=0;
                } else {
                    result[i][j]=1;
                }
            }
        }

    }

    static void printResult(int[][] matrix) {
        // loop over visited
        // where is 1 print value, else pritn '.'
        for(var i=0; i<rowLength; i++) {
            for(var j=0; j<colLength; j++) {
                if(result[i][j]==0) {
                    System.out.print(". ");
                } else {
                    System.out.print(((Integer)matrix[i][j]).toString()+' ');
                }
            }
            System.out.println();
        }

    }


    
    public static int compute(int[][] matrix, int rowLength, int colLength) {
        // loop over the numbers
        // and traverse
        initVisited();
        for(int i=0; i<rowLength; i++) {
            for(int j=0; j<colLength; j++) {
                traverse(matrix, i, j, rowLength, colLength);
            }
        }
        // System.out.println();
        System.out.println(maxCount);
        printResult(matrix);
        return maxCount;
    }

    public static void main(String[] args) {
        int input[][] = new int[][] {
                        {1,1,0,0,0},
                        {0,1,1,0,0},
                        {0,0,1,0,1},
                        {1,0,0,0,1},
                        {0,1,0,1,1}};
        
        
        // int input[][] = {{1, 4, 4, 4, 4, 3, 3, 1},
        //                 {2, 1, 1, 4, 3, 3, 1, 1},
        //                 {3, 2, 1, 1, 2, 3, 2, 1},
        //                 {3, 3, 2, 1, 2, 2, 2, 2},
        //                 {3, 1, 3, 1, 1, 4, 4, 4},
        //                 {1, 1, 3, 1, 1, 4, 4, 4}};
            
        compute(input, rowLength, colLength);
    }

}
 */