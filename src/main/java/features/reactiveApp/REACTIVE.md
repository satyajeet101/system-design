## Publisher
- void subscribe(Subscriber<? super T> subscriber);
- Publisher Lifecycle as below
    ![reactiveWorkflow.png](..%2Fassets%2FreactiveWorkflow.png)
- [FluxPublisherExample.java](FluxPublisherExample.java)
- Signals from Publisher to Subscriber:
    - onNext(T item) → New data item 
    - onError(Throwable error) → Error occurred 
    - onComplete() → No more data
## Subscriber
- Signals from Subscriber to Publisher:
    - subscription.request(n) → Request n items 
    - subscription.cancel() → Stop receiving
## Subscription
## Processor
## Flux
1. Flux<T> is a publisher that emits:
   - Zero item
   - One item
   - Many item
   - and then completes OR never completes
   - Package: reactor.core.publisher.Flux
   - Supports operators like map(), flatMap(), filter(), take(), merge(), etc.
   - Example
     Flux<String> flux = Flux.just("A", "B", "C");
     flux.subscribe(System.out::println);
   - Example, Flux from a Collection
     List<String> list = List.of("X", "Y", "Z");
     Flux<String> flux = Flux.fromIterable(list);
     flux.subscribe(System.out::println);


## Mono
1. Mono<T> is a publisher that emits:
    - Zero or One item
    - And then complete
    - Supports functional operations like map(), flatMap(), filter()
    - Package: reactor.core.publisher.Mono
    - Example : Mono with one value
      Mono<String> mono = Mono.just("Hello");
      mono.subscribe(System.out::println);
    - Example : Mono with empty value
      Mono<String> emptyMono = Mono.empty();
      emptyMono.subscribe(System.out::println,
      System.err::println,
      () -> System.out.println("Completed"));
### Chaining Mono and flux
1. Mono to Flux
   - Mono<List<String>> monoList = Mono.just(List.of("A", "B", "C"));
     Flux<String> flux = monoList.flatMapMany(Flux::fromIterable);
     flux.subscribe(System.out::println);
2. Flux to mono
   - Flux<String> flux = Flux.just("A", "B", "C");
     Mono<List<String>> monoList = flux.collectList();
     monoList.subscribe(System.out::println); // [A, B, C]


## REST/FUNCTIONAL Endpoint
![reactive1.png](..%2Fassets%2Freactive1.png)
