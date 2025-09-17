# Content
[Chain of Responsibility](#Chain-of-Responsibility) | [Command](#Command) | [Iterator](#Iterator) | 
[Mediator](#Mediator) | [Memento](#Memento) | [Observer](#Observer) | 
[State](#State) | [Strategy](#Strategy) | [Template Method](#Template-Method) | 
[Visitor](#Visitor)

## Chain of Responsibility
- The Chain of Responsibility Design Pattern is a behavioral design pattern that allows multiple objects to handle a request without the sender needing to know which object will ultimately handle it.
- Key Concepts:
  - Handler: An interface or abstract class that defines a method for handling requests and a reference to the next handler in the chain.
  - ConcreteHandler: A class that implements the Handler interface and provides specific handling logic. If it cannot handle the request, it passes it to the next handler in the chain.
  - Client: The object that initiates the request and sends it to the first handler in the chain.
- Example:
```java
// Handler interface
interface Handler {
    void setNext(Handler handler);
    void handleRequest(String request);
}
// Concrete Handlers
class AuthHandler implements Handler {
    private Handler next;
    public void setNext(Handler handler) {
        this.next = handler;
    }
    public void handleRequest(String request) {
        if (request.equals("AUTH")) {
            System.out.println("Authentication successful.");
        } else if (next != null) {
            next.handleRequest(request);
     }
    }
}
class LoggingHandler implements Handler {
    private Handler next;
    public void setNext(Handler handler) {
        this.next = handler;
    }
    public void handleRequest(String request) {
        if (request.equals("LOG")) {
            System.out.println("Logging request.");
        } else if (next != null) {
            next.handleRequest(request);
        }
    }
}
class DataHandler implements Handler {
    private Handler next;
    public void setNext(Handler handler) {
        this.next = handler;
    }
    public void handleRequest(String request) {
        if (request.equals("DATA")) {
            System.out.println("Handling data request.");
        } else if (next != null) {
            next.handleRequest(request);
        }
    }
}

// Client
class Client {
    public static void main(String[] args) {
        Handler authHandler = new AuthHandler();
        Handler loggingHandler = new LoggingHandler();
        Handler dataHandler = new DataHandler();
        authHandler.setNext(loggingHandler);
        loggingHandler.setNext(dataHandler);
        authHandler.handleRequest("LOG");
    }
}
```
## Command
- The Command Design Pattern is a behavioral design pattern that encapsulates a request as an object, allowing for parameterization of clients with queues, requests, and operations.
- Key Concepts:
  - Command: An interface that defines a method for executing a specific action.
  - ConcreteCommand: A class that implements the Command interface and defines the binding between a receiver and an action.
  - Receiver: The object that knows how to perform the action associated with the command.
  - Invoker: The object that holds and invokes the command.
  - Client: The object that creates the command and sets its receiver.
- Example:
```java
// Command interface
interface Command {
    void execute();
}
// Concrete Command
class LightOnCommand implements Command {
    private Light light;    
    public LightOnCommand(Light light) {
        this.light = light;
    }
    public void execute() {
        light.turnOn();
    }
}
class LightOffCommand implements Command {
    private Light light;    
    public LightOffCommand(Light light) {
        this.light = light;
    }
    public void execute() {
        light.turnOff();
    }
}   
// Receiver
class Light {
    public void turnOn() {
        System.out.println("The light is ON");
    }
    public void turnOff() {
        System.out.println("The light is OFF");
    }
}
// Invoker
class RemoteControl {
    private Command command;
    public void setCommand(Command command) {
        this.command = command;
    }
    public void pressButton() {
        command.execute();
    }
}
// Client
class Client {
    public static void main(String[] args) {
        Light light = new Light();
        Command lightOn = new LightOnCommand(light);
        Command lightOff = new LightOffCommand(light);
        RemoteControl remote = new RemoteControl();
        remote.setCommand(lightOn);
        remote.pressButton();
    }
}
```

## Iterator
- The Iterator Design Pattern is a behavioral design pattern that provides a way to access the elements of a collection sequentially without exposing its underlying representation.
- Key Concepts:
  - Iterator: An interface that defines methods for traversing a collection (e.g., hasNext(), next()).
  - ConcreteIterator: A class that implements the Iterator interface and maintains the current position in the collection.
  - Aggregate: An interface that defines a method for creating an iterator.
    - ConcreteAggregate: A class that implements the Aggregate interface and holds the collection of items. 
    - It provides a method to create an iterator for the collection.
- Example:
```java
// Iterator interface
interface Iterator {
    boolean hasNext();
    Object next();
}
// Concrete Iterator
class NameIterator implements Iterator {
    private String[] names;
    private int position = 0;   
    public NameIterator(String[] names) {
        this.names = names;
    }
    public boolean hasNext() {
        return position < names.length;
    }
    public Object next() {
        return names[position++];
    }
}
// Aggregate interface
interface Aggregate {
    Iterator createIterator();
}
// Concrete Aggregate
class NameRepository implements Aggregate {
    private String[] names = {"Alice", "Bob", "Charlie"};   
    public Iterator createIterator() {
        return new NameIterator(names);
    }   
}
// Client
class Client {
    public static void main(String[] args) {
        NameRepository repository = new NameRepository();
        Iterator iterator = repository.createIterator();
        while (iterator.hasNext()) {    
            String name = (String) iterator.next();
            System.out.println("Name: " + name);
        }
    }
}
```

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
- The Template Method Design Pattern is a behavioral design pattern that defines the skeleton of an algorithm in a method, deferring some steps to subclasses.
- Key Concepts:
  - Abstract Class: A class that defines the template method and declares abstract methods for the steps that need to be implemented by subclasses.
  - Concrete Class: A class that extends the abstract class and provides implementations for the abstract methods.
  - Template Method: A method in the abstract class that defines the overall structure of the algorithm, calling the abstract methods in a specific order.
- Example:
```java
// Abstract class
abstract class DataProcessor {
    // Template method
    public void process() {
        readData();
        processData();
        saveData();
    }
    abstract void readData();
    abstract void processData();
    abstract void saveData();
}
// Concrete class
class CSVDataProcessor extends DataProcessor {
    void readData() {
        System.out.println("Reading data from CSV file.");
    }
    void processData() {
        System.out.println("Processing CSV data.");
    }
    void saveData() {
        System.out.println("Saving processed data to CSV file.");
    }
}
// Client
class Client {
    public static void main(String[] args) {    
        DataProcessor processor = new CSVDataProcessor();
        processor.process();
    }   
}
```
## Visitor