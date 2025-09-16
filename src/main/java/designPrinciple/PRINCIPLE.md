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
#### L – Liskov Substitution Principle (LSP)
- Subtypes must be substitutable for their base types. 
- Derived classes should extend base classes without changing their behavior.
####  I – Interface Segregation Principle (ISP)
- Clients should not be forced to depend on interfaces they do not use. 
- Split large interfaces into smaller, more specific ones.
#### D – Dependency Inversion Principle (DIP)
- High-level modules should not depend on low-level modules. Both should depend on abstractions. 
- Use interfaces or abstract classes to decouple components.
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