package features.multithreading.completableFuture;

import java.util.concurrent.CompletableFuture;
import java.util.concurrent.ExecutionException;

public class CompletableFutureImpl {
    public static void main(String[] args) throws ExecutionException, InterruptedException {
        CompletableFuture<?> completableFuture = CompletableFuture.runAsync(()->{
            try {
                Thread.sleep(1000);
            } catch (InterruptedException e) {
                throw new RuntimeException(e);
            }
            System.out.println("Hello from RUNNABLE");
        });
        completableFuture.get();//Blocking call

        CompletableFuture<?> completable = CompletableFuture.supplyAsync(()->{
            try {
                Thread.sleep(1000);
            } catch (InterruptedException e) {
                throw new RuntimeException(e);
            }
            return "Hello from Supply async";
        });
        System.out.println(completable.get());//Blocking call

        CompletableFuture<?> c1 = CompletableFuture.supplyAsync(()->{
            try {
                Thread.sleep(1000);
            } catch (InterruptedException e) {
                throw new RuntimeException(e);
            }
            return "Hello Satya";
        }).thenApply((message)->message+" from then apply");
        //thenApplyAsync
        System.out.println(c1.get());

        CompletableFuture<?> c2 = CompletableFuture.supplyAsync(()->{
            try {
                Thread.sleep(1000);
            } catch (InterruptedException e) {
                throw new RuntimeException(e);
            }
            return "Hello Satya";
        }).thenAccept((m)-> System.out.println("Accepting " +m));
        //thenAcceptAsync
        c2.get();

        CompletableFuture<?> c3 = CompletableFuture.supplyAsync(()->{
            try {
                Thread.sleep(1000);
            } catch (InterruptedException e) {
                throw new RuntimeException(e);
            }
            return "Hello Satya";
        }).thenRun(()-> System.out.println("Processing complete"));
        //thenRunAsync
        c3.get();

        CompletableFuture<String> cf1 = CompletableFuture.supplyAsync(() -> {
            System.out.println("Running in: " + Thread.currentThread().getName());
            try {
                Thread.sleep(2000); // simulate delay
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
            return "Hello from async task!";
        });
        CompletableFuture<String> cf2 = CompletableFuture.supplyAsync(() -> {
            System.out.println("Running in: " + Thread.currentThread().getName());
            try {
                Thread.sleep(2000); // simulate delay
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
            return "Hello from async task!";
        });
        CompletableFuture<Void> allFuture = CompletableFuture.allOf(cf1, cf2);
        allFuture.join();
        // Do something else while it's running
        System.out.println("All of them completed");
    }
}
