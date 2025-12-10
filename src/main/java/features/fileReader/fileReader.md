# Content
(BufferedReader)(#BufferedReader) | (Scanner)(#Scanner) | Streams

## BufferedReader
- Efficient for reading text line by line

```java
    public static void readFile(){
        try(BufferedReader br = new BufferedReader(new InputStreamReader(Demo.class.getResourceAsStream("/io.txt")))) {
            /*BufferedReader br = new BufferedReader(new FileReader("src/main/resources/io.txt"))
                    this will also work but, 
                    it uses a file system path (src/main/resources/io.txt) with FileReader, 
                    which is not recommended for reading resources in a Spring Boot/Maven project. 
                    Resources should be loaded from the classpath to ensure portability and correct behavior after building the project.
             */
            String line = "";
            while((line = br.readLine())!= null){
                System.out.println(line);
            }
        }
        catch (IOException e){
            System.out.println("Here is the exception !! "+e.getMessage());
        }
    }
```

## Scanner
- Versatile for parsing input with various delimiters

```java
    public static void readFileWithScanner(){
        try(Scanner scanner = new Scanner(new File("src/main/resources/io.txt"))) {
            /*Scanner scanner = new Scanner(Demo.class.getResourceAsStream("/io.txt"))
                    this will also work and is preferred for reading resources in a Spring Boot/Maven project.
             */
            while(scanner.hasNextLine()){
                System.out.println(scanner.nextLine());
            }
        }
        catch (FileNotFoundException e){
            System.out.println("Here is the exception !! "+e.getMessage());
        }
    }
```
## Streams
- Modern approach using Java 8 Streams API

```java
    public static void readFileWithStreams(){
        try(Stream<String> lines = Files.lines(Paths.get("src/main/resources/io.txt"))) {
            lines.forEach(System.out::println);
        }
        catch (IOException e){
            System.out.println("Here is the exception !! "+e.getMessage());
        }
    }
```
- Note: For reading resources in a Spring Boot/Maven project, use classpath resource loading methods instead of file system paths to ensure portability and correct behavior after building the project.

