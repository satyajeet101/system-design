package features.newJavaFeatures.genericMethod;

import java.util.List;

public class GenericDemo {
    public static void main(String[] args) {
        List<Integer>intList = List.of(1,92,8,3,7);
        List<String>stringList = List.of("a","z","b","x","c");
        print(intList);
        System.out.println();
        print(stringList);
    }
    public static <T> void print(List<T>list){
        for(T i : list){
            System.out.print(i+", ");
        }
    }
}
