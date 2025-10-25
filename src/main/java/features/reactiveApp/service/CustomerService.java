package features.reactiveApp.service;

import features.reactiveApp.dto.Customer;
import features.reactiveApp.repository.CustomerRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import reactor.core.publisher.Flux;

import java.util.List;

@Service
public class CustomerService {
    @Autowired
    CustomerRepo customerRepo;
    public List<Customer> getCustomers(){
        return customerRepo.getCustomers();
    }
    public Flux<Customer> getCustomersFlux(){
        return customerRepo.getCustomersFlux();
    }
}
