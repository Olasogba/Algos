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
    static final int n = 5;
    static final int m = 5;
    
    // stores information about which cell
    // are already visited in a particular BFS
    static final int visited[][] = new int [n][m];
    
    // result stores the final result grid
    static final int result[][] = new int [n][m];
    
    // stores the count of
    // cells in the largest 
    // connected component
    static int COUNT;
    
    // Function checks if a cell 
    // is valid i.e it is inside 
    // the grid and equal to the key
    static boolean is_valid(int x, int y, 
                            int key, 
                            int input[][])
    {
        if (x < n && y < m &&
            x >= 0 && y >= 0) 
        {
            if (visited[x][y] == 0 && 
                input[x][y] == key)
                return true;
            else
                return false;
        }
        else
            return false;
    }
    
    // BFS to find all cells in
    // connection with key = input[i][j]
    static void BFS(int x, int y, int i,
                    int j, int input[][])
    {
        // terminating case for BFS
        if (x != y)
            return;
    
        visited[i][j] = 1;
        COUNT++;
    
        // x_move and y_move arrays
        // are the possible movements
        // in x or y direction
        int x_move[] = { 0, 0, 1, -1 };
        int y_move[] = { 1, -1, 0, 0 };
    
        // checks all four points 
        // connected with input[i][j]
        for (int u = 0; u < 4; u++)
            if ((is_valid(i + y_move[u], j + x_move[u], x, input)) == true)
                BFS(x, y, i + y_move[u],
                        j + x_move[u], input);
    }
    
    // called every time before 
    // a BFS so that visited 
    // array is reset to zero
    static void reset_visited()
    {
        for (int i = 0; i < n; i++)
            for (int j = 0; j < m; j++)
                visited[i][j] = 0;
    }
    
    // If a larger connected component
    // is found this function is 
    // called to store information 
    // about that component.
    static void reset_result(int key,
                            int input[][])
    {
        for (int i = 0; i < n; i++) 
        {
            for (int j = 0; j < m; j++) 
            {
                if (visited[i][j] ==1 && 
                    input[i][j] == key)
                    result[i][j] = visited[i][j];
                else
                    result[i][j] = 0;
            }
        }
    }
    
    // function to print the result
    static void print_result(int res)
    {
        System.out.println ("The largest connected " + 
                        "component of the grid is :" +
                                                res );
    
        // prints the largest component
        for (int i = 0; i < n; i++)
        {
            for (int j = 0; j < m; j++) 
            {
                if (result[i][j] != 0)
                    System.out.print(result[i][j] + " ");
                else
                    System.out.print(". ");
            }
            System.out.println();
        }
    }
    
    // function to calculate the 
    // largest connected component
    static void computeLargestConnectedGrid(int input[][])
    {
        int current_max = Integer.MIN_VALUE;
    
        for (int i = 0; i < n; i++) 
        {
            for (int j = 0; j < m; j++)
            {
                reset_visited();
                COUNT = 0;
    
                // checking cell to the right
                if (j + 1 < m)
                    BFS(input[i][j], input[i][j + 1], 
                                        i, j, input);
    
                // updating result
                if (COUNT >= current_max)
                {
                    current_max = COUNT;
                    reset_result(input[i][j], input);
                }
                reset_visited();
                COUNT = 0;
    
                // checking cell downwards
                if (i + 1 < n)
                    BFS(input[i][j],
                        input[i + 1][j], i, j, input);
    
                // updating result
                if (COUNT >= current_max) 
                {
                    current_max = COUNT;
                    reset_result(input[i][j], input);
                }
            }
        }
        print_result(current_max);
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
        int input[][] = {{1,1,0,0,0},
                        {0,1,1,0,0},
                        {0,0,1,0,1},
                        {1,0,0,0,1},
                        {0,1,0,1,1}};
    
        // function to compute the largest
        // connected component in the grid
        computeLargestConnectedGrid(input);
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