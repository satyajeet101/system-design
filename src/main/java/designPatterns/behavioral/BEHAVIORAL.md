# Content
[Chain of Responsibility](#Chain-of-Responsibility) | [Command](#Command) | [Iterator](#Iterator) | 
[Mediator](#Mediator) | [Memento](#Memento) | [Observer](#Observer) | 
[State](#State) | [Strategy](#Strategy) | [Template Method](#Template-Method) | 
[Visitor](#Visitor)

## Chain of Responsibility

## Command

## Iterator

## Mediator

## Memento

## Observer
- The Observer Design Pattern is a behavioral design pattern used in software engineering to establish a one-to-many dependency between objects. 
When one object (called the subject) changes its state, all its dependents (called observers) are notified and updated automatically.
- Key Concepts:
  - Subject: The object that holds the state and notifies observers of changes.
  - Observer: The object that wants to be notified when the subject's state changes.
  - ConcreteSubject: A specific implementation of the subject that maintains a list of observers and notifies them of state changes.
  - ConcreteObserver: A specific implementation of the observer that updates its state based on notifications from the subject.
- Example:
```java
// Observer interface
interface Observer {
    void update(String message);
}

// Concrete Observer
class EmailClient implements Observer {
    public void update(String message) {
        System.out.println("Email received: " + message);
    }
}

// Subject
class NotificationService {
    private List<Observer> observers = new ArrayList<>();

    public void subscribe(Observer o) {
        observers.add(o);
    }

    public void unsubscribe(Observer o) {
        observers.remove(o);
    }

    public void notifyObservers(String message) {
        for (Observer o : observers) {
            o.update(message);
        }
    }
}
```
- Benefits
  - Promotes loose coupling 
  - Makes it easy to add new observers without modifying the subject 
  - Supports event-driven programming
## State
## Strategy
- The Strategy Design Pattern is a behavioral design pattern that enables selecting an algorithm's behavior at runtime.
- Key Concepts:
  - Strategy: An interface that defines a method for executing a specific algorithm.
  - ConcreteStrategy: A class that implements the Strategy interface and provides a specific algorithm.
  - Context: A class that uses a Strategy to perform a task. It maintains a reference to a Strategy object and delegates the task to it.
- Example:
```java
// Strategy interface
interface PaymentStrategy {
    void pay(int amount);
}

// Concrete strategies
class CreditCardPayment implements PaymentStrategy {
    public void pay(int amount) {
        System.out.println("Paid $" + amount + " using Credit Card.");
    }
}

class PayPalPayment implements PaymentStrategy {
    public void pay(int amount) {
        System.out.println("Paid $" + amount + " using PayPal.");
    }
}

// Context
class ShoppingCart {
    private PaymentStrategy paymentStrategy;

    public void setPaymentStrategy(PaymentStrategy strategy) {
        this.paymentStrategy = strategy;
    }

    public void checkout(int amount) {
        paymentStrategy.pay(amount);
    }
}
```
- Benefits:
  - Promotes the Open/Closed Principle by allowing new strategies to be added without modifying existing code
  - Enables dynamic selection of algorithms at runtime
  - Simplifies code by encapsulating algorithms in separate classes
## Template Method
## Visitor