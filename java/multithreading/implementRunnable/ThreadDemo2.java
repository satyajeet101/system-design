package features.multithreading.implementRunnable;

public class ThreadDemo2 {
    public static void main(String[] args) {
        Thread t1 = new Thread(new BasicThread2());//One thread in BasicThread
        t1.start();
        for (int i = 0; i < 100; i++) {
            System.out.print(Thread.currentThread().getName()+", ");// Main thread
        }
    }
}
