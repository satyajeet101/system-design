package features.multithreading.extendThread;

public class BasicThread1 extends Thread{
    @Override
    public void run() {
        for (int i = 0; i < 100; i++) {
            System.out.print(Thread.currentThread().getName()+", ");
        }
    }
}
