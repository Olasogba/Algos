/** Reverses the contents of subarray data[low] through data[high] inclusive. */
public class ReverseSequence {
    public static void main(String[] args) {
        var x = new int[]{1,2,3,4,5,6,7,8,9,10};
        print(x);
        reverse(x, 0, 5);
        print(x);
    }


    public static void reverse(int[] arr, int left, int right) {
        if(left>right)return;
        var temp = arr[left];
        arr[left]=arr[right];
        arr[right]=temp;
        reverse(arr, left+1, right-1);
    }


    public static void print(int[] arr) {
        var sb = new StringBuilder();
        sb.append("[");
        for (int i = 0; i < arr.length-1; i++) {
            sb.append(arr[i]+", ");
        }
        sb.append(arr[arr.length-1]+"]");
        System.out.println(sb.toString());
    }
}
