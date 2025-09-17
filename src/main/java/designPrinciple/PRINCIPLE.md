# Content
[SOLID](#SOLID) | [DRY](#DRY) | [KISS](#KISS) | [YAGNI](#YAGNI) | 
[Composition over Inheritance](#Composition-over-Inheritance) | [Law of Demeter](#Law-of-Demeter) | 
[Encapsulation](#Encapsulation) | [Separation of Concerns](Separation-of-Concerns)

## SOLID
#### S – Single Responsibility Principle (SRP)
- A class should have only one reason to change. 
- Each class should do one thing and do it well.
#### O – Open/Closed Principle (OCP)
- Software entities should be open for extension but closed for modification. 
- You should be able to add new functionality without changing existing code.
```java
class Invoice {
    private double amount;

    public Invoice(double amount) {
        this.amount = amount;
    }
    public double getAmount() {
        return amount;
    }
}
class InvoicePrinter {
    public void print(Invoice invoice, String type) {
        if (type.equals("JSON")) {
            System.out.println("{ \"amount\": " + invoice.getAmount() + " }");
        } else if (type.equals("XML")) {
            System.out.println("<invoice><amount>" + invoice.getAmount() + "</amount></invoice>");
        }
    }
}
```
- Problem:
  - Every time you want to support a new format (CSV, HTML, PDF, etc.), you have to modify InvoicePrinter. 
  - This violates OCP since we’re constantly editing tested code.
- Solution:
```java
interface InvoicePrinter {
    void print(Invoice invoice);
}
class JsonInvoicePrinter implements InvoicePrinter {
    @Override
    public void print(Invoice invoice) {
        System.out.println("{ \"amount\": " + invoice.getAmount() + " }");
    }
}

class XmlInvoicePrinter implements InvoicePrinter {
    @Override
    public void print(Invoice invoice) {
        System.out.println("<invoice><amount>" + invoice.getAmount() + "</amount></invoice>");
    }
}
class Invoice {
    private double amount;

    public Invoice(double amount) {
        this.amount = amount;
    }

    public double getAmount() {
        return amount;
    }
}
```
- Now, if we want a CSV printer, we just add a new class:
```java
class CsvInvoicePrinter implements InvoicePrinter {
    @Override
    public void print(Invoice invoice) {
        System.out.println("amount," + invoice.getAmount());
    }
}
```
#### L – Liskov Substitution Principle (LSP)
- Subtypes class must be substitutable for their base types class. 
- Derived classes should extend base classes without changing their behavior.
- Bad Example (violates LSP)
```java
class Bird {
    public void fly() {
        System.out.println("Bird is flying");
    }
}

class Sparrow extends Bird {
    @Override
    public void fly() {
        System.out.println("Sparrow is flying");
    }
}

class Ostrich extends Bird {
    @Override
    public void fly() {
        throw new UnsupportedOperationException("Ostriches can't fly!");
    }
}
```
- Problem:
  - Ostrich is a Bird, but it breaks expectations: if client code calls fly(), it crashes.
  - Subclass violates the contract of the parent class.
- Solution:
```java
interface Bird {
    void eat();
}

interface Flyable {
    void fly();
}

class Sparrow implements Bird, Flyable {
    public void eat() {
        System.out.println("Sparrow eats seeds");
    }

    public void fly() {
        System.out.println("Sparrow is flying");
    }
}

class Ostrich implements Bird {
    public void eat() {
        System.out.println("Ostrich eats plants");
    }
}
```
- Benefits:
  - Now, if the client expects something flyable, it uses Flyable interface. 
  - No subclass breaks parent behavior. 
  - Substitution works correctly: anywhere Bird is expected, Sparrow or Ostrich can be used safely.
####  I – Interface Segregation Principle (ISP)
- Clients should not be forced to depend on interfaces they do not use. 
- Split large interfaces into smaller, more specific ones.
- Bad Example (violates DIP)
#### D – Dependency Inversion Principle (DIP)
- High-level modules should not depend on low-level modules. Both should depend on abstractions.
- Use interfaces or abstract classes to decouple components.
```java
class MySqlDatabase {
    public void save(String data) {
        System.out.println("Saving data in MySQL: " + data);
    }
}

class UserService {
    private MySqlDatabase database = new MySqlDatabase();

    public void addUser(String name) {
        database.save(name);
    }
}
```
- Problem:
  - UserService is tightly coupled to MySqlDatabase. 
  - If we want to switch to another database (like MongoDB), we have to modify UserService.
- Solution:
```java
// Abstraction
interface Database {
    void save(String data);
}

// Low-level module 1
class MySqlDatabase implements Database {
    public void save(String data) {
        System.out.println("Saving data in MySQL: " + data);
    }
}

// Low-level module 2
class MongoDatabase implements Database {
    public void save(String data) {
        System.out.println("Saving data in MongoDB: " + data);
    }
}

// High-level module
class UserService {
    private Database database;

    // Dependency is injected via constructor
    public UserService(Database database) {
        this.database = database;
    }

    public void addUser(String name) {
        database.save(name);
    }
}
// Usage
public class Main {
  public static void main(String[] args) {
    Database db = new MySqlDatabase(); // or new MongoDatabase();
    UserService userService = new UserService(db);
    userService.addUser("Alice");
  }
}
```
- Benefits:
  - UserService depends on the Database abstraction, not a concrete implementation. 
  - We can easily switch databases without changing UserService code. 
  - This promotes flexibility and easier testing (we can mock Database).
## DRY
- Don’t Repeat Yourself 
- Avoid duplicating logic. Reuse code through abstraction, inheritance, or composition.
## KISS 
- Keep It Simple, Stupid
- Design should be as simple as possible. Avoid unnecessary complexity.
## YAGNI 
- You Aren’t Gonna Need It
- Don’t implement functionality until it’s actually needed.
## Composition-over-Inheritance
- Favor object composition (using objects inside other objects) over class inheritance to promote flexibility.
## Law-of-Demeter
- LOD
- "Talk only to your immediate friends."
- A class should only interact with its direct dependencies, not with the dependencies of its dependencies.
## Encapsulation
- Keep internal details hidden and expose only what’s necessary through public interfaces.
## Separation-of-Concerns
- Divide your application into distinct sections, each handling a specific responsibility (e.g., UI, business logic, data access).