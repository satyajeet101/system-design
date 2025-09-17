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
  - When you want to switch implementations at runtime.
- Example
  - Consider a remote control (abstraction) that can work with different devices (implementation) like TV and Radio.
```java
// Implementor interface
interface Device {
    void turnOn();
    void turnOff();
}
// Concrete Implementor 1
class TV implements Device {
    public void turnOn() {
        System.out.println("TV is ON");
    }
    public void turnOff() {
        System.out.println("TV is OFF");
    }
}
// Concrete Implementor 2
class Radio implements Device {
    public void turnOn() {
        System.out.println("Radio is ON");
    }
    public void turnOff() {
        System.out.println("Radio is OFF");
    }
}
// Abstraction
abstract class RemoteControl {
    protected Device device;
    public RemoteControl(Device device) {
        this.device = device;
    }
    public abstract void turnOn();
    public abstract void turnOff();
}
// Refined Abstraction  
class BasicRemoteControl extends RemoteControl {
    public BasicRemoteControl(Device device) {
        super(device);
    }
    public void turnOn() {
        device.turnOn();
    }
    public void turnOff() {
        device.turnOff();
    }
}
// Client code
public class Client {
    public static void main(String[] args) {
        Device tv = new TV();
        RemoteControl remote = new BasicRemoteControl(tv);
        remote.turnOn();  // Outputs: TV is ON
        remote.turnOff(); // Outputs: TV is OFF
        Device radio = new Radio();
        remote = new BasicRemoteControl(radio);
        remote.turnOn();  // Outputs: Radio is ON
        remote.turnOff(); // Outputs: Radio is OFF
    }
}
```
## Composite
- The Composite pattern allows you to compose objects into tree structures to represent part-whole hierarchies. 
- It lets clients treat individual objects and compositions of objects uniformly.
  - When to use 
    - When you have a tree-like structure of objects.
    - When you want to treat individual objects and compositions of objects uniformly.
    - When you want to simplify client code that deals with complex tree structures.
  - Example
    - Consider a graphic design application where you can have shapes (like Circle, Square) and groups of shapes.
```java
// Component interface
interface Graphic {
    void draw();
}
// Leaf class
class Circle implements Graphic {
    public void draw() {
        System.out.println("Drawing Circle"); 
    }
}
// Leaf class
class Square implements Graphic {
    public void draw() {
        System.out.println("Drawing Square");
    }
}
// Composite class
class CompositeGraphic implements Graphic {
    private List<Graphic> graphics = new ArrayList<>();
    public void add(Graphic graphic) {
        graphics.add(graphic);
    }
    public void remove(Graphic graphic) {
        graphics.remove(graphic); 
    }
   public void draw() {
        for (Graphic graphic : graphics) {
            graphic.draw();
        }
    }
}
// Client code
public class Client {
    public static void main(String[] args) {
        Graphic circle1 = new Circle();
        Graphic circle2 = new Circle();
        Graphic square = new Square();
        CompositeGraphic composite = new CompositeGraphic();  
        composite.add(circle1);
        composite.add(circle2);
        composite.add(square);
        composite.draw();
        // Outputs:
        // Drawing Circle
        // Drawing Circle
        // Drawing Square
    }
}
```
## Decorator
- The Decorator pattern allows behavior to be added to individual objects, either statically or dynamically, without affecting the behavior of other objects from the same class.
- When to use
  - When you want to add responsibilities to individual objects dynamically and transparently, without affecting other objects.
  - When you want to avoid subclassing for extending functionality.
  - When you want to add functionality to objects at runtime.
- Example
  - Consider a text editor where you can add features like bold, italic, and underline to text.
```java
// Component interface
interface Text {
    String getContent();
}
// Concrete Component 
class PlainText implements Text {
    private String content;
    public PlainText(String content) {
        this.content = content;
    }
    public String getContent() {
        return content;
    }
}
// Decorator abstract class
abstract class TextDecorator implements Text {
    protected Text decoratedText;
    public TextDecorator(Text decoratedText) {
        this.decoratedText = decoratedText;
    }
    public String getContent() {
        return decoratedText.getContent();
    }
}
// Concrete Decorator 1
class BoldText extends TextDecorator {
    public BoldText(Text decoratedText) {
        super(decoratedText); 
    }
    public String getContent() {
        return "<b>" + super.getContent() + "</b>";
    }
}
// Concrete Decorator 2
class ItalicText extends TextDecorator {
    public ItalicText(Text decoratedText) {
        super(decoratedText);
    }
    public String getContent() {  
        return "<i>" + super.getContent() + "</i>";
    }
}
// Client code
public class Client {
    public static void main(String[] args) {
        Text text = new PlainText("Hello, World!");
        Text boldText = new BoldText(text);
        Text italicBoldText = new ItalicText(boldText);
        System.out.println(italicBoldText.getContent());
        // Outputs: <i><b>Hello, World!</b></i>
    }
}
```
## Facade
- The Facade pattern provides a simplified interface to a complex subsystem, making it easier to use.
- When to use
  - When you want to provide a simple interface to a complex subsystem.
  - When you want to decouple a client from a complex subsystem.
  - When you want to layer your subsystems.
  - Example
    - Consider a home theater system with various components like DVD player, projector, lights, and sound system.
