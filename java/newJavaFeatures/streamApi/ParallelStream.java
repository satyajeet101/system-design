package features.newJavaFeatures.streamApi;

import java.util.List;
import java.util.stream.Stream;

public class ParallelStream {
    public static void main(String[] args) {
        List<Integer> list = Stream.iterate(2, (a) -> a + 1).limit(30).parallel().filter((a) -> a % 3 == 0).toList();
        printList(list);
    }
    public static <T> void printList(List<T>list){
        for(T t : list){
            System.out.print(t+", ");
        }
    }
}
