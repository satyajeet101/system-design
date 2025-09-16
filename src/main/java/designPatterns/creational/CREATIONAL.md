# Content
[Singleton](#Singleton) | [Factory Method](#Factory-Method) | [Abstract Factory](#Abstract-Factory) | 
[Builder](#Builder) | [Prototype](#Prototype)

## Singleton
Singleton is a design pattern that restricts the instantiation of a class to a single instance and provides a global point of access to that instance. 
This is useful when exactly one object is needed to coordinate actions across the system.

## Factory-Method
Factory Method is a creational design pattern that provides an interface for creating objects in a superclass, but allows subclasses to alter the type of objects that will be created.
#### Step 1: Define a Common Interface
```java
public interface Notification {
    void notifyUser();
}
```
#### Step 2: Create Concrete Classes Implementing the Interface
```java
public class EmailNotification implements Notification {
    public void notifyUser() {
        System.out.println("Sending an Email Notification");
    }
}

public class SMSNotification implements Notification {
    public void notifyUser() {
        System.out.println("Sending an SMS Notification");
    }
}
```  
#### Step 3: Create a Factory Class
```java
public class NotificationFactory {
    public Notification createNotification(String type) {
        if (type == null || type.isEmpty())
            return null;
        if ("EMAIL".equalsIgnoreCase(type))
            return new EmailNotification();
        else if ("SMS".equalsIgnoreCase(type))
            return new SMSNotification();
        return null;
    }
}
```
#### Step 4: Use the Factory to Get Object of Concrete Class by Passing an Information Such as Type
```java
public class Main {
    public static void main(String[] args) {
        NotificationFactory factory = new NotificationFactory();

        Notification notification = factory.createNotification("EMAIL");
        notification.notifyUser();
    }
}
```
## Abstract-Factory
Abstract Factory is a creational design pattern that provides an interface for creating families of related or dependent objects without specifying their concrete classes.
#### Step 1: Define Abstract Products
```java
public interface EmailNotification {
    void sendEmail();
}

public interface SMSNotification {
    void sendSMS();
}
```
#### Step 2: Create Platform-Specific Implementations
```java
public class MobileEmailNotification implements EmailNotification {
    public void sendEmail() {
        System.out.println("Sending mobile email notification");
    }
}

public class WebEmailNotification implements EmailNotification {
    public void sendEmail() {
        System.out.println("Sending web email notification");
    }
}

public class MobileSMSNotification implements SMSNotification {
    public void sendSMS() {
        System.out.println("Sending mobile SMS notification");
    }
}

public class WebSMSNotification implements SMSNotification {
    public void sendSMS() {
        System.out.println("Sending web SMS notification");
    }
}
```
#### Step 3: Create Abstract Factory Interface
```java
public interface NotificationFactory {
    EmailNotification createEmailNotification();
    SMSNotification createSMSNotification();
}
```
#### Step 4: Create Concrete Factories
```java
public class MobileNotificationFactory implements NotificationFactory {
    public EmailNotification createEmailNotification() {
        return new MobileEmailNotification();
    }

    public SMSNotification createSMSNotification() {
        return new MobileSMSNotification();
    }
}

public class WebNotificationFactory implements NotificationFactory {
    public EmailNotification createEmailNotification() {
        return new WebEmailNotification();
    }

    public SMSNotification createSMSNotification() {
        return new WebSMSNotification();
    }
}
```
#### Step 5: Use the Abstract Factory
```java
public class NotificationService {
    private NotificationFactory factory;

    public NotificationService(NotificationFactory factory) {
        this.factory = factory;
    }

    public void sendNotifications() {
        factory.createEmailNotification().sendEmail();
        factory.createSMSNotification().sendSMS();
    }
}

public class Main {
    public static void main(String[] args) {
        NotificationFactory factory = new MobileNotificationFactory();
        NotificationService service = new NotificationService(factory);
        service.sendNotifications();
    }
}

```
## Builder
Builder is a creational design pattern that allows for the step-by-step construction of complex objects using a clear and fluent interface.
#### Step 1: Create the Product Class
```java
public class User {
    private String name;
    private String email;
    private int age;
    private String phone;

    // Private constructor
    private User(UserBuilder builder) {
        this.name = builder.name;
        this.email = builder.email;
        this.age = builder.age;
        this.phone = builder.phone;
    }

    // Getters (optional)

    public static class UserBuilder {
        private String name;
        private String email;
        private int age;
        private String phone;

        public UserBuilder(String name, String email) {
            this.name = name;
            this.email = email;
        }

        public UserBuilder age(int age) {
            this.age = age;
            return this;
        }

        public UserBuilder phone(String phone) {
            this.phone = phone;
            return this;
        }

        public User build() {
            return new User(this);
        }
    }
}
```
#### Step 2: Use the Builder to Create Objects
```java
public class Main {
    public static void main(String[] args) {
        User user = new User.UserBuilder("Satyajeet", "satyajeet@example.com")
                            .age(30)
                            .phone("123-456-7890")
                            .build();

        System.out.println("User created: " + user);
    }
}
```
#### Real-World Use Cases
- Creating configuration objects (e.g., HttpClient, DatabaseConfig)
- UI component builders (e.g., AlertDialog.Builder in Android)
- Fluent APIs in libraries like Lombok, Jackson, or Spring
## Prototype
Prototype is a creational design pattern that allows for the cloning of existing objects to create new ones, rather than creating new instances from scratch. This is particularly useful when the cost of creating a new object is high.
#### Step 1: Create a Prototype Interface
```java
public interface Prototype {
    Prototype clone();
}
```
#### Step 2: Create a Concrete Class That Implements Cloning
```java
public class User implements Prototype {
    private String name;
    private String email;

    public User(String name, String email) {
        this.name = name;
        this.email = email;
    }

    @Override
    public Prototype clone() {
        return new User(name, email);
    }

    @Override
    public String toString() {
        return "User{name='" + name + "', email='" + email + "'}";
    }
}
```
#### Step 3: Use the Prototype to Clone Objects
```java
public class Main {
    public static void main(String[] args) {
        User originalUser = new User("Satyajeet", "satyajeet@example.com");

        User clonedUser = (User) originalUser.clone();

        System.out.println("Original: " + originalUser);
        System.out.println("Cloned: " + clonedUser);
    }
}
```
#### Real-World Use Cases
- UI component duplication (e.g., duplicating a styled button). 
- Game development (e.g., cloning enemies or items). 
- Document editors (e.g., duplicating templates or elements).