# Content
[Copy](Copy) | [Immutable Object](#Immutable-Object) | [JVM Internals](#JVM-Internals)

## COPY
#### Shallow Copy
  - Creates a new object but copies references of nested objects
  - Changes in nested objects affect both original and copied object
  - Example: `Object.clone()`, `Arrays.copyOf()`, `System.arraycopy()`
  - Use Case: When nested objects are immutable or shared
```java
    class Address {
        String city;
        Address(String city) { this.city = city; }
    }

    class Person implements Cloneable {
        String name;
        Address address;
        Person(String name, Address address) {
            this.name = name;
            this.address = address;
        }
        protected Object clone() throws CloneNotSupportedException {
            return super.clone(); // Shallow copy
        }
    }

    public class ShallowCopyExample {
        public static void main(String[] args) throws CloneNotSupportedException {
            Address addr = new Address("New York");
            Person p1 = new Person("Alice", addr);
            Person p2 = (Person) p1.clone();

            p2.name = "Bob";
            p2.address.city = "Los Angeles"; // Affects both p1 and p2

            System.out.println(p1.name + " lives in " + p1.address.city); // Alice lives in Los Angeles
            System.out.println(p2.name + " lives in " + p2.address.city); // Bob lives in Los Angeles
        }
    }
  ```
#### Deep Copy
    - Creates a new object and recursively copies all nested objects
    - Changes in nested objects do not affect the original object
    - Example: Custom copy constructors, serialization/deserialization
    - Use Case: When nested objects are mutable and should not be shared
   ```java
        class Address {
            String city;
            Address(String city) { this.city = city; }
            Address(Address other) { this.city = other.city; } // Copy constructor
        }
    
        class Person {
            String name;
            Address address;
            Person(String name, Address address) {
                this.name = name;
                this.address = address;
            }
            Person(Person other) { // Deep copy constructor
                this.name = other.name;
                this.address = new Address(other.address);
            }
        }
    
        public class DeepCopyExample {
            public static void main(String[] args) {
                Address addr = new Address("New York");
                Person p1 = new Person("Alice", addr);
                Person p2 = new Person(p1); // Deep copy
    
                p2.name = "Bob";
                p2.address.city = "Los Angeles"; // Does not affect p1
    
                System.out.println(p1.name + " lives in " + p1.address.city); // Alice lives in New York
                System.out.println(p2.name + " lives in " + p2.address.city); // Bob lives in Los Angeles
            }
        }
   ```
#### Copy Utilities
  - `System.arraycopy()`: Efficiently copies array elements
    ```java
        public class ArrayCopyExample {
            public static void main(String[] args) {
                int[] original = {1, 2, 3, 4, 5};
                int[] copy = new int[original.length];
                
                System.arraycopy(original, 0, copy, 0, original.length);
                
                copy[0] = 10; // Modify copy
                
                System.out.println("Original: " + Arrays.toString(original)); // [1, 2, 3, 4, 5]
                System.out.println("Copy: " + Arrays.toString(copy));         // [10, 2, 3, 4, 5]
            }
        }
    ```
  - `Arrays.copyOf()`: Creates a new array with copied elements
    ```java
        public class ArraysCopyOfExample {
            public static void main(String[] args) {
                int[] original = {1, 2, 3, 4, 5};
                int[] copy = Arrays.copyOf(original, original.length);
                
                copy[0] = 10; // Modify copy
                
                System.out.println("Original: " + Arrays.toString(original)); // [1, 2, 3, 4, 5]
                System.out.println("Copy: " + Arrays.toString(copy));         // [10, 2, 3, 4, 5]
            }
        }
    ```
  - `Object.clone()`: Creates a shallow copy of an object (if it implements `Cloneable`)
  - Third-party libraries: Libraries like Apache Commons Lang (`SerializationUtils.clone()`) can simplify deep copying
## Immutable Object
