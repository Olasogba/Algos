// sum up the first n values of a given array and return the result

public class IntegerSum {
    public static void main(String[] args) {
        System.out.println(sum(new int[] {1,2,3,4,5,5,6}, 4));
    }

    public static int sum(int[] arr, int n) {
        if(n==0) return 0;
        return sum(arr, n-1) + arr[n-1];
    }

}