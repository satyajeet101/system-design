# Content
[CompletableFuture](#CompletableFuture)

## CompletableFuture
### runAsync()
- Used when your task does not return a value (Runnable).
- Returns a CompletableFuture<Void>
  ```java
        CompletableFuture<Void> future = CompletableFuture.runAsync(() -> {
          System.out.println("Running async task...");
        });
    
        future.join(); // wait for completion
    ```
### supplyAsync()
- Used when your task returns a value (Supplier<T>).
- Returns a CompletableFuture<T>.
```java
   CompletableFuture<String> future = CompletableFuture.supplyAsync(() -> {
    return "Hello from async!";
    });
   System.out.println(future.join()); // prints: Hello from async!
```
#### With Custom Executor
```java
    ExecutorService executor = Executors.newFixedThreadPool(2);
    // runAsync
    CompletableFuture<Void> runFuture = CompletableFuture.runAsync(() -> {
        System.out.println("Task with runAsync");
    }, executor);
    // supplyAsync
    CompletableFuture<Integer> supplyFuture = CompletableFuture.supplyAsync(() -> {
        return 42;
    }, executor);
```
#### Waiting for multiple tasks
```java
    CompletableFuture<Void> f1 = CompletableFuture.runAsync(() -> {
        System.out.println("Task 1 running...");
    });
    
    CompletableFuture<Void> f2 = CompletableFuture.runAsync(() -> {
        System.out.println("Task 2 running...");
    });
    
    CompletableFuture<Void> all = CompletableFuture.allOf(f1, f2);
    
    all.join(); // wait for both
    System.out.println("Both tasks finished!");
```
#### Real-world: Sequential API calls thenCompose
```java
    CompletableFuture<String> userFuture = CompletableFuture.supplyAsync(() -> {
        // Simulate API call
        return "user-123";
    });
    CompletableFuture<List<String>> ordersFuture = userFuture.thenCompose(userId ->
        CompletableFuture.supplyAsync(() -> {
            // Second async API depends on userId
            return List.of("order-1 for " + userId, "order-2 for " + userId);
        })
    );
    System.out.println(ordersFuture.join());
    // ✅ Output: [order-1 for user-123, order-2 for user-123]
```
#### thenCombine() (Parallel, Independent APIs)
```java
    CompletableFuture<String> userFuture = CompletableFuture.supplyAsync(() -> "John");
    CompletableFuture<Integer> ageFuture = CompletableFuture.supplyAsync(() -> 30);
    
    CompletableFuture<String> combined = userFuture.thenCombine(ageFuture,
        (name, age) -> name + " is " + age + " years old"
    );
    
    System.out.println(combined.join());
    // ✅ Output: John is 30 years old
```
