/** Draws an English ruler for the given number of inches and major tick length. */

public class EnglishRuler {
    public static void main(String[] args) {
        drawRuler(1, 7);
    }


    public static void drawRuler(int inches, int majorTickLength) {
        drawLine(majorTickLength, 0);
        for (int i = 1; i <= inches; i++) {
            drawInterval(majorTickLength-1);
            drawLine(majorTickLength, i);
        }
    }


    private static void drawLine(int length, int label) {
        for (int i = 0; i < length; i++) {
            System.out.print("- ");
        }
        if(label>=0) System.out.print(label);
        System.out.println();
    }


    private static void drawInterval(int length) {
        // draw above
        // draw line
        // draw beneath
        if(length>=1) {
            drawInterval(length-1);
            drawLine(length);
            drawInterval(length-1);
        }

    }

    private static void drawLine(int tickLength) {
         drawLine(tickLength, -1);
    }
}