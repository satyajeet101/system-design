# Content
[Jackson](#Jackson) [TypeReference](#TypeReference) | [CRUD File](CRUD-File)

## Jackson

Jackson is a popular JSON processing library for Java. It provides a fast and efficient way to convert Java objects to JSON and vice versa. Jackson is widely used in Spring Boot applications for handling JSON data in RESTful APIs.

### Features

- **Object Mapping**: Jackson can automatically map Java objects to JSON and vice versa using annotations.
- **Streaming API**: Jackson provides a streaming API for reading and writing JSON data efficiently.
- **Data Binding**: Jackson supports data binding, allowing you to convert JSON data into Java objects and vice versa easily.

### Usage

To use Jackson in a Spring Boot application, you need to include the `jackson-databind` dependency in your `pom.xml` file:

```xml
<dependency>
    <groupId>com.fasterxml.jackson.core</groupId>
    <artifactId>jackson-databind</artifactId>
    <version>2.15.2</version>
</dependency>
```

Once you have the dependency, you can use Jackson's `ObjectMapper` class to read and write JSON data:

```java
@JsonIgnoreProperties(ignoreUnknown = true)//By default, its false and in that case we will be getting error as it will not be able to map all the attributes from URL
@Data
class Student{
    private String name;
    private int id;
}

class User{
    String name;
    List<Tasks> tasksList;
}

class Tasks{
    String task;
    Boolean isDone;
}
```
```java
import com.fasterxml.jackson.databind.ObjectMapper;

public class JsonExample {
    public static void main(String[] args) throws Exception {
        ObjectMapper objectMapper = new ObjectMapper();
        String json = "{\"name\":\"Satya\",\"id\":75061}";
        
        // Convert JSON to Java object
        Student student = objectMapper.readValue(json, Student.class);
        System.out.println(student.getName());
        System.out.println(student.getId());
        
        // Convert Java object to JSON
        String jsonString = objectMapper.writeValueAsString(student);
        System.out.println("JSON: " + jsonString);
        
        //Using URL
        URL url = new URL("https://jsonplaceholder.typicode.com/users");
        List<Student> student = objectMapper.readValue(url, new TypeReference<List<Student>>(){});

        Map<String, User> result = mapper.readValue(json, new TypeReference<Map<String, User>>() {});

        Map<String, List<Task>> userTasks = mapper.readValue(json, new TypeReference<Map<String, List<Task>>>() {});
    }
}
```
| Use case               | TypeReference |
|------------------------|---------------|
| List of custom objects |new TypeReference<List<Task>>() {}|
| Map of custom objects  |new TypeReference<Map<String, User>>() {}|
| Map of lists           |new TypeReference<Map<String, List<Task>>>() {}|
## TypeReference
TypeReference is a class provided by libraries like Jackson (a popular JSON processing library) to help with generic type information during deserialization

## CRUD-File
CRUD operations on files in Java can be performed using classes from the `java.io` and `java.nio.file` packages. Below are examples of how to create, read, update, and delete files in Java.
### Create a File
```java
import java.io.File;
import java.io.IOException;
public class FileCRUD {
    public static void main(String[] args) {
        try {
            File file = new File("example.txt");
            if (file.createNewFile()) {
                System.out.println("File created: " + file.getName());
            } else {
                System.out.println("File already exists.");
            }
        } catch (IOException e) {
            System.out.println("An error occurred.");
            e.printStackTrace();
        }
    }
}
```
### Writing to file
```java
import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.util.Scanner;   
public class FileCRUD {
    public static void main(String[] args) {
        // Writing to a file
        try {
            //Overwrite the existing file
            FileWriter writer = new FileWriter("example.txt");
            writer.write("Hello, World!");

            // Append to the existing file
            writer = new FileWriter("example.txt", true);
            writer.write("\nAppended text.");
            
            writer.close();
            System.out.println("Successfully wrote to the file.");
        } catch (IOException e) {
            System.out.println("An error occurred.");
            e.printStackTrace();
        }

    }
}
```
### Reading from file
```java
import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.util.Scanner;   
public class FileCRUD {
    public static void main(String[] args) {
        // Reading from a file
        try {
            File file = new File("example.txt");
            Scanner reader = new Scanner(file);
            while (reader.hasNextLine()) {
                String data = reader.nextLine();
                System.out.println(data);
            }
            reader.close();
        } catch (FileNotFoundException e) {
            System.out.println("File not found.");
            e.printStackTrace();
        }
    }
}
```
### Delete a File
```java
import java.io.File;
public class FileCRUD {
    public static void main(String[] args) {
        // Deleting a file
        File file = new File("example.txt");
        if (file.delete()) {
            System.out.println("Deleted the file: " + file.getName());
        } else {
            System.out.println("Failed to delete the file.");
        }
    }
}
```
### BufferedWriter – buffers output for efficiency
```java
BufferedWriter writer = new BufferedWriter(new FileWriter("output.txt"));
writer.write("Hello, World!");
writer.close();
```
### PrintWriter – convenient for formatted output
```java
PrintWriter writer = new PrintWriter("output.txt");
writer.println("Hello, World!");
writer.close();
```

### Write JSON to a File
```java
ObjectMapper mapper = new ObjectMapper();

Map<String, List<Task>> userTasks = new HashMap<>();
userTasks.put("Alice", Arrays.asList(new Task("Run", true), new Task("Walk", false)));
userTasks.put("Bob", Arrays.asList(new Task("Code", true)));

// Write to file
mapper.writeValue(new File("tasks.json"), userTasks);
```
