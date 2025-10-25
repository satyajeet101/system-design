# Contents
[Executor](#Executor) | [ExecutorService](#ExecutorService) | [ScheduledExecutorService](#ScheduledExecutorService) | 
[Executors](#Executors)


- The Executor framework in Java provides a high-level replacement for managing threads directly.
- It simplifies concurrent programming by decoupling task submission from task execution.

## There are 3 main Interfaces

### Executor
- The base interface with a single method: execute(Runnable command)
- It doesn't return a result.
### ExecutorService
- Extends Executor and adds methods like:
  - submit(): Takes Runnable or Callable and returns a Future object
    - Methods available on Future:
      - get(): Waits for the task to complete and retrieves the result
      - cancel(): Attempts to cancel execution
      - isDone(): Checks if the task is completed
      - isCancelled(): Checks if the task was cancelled before completion
      - isCompletedExceptionally(): Checks if the task completed with an exception
      - join(): Waits for completion without throwing checked exceptions
  - invokeAll(): Executes a collection of tasks and returns a list of Futures
  - invokeAny(): Executes a collection of tasks and returns the result of one that completed successfully
  - shutdown(): Initiates an orderly shutdown
  - shutdownNow(): Attempts to stop all actively executing tasks
  - awaitTermination(): Blocks until all tasks have completed after a shutdown request
  - isTerminated(): Checks if all tasks have completed following shutdown
  - isShutdown(): Checks if the executor has been shut down

```java
  ExecutorService executor = Executors.newFixedThreadPool(2);
  Future<Integer> future = executor.submit(() -> {
      // Some computation
      return 42;
  });
    try {
        Integer result = future.get(); // Blocks until the result is available
        System.out.println("Result: " + result);
    } catch (InterruptedException | ExecutionException e) {
        e.printStackTrace();
    } finally {
        executor.shutdown();
    }
  ```
### ScheduledExecutorService
- Extends ExecutorService to support scheduling tasks to run after a delay or periodically.
- Key methods:
  - schedule(Runnable command, long delay, TimeUnit unit)
  - scheduleAtFixedRate(Runnable command, long initialDelay, long period, TimeUnit unit)
  - scheduleWithFixedDelay(Runnable command, long initialDelay, long delay, TimeUnit unit
  - shutdown() : Initiates an orderly shutdown in which previously submitted tasks are executed, but no new tasks will be accepted.
  - shutdownNow() : Attempts to stop all actively executing tasks, halts the processing of waiting tasks, and returns a list of the tasks that were awaiting execution.
  - awaitTermination(long timeout, TimeUnit unit) : Blocks until all tasks have completed execution after a shutdown request, or the timeout occurs, or the current thread is interrupted, whichever happens first.

  ```java
    ScheduledExecutorService scheduler = Executors.newScheduledThreadPool(1);
    Runnable task = () -> System.out.println("Task executed at: " + System.currentTimeMillis());
    scheduler.scheduleAtFixedRate(task, 0, 5, TimeUnit.SECONDS);
    // To stop the scheduler after some time
    scheduler.schedule(() -> {
        scheduler.shutdown();
        System.out.println("Scheduler shut down.");
    }, 30, TimeUnit.SECONDS);
  ```
## Executors
- A utility class that provides factory methods for creating different types of ExecutorService and ScheduledExecutorService instances.
- Common methods include:
- newFixedThreadPool(int nThreads): Creates a thread pool with a fixed number of threads.
- newCachedThreadPool(): Creates a thread pool that creates new threads as needed but will reuse previously constructed threads when they are available.
- newSingleThreadExecutor(): Creates an executor that uses a single worker thread.
- newScheduledThreadPool(int corePoolSize): Creates a thread pool that can schedule commands to run after a given delay or to execute periodically.
- newWorkStealingPool(): Creates a work-stealing thread pool using all available processors as its target parallelism level.
- newFixedThreadPool(int nThreads): Creates a thread pool with a fixed number of threads and a custom thread factory.
- newCachedThreadPool(): Creates a cached thread pool with a custom thread factory.

```java
ExecutorService fixedThreadPool = Executors.newFixedThreadPool(5);  
ExecutorService cachedThreadPool = Executors.newCachedThreadPool();  
ExecutorService singleThreadExecutor = Executors.newSingleThreadExecutor();  
ScheduledExecutorService scheduledThreadPool = Executors.newScheduledThreadPool(3);  
```