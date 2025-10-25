# Content
[TDD vs BDD](#TDD-vs-BDD) | [Jasmine Karma](#Jasmine-Karma)

## TDD vs BDD
### Test-Driven Development (TDD)
- Workflow:
  - Write a failing unit test (Red)
  - Write the minimum code to pass the test (Green)
  - Refactor the code for clarity and performance (Refactor)
- Focus:
  - Code correctness 
  - Low-level unit tests 
  - Developer-centric 
  - Example (JUnit):
```java
@Test
public void testAdd() {
    Calculator calculator = new Calculator();
    assertEquals(5, calculator.add(2, 3));
}
```
- Benefits:
  - Ensures code quality and correctness
  - Facilitates refactoring
  - Provides immediate feedback to developers
- Limitations:
  - May not capture user requirements fully
  - Focuses on implementation details rather than behavior
  - Can lead to overemphasis on unit tests
- Angular uses the Jasmine testing framework by default for writing unit tests, and Karma as the test runner.
```TypeScript
describe('MyComponent', () => {
  it('should return true', () => {
    expect(true).toBe(true);
  });
}); 
```
### Behavior-Driven Development (BDD)
- BDD builds on TDD by focusing on the behavior of the application from the user’s perspective. It encourages collaboration between developers, QA, and business stakeholders.
- Workflow:
  - Define behavior in plain language (Given-When-Then)
  - Automate scenarios using tools like Cucumber or JBehave 
  - Write code to satisfy the behavior
- Focus:
  - Business value 
  - High-level acceptance tests 
  - Cross-functional collaboration
## Jasmine-Karma
- Angular uses the Jasmine testing framework by default for writing unit tests, and Karma as the test runner
- Jasmine
  - Behavior-driven testing framework for JavaScript. 
  - Provides functions like describe, it, expect, beforeEach, etc. 
  - Used to write readable and expressive unit tests.
  - Does not come with default Coverage
  - for coverage we can use karma-coverage
  - jest is a diff framework developed by facebook comes with default Coverage
    - Supports both TDD and BDD styles.
      - BDD Example:
```TypeScript
  describe('MyComponent', () => {
    it('should return true', () => {
      expect(true).toBe(true);
    });
  });
```
- TDD Example:
```TypeScript
test('adds 1 + 2 to equal 3', () => {
  expect(1 + 2).toBe(3);
});
```
- Karma 
  - A test runner that launches browsers and runs Jasmine tests in them. 
  - Integrates with Angular CLI (ng test command). 
  - Provides live feedback during development.