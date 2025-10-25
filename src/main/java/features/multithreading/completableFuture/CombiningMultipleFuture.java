package features.multithreading.completableFuture;

import java.util.Objects;
import java.util.concurrent.CompletableFuture;
import java.util.concurrent.ExecutionException;

public class CombiningMultipleFuture {
    public static void main(String[] args) throws ExecutionException, InterruptedException {
        //Call other API on completion of one
        CompletableFuture<Integer> getRadius = CompletableFuture.supplyAsync(
                ()-> 10);
        CompletableFuture<Double> area = getRadius.thenCompose((radius)-> {
            return CompletableFuture.supplyAsync(()->Math.PI * radius * radius);
        });
        System.out.println(area.get());

        //Combine 2 future and call the other one based on the response
        CompletableFuture<Integer>getHeight = CompletableFuture.supplyAsync(()->5);
        CompletableFuture<Integer>getWeight = CompletableFuture.supplyAsync(()->140);
        CompletableFuture<Integer>bmi =
                getHeight.thenCombine(getWeight,(h, w)->h*w);
        System.out.println(bmi.get());

        //perform something when ALL the future are complete
        CompletableFuture<String>f1 =CompletableFuture.supplyAsync(()->"hello");
        CompletableFuture<String>f2 =CompletableFuture.supplyAsync(()->"mr");
        CompletableFuture<String>f3 =CompletableFuture.supplyAsync(()->"Sata");
        CompletableFuture<Void>future = CompletableFuture.allOf(f1, f2, f3);
        future.join();

        //perform something when ANY future is complete
        CompletableFuture<String>f4 =CompletableFuture.supplyAsync(()->"hello");
        CompletableFuture<String>f5 =CompletableFuture.supplyAsync(()->"mr");
        CompletableFuture<String>f6 =CompletableFuture.supplyAsync(()->"Sata");
        CompletableFuture.anyOf(f4, f5, f6);
        future.join();
    }
}
