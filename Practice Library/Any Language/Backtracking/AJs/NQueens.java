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

		int[] G = new int[BOARD_SIZE]; // cols
		Arrays.fill(G, -1);
		placeQueen(G, 0);

	}

	private static void placeQueen(int[] G, int pos) {
		if (pos >= BOARD_SIZE) {
			System.out.println(toString(G));
			printBoard(G);
			return;
		}

		for (int i = 0; i < BOARD_SIZE; i++) { // using i as rows
			G[pos] = i; //placing the queen
			if (isSafe(G, pos)) {
				placeQueen(G, pos + 1); // try placing the next
			} else {
				G[pos] = -1; // reverse the last decision to place
			}
		}
	}

	private static void printBoard(int[] g) {
		for (int i = 0; i < g.length; i++) {
			for (int j = 0; j < g.length; j++) { // using index j as rows, // finding the placement in the col i
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
		for (int i = 0; i < pos; i++) { // for all the points before target, 
			if (G[i] == G[pos]) { // col and row must not match | no coordinates of pos must have been registered
				return false;
			}

			if (Math.abs(G[i] - G[pos]) == Math.abs(i - pos)) { // abs diff in coordinates should not be the same - diagonals
				return false;
			}
		}

		return true;
	}

	public static String toString(int[] arr) {
		var length = arr.length;
        var sb = new StringBuilder();
        sb.append("[");
        for (int i=0; i<length-1; i++) {
            sb.append(arr[i] + ", ");
        }
        sb.append(arr[length-1]+"]");

        return sb.toString();
    }
}