```java
// Subsystem classes
class DVDPlayer {
    public void on() {
        System.out.println("DVD Player ON");
    }
    public void play(String movie) {
        System.out.println("Playing movie: " + movie);
    }
    public void off() {
        System.out.println("DVD Player OFF");
    }
}
class Projector {
    public void on() {
        System.out.println("Projector ON");
    } 
    public void setInput(String input) {
        System.out.println("Projector input set to: " + input);
    }
    public void off() {
        System.out.println("Projector OFF");
    }
}
class Lights {
    public void dim(int level) {
        System.out.println("Lights dimmed to " + level + "%");
    }
    public void on() {
        System.out.println("Lights ON");  
    }
}
class SoundSystem {
    public void on() {
        System.out.println("Sound System ON");
    }
    public void setVolume(int level) {
        System.out.println("Sound System volume set to " + level);
    }
    public void off() {
        System.out.println("Sound System OFF");
    }
}
// Facade class
class HomeTheaterFacade {
    private DVDPlayer dvdPlayer;
    private Projector projector;
    private Lights lights;
    private SoundSystem soundSystem;
    public HomeTheaterFacade(DVDPlayer dvdPlayer, Projector projector, Lights lights, SoundSystem soundSystem) {
        this.dvdPlayer = dvdPlayer; 
        this.projector = projector
        this.lights = lights;
        this.soundSystem = soundSystem;
    }

public void watchMovie(String movie) {
    System.out.println("Get ready to watch a movie...");
    lights.dim(10);
    projector.on();
    projector.setInput("DVD");
    soundSystem.on();
    soundSystem.setVolume(20);
    dvdPlayer.on();
    dvdPlayer.play(movie);
}
public void endMovie() {
    System.out.println("Shutting down movie theater...");
    dvdPlayer.off();
    soundSystem.off();
    projector.off();
    lights.on();
}
}
// Client code
public class Client {
    public static void main(String[] args) {
        DVDPlayer dvdPlayer = new DVDPlayer();
        Projector projector = new Projector();
        Lights lights = new Lights();
        SoundSystem soundSystem = new SoundSystem();
        HomeTheaterFacade homeTheater = new HomeTheaterFacade(dvdPlayer, projector, lights, soundSystem);
        homeTheater.watchMovie("Inception");
        // Outputs:
        // Get ready to watch a movie...
        // Lights dimmed to 10% 
        // Projector ON
        // Projector input set to: DVD
        // Sound System ON
        // Sound System volume set to 20
        // DVD Player ON
        // Playing movie: Inception
        homeTheater.endMovie();
        // Outputs:
        // Shutting down movie theater...
        // DVD Player OFF
        // Sound System OFF
        // Projector OFF
        // Lights ON
    }
}
```
## Flyweight
## Proxy
- The Proxy pattern provides a surrogate or placeholder for another object to control access to it.
- When to use
  - When you want to control access to an object, for example, to add lazy loading, access control, logging, or caching.
  - When you want to reduce memory usage by sharing expensive objects.
  - When you want to add a layer of indirection to support distributed, remote, or persistent objects.
  - Example
    - Consider an image viewer application where loading high-resolution images is resource-intensive. A proxy can be used to load a low-resolution placeholder image initially and load the high-resolution image only when needed.
```java
// Subject interface
interface Image {
    void display();
}
// Real Subject
class HighResolutionImage implements Image {
    private String filename;
    public HighResolutionImage(String filename) { 
        this.filename = filename;
        loadFromDisk();
    }
    private void loadFromDisk() {
        System.out.println("Loading high-resolution image from disk: " + filename);
    }
    public void display() {
        System.out.println("Displaying high-resolution image: " + filename);
    }
}
// Proxy class
class ImageProxy implements Image {
    private HighResolutionImage highResImage;
    private String filename;
    public ImageProxy(String filename) {
        this.filename = filename;
    }
    public void display() {
        if (highResImage == null) {
            highResImage = new HighResolutionImage(filename);
        }
        highResImage.display();
    }
}
// Client code
public class Client {
    public static void main(String[] args) {
        Image image = new ImageProxy("photo.jpg");
        // Image is not loaded yet
        System.out.println("Image proxy created.");
        // Load and display the high-resolution image only when needed
        image.display();
        // Subsequent calls will use the already loaded image
        image.display();
    }
}
// Outputs:
// Image proxy created.
// Loading high-resolution image from disk: photo.jpg
// Displaying high-resolution image: photo.jpg
// Displaying high-resolution image: photo.jpg
```