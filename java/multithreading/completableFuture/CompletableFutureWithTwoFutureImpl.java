package features.multithreading.completableFuture;


import java.util.concurrent.CompletableFuture;
import java.util.concurrent.ExecutionException;

public class CompletableFutureWithTwoFutureImpl {
    public static void main(String[] args) throws ExecutionException, InterruptedException {
        System.out.println("Main thread: " + Thread.currentThread().getName());

        // Run a task asynchronously
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
