package features.jsonReader;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.ObjectReader;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import java.io.IOException;
import java.lang.reflect.Type;
import java.net.MalformedURLException;
import java.net.URL;
import java.util.List;

public class JsonReaderImpl{
    public static void main(String[] args) throws IOException {
        ObjectMapper objectMapper = new ObjectMapper();
        String json = "{\"name\":\"Satya\",\"id\":75061}";
        URL url = new URL("https://jsonplaceholder.typicode.com/users");
        List<Student> student = objectMapper.readValue(url, new TypeReference<List<Student>>(){});
        String jsonString = objectMapper.writeValueAsString(student);
        System.out.println(jsonString);
    }
}
/*

{
  "user": {
    "name": "Alice",
    "tasks": [
      { "task": "Run", "isDone": true },
      { "task": "Walk", "isDone": false }
    ]
  }
}
 */

class User{
    String name;
    List<Tasks> tasksList;
}
class Tasks{
    String task;
    Boolean isDone;
}
/*
{
  "Alice": [
    { "task": "Run", "isDone": true },
    { "task": "Walk", "isDone": false }
  ],
  "Bob": [
    { "task": "Code", "isDone": true }
  ]
}
 */

@JsonIgnoreProperties(ignoreUnknown = true)
@Data
class Student{
    private String name;
    private int id;
}


