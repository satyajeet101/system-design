# Contents
[Executor](#Executor) | [ExecutorService](#ExecutorService) | [ScheduledExecutorService](#ScheduledExecutorService) | 
[Executors](#Executors) | (CountDownLatch)(#CountDownLatch)


## There are 3 main Interfaces

### Executor
- The base interface with a single method: execute(Runnable command)
- It doesn't return a result.
### ExecutorService
- Interface extends Executor, with below methods
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

```java
ExecutorService fixedThreadPool = Executors.newFixedThreadPool(5);  
ExecutorService cachedThreadPool = Executors.newCachedThreadPool();  
ExecutorService singleThreadExecutor = Executors.newSingleThreadExecutor();  
ScheduledExecutorService scheduledThreadPool = Executors.newScheduledThreadPool(3);  
```
## CountDownLatch
