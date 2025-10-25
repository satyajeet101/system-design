package features.reactiveApp;

import reactor.core.publisher.Flux;
import org.reactivestreams.Subscriber;
import org.reactivestreams.Subscription;

public class FluxPublisherExample {
    public static void main(String[] args) {
        Flux<Integer> flux = Flux.range(1, 5); // Flux is a Publisher
        flux.subscribe(new Subscriber<Integer>() {
            private Subscription subscription;

            @Override
            public void onSubscribe(Subscription s) {
                this.subscription = s;
                System.out.println("Subscribed!");
                subscription.request(2); // request first 2 elements
            }

            @Override
            public void onNext(Integer item) {
                System.out.println("Received: " + item);
                subscription.request(1); // request one more each time
            }

            @Override
            public void onError(Throwable t) {
                System.out.println("Error: " + t.getMessage());
            }

            @Override
            public void onComplete() {
                System.out.println("Completed!");
            }
        });
    }
}

