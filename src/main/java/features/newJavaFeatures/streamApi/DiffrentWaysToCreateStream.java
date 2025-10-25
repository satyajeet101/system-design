package features.newJavaFeatures.streamApi;

import java.util.Arrays;
import java.util.List;
import java.util.stream.Stream;

public class DiffrentWaysToCreateStream {
    public static void main(String[] args) {
        List<Integer> list = Arrays.asList(1, 2, 3);
        Stream<Integer> stream = list.stream();

        String[] arr= {"a", "b", "c"};
        Stream<String> stream1 = Arrays.stream(arr);

        Stream<Integer> stream2 = Stream.of(1, 2, 3);

        Stream<Integer> generate = Stream.generate(() -> 1).limit(100);

        Stream<Integer> iterate = Stream.iterate(2, (a) -> a + 1).limit(100);

    }
}
