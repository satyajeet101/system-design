package features.reactiveApp;

import org.junit.jupiter.api.Test;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

public class ReactiveImplTest {
    @Test
    public void monoTest(){
        Mono<?>monoRes = Mono.just("Hello from Mono")
                .then(Mono.error(new RuntimeException("Exception from Mono")))
                .log();
        monoRes.subscribe(System.out::println, (e)-> System.out.println(e.getMessage()));
    }
    @Test
    public void fluxTest(){
        Flux<String>fluxRes = Flux.just("Flux", "will", "produce", "n", "event")
                .concatWithValues("this will be appended with existing flux event")
                .concatWith(Flux.error(new RuntimeException("Throwing error")))
                .concatWithValues("this will not be added as it cot error before this")
                .log();//To log at each step
        fluxRes.subscribe(System.out::println, (e)-> System.out.println(e.getMessage()));
    }
}
