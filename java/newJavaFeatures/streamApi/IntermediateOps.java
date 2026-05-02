package features.newJavaFeatures.streamApi;

import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

public class IntermediateOps {
    public static void main(String[] args) {
        //Filter
        List<Integer> listOfOddNum = Stream.of(1, 2, 3, 4, 5).filter((a) -> a%2 == 0).toList();
        printList(listOfOddNum);
        System.out.println();
        //Map
        List<String>upString = Stream.of("a", "b", "c").map(String::toUpperCase).toList();
        printList(upString);
        System.out.println();
        List<Integer>sortedList = Stream.of(1, 8, 3, 7, 2).sorted((a, b) -> b-a).toList();
        printList(sortedList);
        System.out.println();
        //distinct
        List<Integer>distinctList = Stream.of(1, 8, 3, 7, 7, 2, 1, 2).distinct().toList();
        printList(distinctList);
        System.out.println();
        //limit
        List<Integer>limitList = Stream.of(1, 8, 3, 7, 7, 2, 1, 2).limit(2).toList();
        printList(limitList);
        System.out.println();
        //skip
        List<Integer>skipList = Stream.of(1, 8, 3, 7, 7, 2, 1, 2).skip(2).toList();
        printList(skipList);
        System.out.println();
        //Flatmap
        List<List<String>>fruit = Arrays.asList(
                List.of("Kiwi", "Apple"),
                List.of("Grapes", "Orange"),
                List.of("Peach", "Guvava")
                );
        List<String>flatFruitList = fruit.stream().flatMap((x) -> x.stream()).map(String::toUpperCase).toList();
        printList(flatFruitList);
        //peek
    }
    public static <T> void printList(List<T>list){
        for(T t : list){
            System.out.print(t+", ");
        }
    }
}
