package features.multithreading.executorFramework;

import java.time.LocalTime;
import java.util.Date;
import java.util.concurrent.Executors;
import java.util.concurrent.ScheduledExecutorService;
import java.util.concurrent.TimeUnit;

public class ScheduledExecutorImpl {
    public static void main(String[] args) {
        ScheduledExecutorService executorService = Executors.newScheduledThreadPool(1);
        Runnable task = () -> {
            System.out.println(LocalTime.now());
            processingTask();//Dummy task to add delay
        };
        //executorService.scheduleAtFixedRate(task, 0, 2, TimeUnit.SECONDS);
        executorService.scheduleWithFixedDelay(task, 0, 2, TimeUnit.SECONDS);
        try {
            Thread.sleep(20000);
        } catch (InterruptedException e) {
            throw new RuntimeException(e);
        }
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
