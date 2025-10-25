package features.switchCase;

public class SwitchCaseImp {
    public static void main(String[] args) {
        String dayOfWeek = "Wednesday";
        // Switch Statement with arrow syntax
        switch (dayOfWeek) {
            case "Monday", "Tuesday" -> System.out.println("It's early in the week.");
            case "Wednesday" -> {
                System.out.println("It's mid-week.");
                System.out.println("Almost there!");
            }
            case "Thursday", "Friday" -> System.out.println("The weekend is near.");
            default -> System.out.println("It's the weekend!");
        }

        // Switch Expression with arrow syntax
        int numLetters = switch (dayOfWeek) {
            case "Monday", "Friday", "Sunday" -> 6;
            case "Tuesday" -> 7;
            case "Thursday", "Saturday" -> 8;
            case "Wednesday" -> 9;
            default -> 0; // Or throw new IllegalArgumentException("Unknown day");
        };
        System.out.println("Number of letters in the day: " + numLetters);

    }
}
