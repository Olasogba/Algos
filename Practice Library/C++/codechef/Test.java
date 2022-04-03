
import java.util.ArrayList;
import java.util.Scanner;

class Test {

    public static void solve() {
       // loop
       // score a
       // score b
       // compare scores

       Scanner scan = new  Scanner(System.in);
       Integer t = Integer.parseInt(scan.nextLine());
       Integer a=0;
       Integer b=0;
       ArrayList<String> ans = new ArrayList<String>();

       while(t>0) {
        String[] n = scan.nextLine().split(" "); // N,A,B -> no of strings, a=f_points, b=s_points
        
        Integer nn = Integer.parseInt(n[0]);
        while(nn > 0) {
            String v = scan.nextLine();
            if("EQUINOX".contains(String.valueOf(v.charAt(0))))
                a+=Integer.parseInt(n[1]);
            else b+=Integer.parseInt(n[2]);
            nn--;
        }
        
        if(b>a) ans.add("ANURADHA");
        else if(a>b) {
            ans.add("SARTHAK");
        } else ans.add("DRAW");
        a=0;
        b=0;
        t--;
       }

       for (String string : ans) {
           System.out.println(string);
       }
    }

    public static void main(String[] args) throws NumberFormatException, NoSuchFieldException {
        try {
            solve();
        } catch(Exception e) {
            // System.out.print(e.getLocalizedMessage());
        }
    }
}