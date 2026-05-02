package features.multithreading.completableFuture;


import java.util.concurrent.CompletableFuture;
import java.util.concurrent.ExecutionException;

public class CompletableFutureWithOneFutureImpl {
    public static void main(String[] args) throws ExecutionException, InterruptedException {
        System.out.println("Main thread: " + Thread.currentThread().getName());

        // Run a task asynchronously
        CompletableFuture<String> future = CompletableFuture.supplyAsync(() -> {
            System.out.println("Running in: " + Thread.currentThread().getName());
            try {
                Thread.sleep(2000); // simulate delay
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
            return "Hello from async task!";
        });

        // Do something else while it's running
        System.out.println("Doing other work...");
        System.out.println(future.getNow("No Result"));//Print default value if not successfully executed

        // Get the result (blocks until ready)
        System.out.println("Result get: "+future.get());
        System.out.println("Result join: " + future.join());
    }
}
