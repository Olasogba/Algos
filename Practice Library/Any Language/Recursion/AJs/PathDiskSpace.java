/**computing the total disk usage for all
files and directories nested within a particular directory */

import java.io.File;

public class PathDiskSpace {
    public static void main(String[] args) {
        var file = new File("C:\\Users\\User\\Desktop\\Algorithm Mastery\\Practice Library\\Any Language\\Recursion");
        // System.out.println(file.list());
        System.out.println(find(file));
    }


    public static int find(File root) {
        // get the immediate size
        // if is directory repeat
        var size = root.length();

        if(root.isDirectory())
            for (String el : root.list()) {
                size+=find(new File(root, el));
            }
        System.out.println(size + "\t" + root);
        return Math.toIntExact(size);
    }
}