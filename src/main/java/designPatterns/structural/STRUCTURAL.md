# Content
[Adapter](#Adapter) | [Bridge](#Bridge) | [Composite](#Composite) | 
[Decorator](#Decorator) | [Facade](#Facade) | [Flyweight](#Flyweight) | 
[Proxy](#Proxy)

## Adapter
- The Adapter pattern allows incompatible interfaces to work together by providing a bridge (an adapter) between them.
- Converts the interface of a class into another interface clients expect.
- When to use 
  - When you have a legacy class or a third-party library that doesn’t match the interface you need. 
  - When you want to make two incompatible interfaces compatible without changing their source code.
- Example
  - Suppose you’re building a payment system. 
  - Your app expects a method pay(int amount) in a PaymentProcessor interface. 
  - But a third-party library provides makePayment(double money).
```java
// Target interface expected by the client
interface PaymentProcessor {
    void pay(int amount);
}
// Adaptee class from a third-party library
class ThirdPartyPayment {
    public void makePayment(double money) {
        System.out.println("Paid: $" + money);
    }
}
// Adapter class that makes ThirdPartyPayment compatible with PaymentProcessor
class PaymentAdapter implements PaymentProcessor {
    private ThirdPartyPayment thirdPartyPayment;
    public PaymentAdapter(ThirdPartyPayment thirdPartyPayment) {
        this.thirdPartyPayment = thirdPartyPayment;
    }
    public void pay(int amount) {
        // Convert int to double and delegate to the adaptee
        thirdPartyPayment.makePayment((double) amount);
    }
}
// Client code
public class Client {
    public static void main(String[] args) {
        ThirdPartyPayment thirdPartyPayment = new ThirdPartyPayment();
        PaymentProcessor paymentProcessor = new PaymentAdapter(thirdPartyPayment);
        paymentProcessor.pay(100); // Outputs: Paid: $100.0
    }
}
```
## Bridge
- The Bridge pattern decouples an abstraction from its implementation so that the two can vary independently.
- When to use
  - When you want to avoid a permanent binding between an abstraction and its implementation.
  - When both the abstraction and implementation should be extensible by subclassing.
  - When you want to hide implementation details from the client.