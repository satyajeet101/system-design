package features.multithreading.executorFramework;

import java.util.concurrent.ExecutionException;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.Future;

public class FutureImpl {
    public static void main(String[] args) throws ExecutionException, InterruptedException {
        ExecutorService executorService = Executors.newCachedThreadPool();
        Future<String> future = executorService.submit(()-> {
            Thread.sleep(2000);
            return "hello";
        });//Callable version
        //Future<?> futureRunnable = executorService.submit(()-> System.out.println("hello"));//Runnable version
        System.out.println(future.get());
        executorService.shutdown();
        System.out.println("main Thread");
    }
}
