# Content
[Key-classes in Reflection](#Key-classes-in-Reflection) | [Common Use Cases](#Common-Use-Cases) | [Example Code Snippet](#Example-Code-Snippet)

## Key-classes-in-Reflection
- `Class`: Represents a class or interface in the Java programming language.
- `Method`: Represents a method in a class.
- `Field`: Represents a field in a class.
- `Constructor`: Represents a constructor in a class.
- `Class`: Represents classes and interfaces in a running Java application.
- `Modifier`: Provides static methods and constants to decode class and member access modifiers.
- `Array`: Provides static methods to dynamically create and access Java arrays.
- `Proxy`: Provides static methods for creating dynamic proxy classes and instances.

## Common-Use-Cases
- Inspecting class metadata (e.g., methods, fields, constructors).
- Dynamically invoking methods.
- Accessing and modifying fields.
- Creating new instances of classes.
- Implementing dynamic proxies.
- Analyzing annotations at runtime.
- Loading classes dynamically.
- Bypassing access control checks (e.g., accessing private fields).
- Framework development (e.g., ORM, dependency injection).
- Testing and mocking frameworks.
- Serialization and deserialization of objects.
- Debugging and profiling tools.
- Building IDEs and code analysis tools.
- Implementing aspect-oriented programming (AOP).

## Example-Code-Snippet
```java

public class Person {
    private String name = "Alice";

    public void sayHello() {
        System.out.println("Hello!");
    }
}

class ReflectionExample {
    public static void main(String[] args) throws Exception {
        // Load the class
        Class<?> clazz = Class.forName("Person");

        // Create an instance
        Object obj = clazz.getDeclaredConstructor().newInstance();

        // Access private field
        Field field = clazz.getDeclaredField("name");
        field.setAccessible(true);
        System.out.println("Name: " + field.get(obj));

        // Call method
        Method method = clazz.getMethod("sayHello");
        method.invoke(obj);
    }
}
```
