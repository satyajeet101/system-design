package features.multithreading.executorFramework;

import java.util.concurrent.*;

public class ExecutorFrameWorkImpl {
    public static void main(String[] args) {
        //ExecutorService executorService = Executors.newFixedThreadPool(5);
        //ExecutorService executorService = Executors.newCachedThreadPool();
        ExecutorService executorService = Executors.newSingleThreadExecutor();
        Runnable task = () -> {
            System.out.println("Hello");
            processingTask();//Dummy task to add delay
        };
        for (int i = 0; i < 100; i++) {
            executorService.submit(task);
        }
        System.out.println("Main ended");
        executorService.shutdown();
    }

    private static void processingTask() {
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            throw new RuntimeException(e);
        }
    }
}
