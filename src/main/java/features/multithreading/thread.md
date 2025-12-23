# Content
[Thread](#Thread) | [Lock](#LOCK) | [Thread communicating](#Thread-communicating) |  
[CompletableFuture](#CompletableFuture) | [Semaphore](#Semaphore) | [Volatile](#Volatile) | [Atomic](#Atomic)
# Thread
## Different ways to create Thread
1. Implement Runnable in a class A
    - Override run method
    - Give implementation
    - Now in main class create object obj of Thread class and pass the object of calss A
    - obj.start()
2. Extent Thread class in class A
    - Override run method
    - create obj of A
    - obj.start()
   
## Different state of Thread

1. **New:** created but not yet started
2. **Runnable:** after start() method is called, it becomes runnable. it is ready to run and waiting for CPU time
3. **Running:** it is executing
4. **Blocked/Waiting:** waiting for resource or for another thread to perform an action
5. **Terminate:** finished execution

## Different methods in Thread
1. start() : start the thread
2. run() : hold the actual execution code for thread
3. join() : wait for sub thread before continuing of main thread
4. Thread.getName() :
5. Thread.getPriority(); 1-10
6. basicThread.setPriority(1);
7. Thread.interrupt()
8. Thread.yield()
9. setDemon(true)

## LOCK
1. **Intrinsic Lock** - is default lock which applies during Synchronized method or block
2. **Explicit Lock** provided by
   - java.util.concurrent.locks.Lock;
   - java.util.concurrent.locks.ReentrantLock;
     ```java
         Lock lock = new ReentrantLock(); //Must unlock this in finally lock.unlock()
         lock.lock() //same as synchronized 
         if(lock.tryLock()) //if free to get lock true otherwise false and move forward 
         if(lock.tryLock(1000, TimeUnit.MILLISECONDS)) //try to acquire lock for given time else proceed
    ```
- Fairness, in normal flow lock are acquired as and when it is free and there may a case when a thread is never able to acquire the lock and it is called **starvation** and can be avoided as 
    ```java
        Lock lock = new ReentrantLock(true); //now the lock will be provided in order of request
     ```
   - **Read/Write Lock**
     ```java
     ReadWriteLock readWriteLock = new ReentrantReadWriteLock();
     ```
     - Allows multiple thread to read if no other thread is writing to it
     ```java
     ReadWriteLock readWriteLock = new ReentrantReadWriteLock();
     Lock readLock = readWriteLock.readLock(); 
     Lock writeLock = readWriteLock.writeLock();
     ```
## Thread communicating 
   - have below methods and used in synchronized context
     - wait()
     - notify()
     - notifyAll()
## CompletableFuture
## Semaphore
- A Semaphore is a concurrency utility that controls access to a shared resource through the use of permits.
- It is part of the java.util.concurrent package and is used to manage a pool of resources, allowing a certain number of threads to access a resource concurrently.
- Key Concepts:
  - Permits: A Semaphore maintains a set of permits. Threads can acquire and release these permits to gain access to the shared resource.
  - Fairness: Semaphores can be configured to be fair or non-fair. A fair semaphore ensures that threads acquire permits in the order they requested them, while a non-fair semaphore does not guarantee any specific order.
  - Blocking: If a thread tries to acquire a permit when none are available, it will block until a permit is released by another thread.
  - Counting Semaphore: A counting semaphore allows a specified number of threads to access a resource concurrently. It is initialized with a number of permits, and threads can acquire and release permits as needed.
  - Binary Semaphore: A binary semaphore is a special case of a counting semaphore that can only have two states: 0 or 1. It is often used to implement mutual exclusion (mutex) for critical sections of code.
  - Methods:
    - acquire(): Acquires a permit from the semaphore, blocking if necessary until one is available.
    - release(): Releases a permit, returning it to the semaphore.
    - tryAcquire(): Attempts to acquire a permit without blocking, returning true if successful and false otherwise.
    - availablePermits(): Returns the number of permits currently available in the semaphore.
    - drainPermits(): Acquires and removes all available permits from the semaphore.
- Example Usage:
```java
import java.util.concurrent.Semaphore;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.TimeUnit;
public class SemaphoreExample {
    private static final int MAX_CONCURRENT_THREADS = 3;
    private static final Semaphore semaphore = new Semaphore(MAX_CONCURRENT_THREADS);

    public static void main(String[] args) {
        ExecutorService executor = Executors.newFixedThreadPool(10);

        for (int i = 0; i < 10; i++) {
            final int threadId = i;
            executor.submit(() -> {
                try {
                    System.out.println("Thread " + threadId + " is trying to acquire a permit.");
                    semaphore.acquire();
                    System.out.println("Thread " + threadId + " has acquired a permit.");

                    // Simulate some work with the shared resource
                    Thread.sleep(2000);

                } catch (InterruptedException e) {
                    Thread.currentThread().interrupt();
                } finally {
                    System.out.println("Thread " + threadId + " is releasing the permit.");
                    semaphore.release();
                }
            });
        }

        executor.shutdown();
        try {
            executor.awaitTermination(1, TimeUnit.HOURS);
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
        }
    }
}
```
- In this example, we create a Semaphore with a maximum of 3 concurrent threads. We then use an ExecutorService to simulate 10 threads trying to acquire permits from the semaphore. Each thread will acquire a permit, simulate some work by sleeping for 2 seconds, and then release the permit.
- This ensures that at most 3 threads can access the shared resource simultaneously, demonstrating the use of a Semaphore for controlling concurrent access.
- Semaphores are useful in scenarios where you need to limit the number of concurrent accesses to a resource, such as database connections, file handles, or network connections. They help prevent resource exhaustion and ensure that your application remains responsive under load.

## Volatile
## Atomic
