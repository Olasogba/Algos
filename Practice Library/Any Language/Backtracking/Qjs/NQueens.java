import java.lang.reflect.Array;
import java.util.Arrays;

// '''
// In this problem, you are given an empty chess board of dimensions N * N. 
// The task is to safely place N queens, one in each row such that they cause no harm to each other.

// Essentially avoid them being in the same row, column, or diagonal
// '''
public class NQueens {

	private static int BOARD_SIZE = 4;

	public static void main(String[] args) {

		int[] G = new int[BOARD_SIZE];
		Arrays.fill(G, -1);
		placeQueen(G, 0);

	}

	private static void placeQueen(int[] G, int pos) {
        // if all the queens are placed, just print the board
		if (pos >= BOARD_SIZE) {
			printBoard(G);
			return;
		}

        // try each cell of the row, position the queen and if it is safe, move to the next row
		for (int i = 0; i < BOARD_SIZE; i++) {
			G[pos] = i;
			if (isSafe(G, pos)) {
				placeQueen(G, pos + 1);
			} else {
                // if this was a partial solution and didn't work out till the last row, 
                // remove the current queen and try the next cell in the row.
				G[pos] = -1;
			}
		}
	}

	private static void printBoard(int[] g) {
		for (int i = 0; i < g.length; i++) {
			for (int j = 0; j < g.length; j++) {
				if (g[i] == j)
					System.out.print("Q ");
				else
					System.out.print("* ");
			}
			System.out.println();
		}
		System.out.println();
	}

	private static boolean isSafe(int[] G, int pos) {
		for (int i = 0; i < pos; i++) {
            // if the current column already has a queen in 
	        // a previous row, then its not safe
			if (G[i] == G[pos]) {
				return false;
			}

            // if there is a queen on the major or minor diagonal 
	        // which passes through the current row and column, its not safe
			if (Math.abs(G[i] - G[pos]) == Math.abs(i - pos)) {
				return false;
			}
		}

		return true;
	}
}