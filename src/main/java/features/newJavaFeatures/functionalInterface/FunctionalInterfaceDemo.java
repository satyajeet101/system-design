package features.newJavaFeatures.functionalInterface;

import java.util.function.*;

public class FunctionalInterfaceDemo {
    public static void main(String[] args) {
        Predicate<Integer> predicate = (a) -> a > 2;
        System.out.println("Predicate test : "+predicate.test(2));

        Function<Integer, Integer> function = (a) -> a*2;
        System.out.println("Function apply : "+function.apply(2));
        System.out.print("Consumer accept : ");

        Consumer<Integer>consumer = (a)-> System.out.println(a);
        consumer.accept(2);

        Supplier<Integer>supplier = ()->2;
        System.out.println("Supplier get : "+supplier.get());

        BiPredicate<Integer, Integer> biPredicate = (a, b) -> a>b;
        System.out.println("BiPredicate test : "+biPredicate.test(2, 3));

        BiFunction<String, String, Integer>biFunction = (a, b)-> a.compareTo(b);
        System.out.println("BiFunction apply : "+biFunction.apply("Amit", "Khushi"));

        System.out.print("BiConsumer accept : ");
        BiConsumer<Integer, Integer>biConsumer = (a, b)-> System.out.println(a+b);
        biConsumer.accept(2, 3);

        UnaryOperator<Integer>unaryOperator = (a) -> a+2; // Same as function but take and return same type of value
        System.out.println("UnaryOperator apply : "+unaryOperator.apply(2));

        BinaryOperator<Integer>binaryOperator = (a, b) -> a+b;// Same as bi function but take and return same type of value
        System.out.println("BinaryOperator apply : "+binaryOperator.apply(1,2));
    }
}
