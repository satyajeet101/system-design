package features.multithreading.extendThread;

public class ThreadDemo1 {
    public static void main(String[] args) throws InterruptedException {
        BasicThread1 basicThread = new BasicThread1();
        basicThread.start();//One thread in BasicThread class
        for (int i = 0; i < 100; i++) {
            System.out.print(Thread.currentThread().getName()+", ");// Main thread
        }
        basicThread.join();//Main thread will wait for the basicThread to complete
    }
}
