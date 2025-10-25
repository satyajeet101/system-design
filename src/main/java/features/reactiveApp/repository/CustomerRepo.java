package features.reactiveApp.repository;

import features.reactiveApp.dto.Customer;
import org.springframework.stereotype.Component;
import reactor.core.publisher.Flux;

import java.time.Duration;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.IntStream;

@Component
public class CustomerRepo {
    public List<Customer> getCustomers(){
        return IntStream.rangeClosed(1, 10)
                .peek((i)-> System.out.println("processing count : "+ i))
                .peek(CustomerRepo::timeBlock)//sleeping to make it blocking
                .mapToObj((i) -> new Customer(i, "customer" + i)).collect(Collectors.toList());
    }
    public static void timeBlock(int i) {
        try {
            Thread.sleep(100);
        } catch (InterruptedException e) {
            throw new RuntimeException(e);
        }
    }

    public Flux<Customer> getCustomersFlux(){
        return Flux.range(1, 10)
                .doOnNext((i)-> System.out.println("processing - "+i))
                .delayElements(Duration.ofSeconds(1))
                .map((i)->new Customer(i, "Customer-"+i));
    }
}
