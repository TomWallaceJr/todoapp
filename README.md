Simple Todo list app using NextJs, DaisyUI, and ReactIcons

Introduces the concept of Typescript interfaces.

Using interfaces, particularly in TypeScript, offers several benefits that enhance the development process, code quality, and maintainability. Here are some key advantages:

1. Type Safety and Error Checking
   Interfaces enforce type checking at compile time, ensuring that objects conform to a specific structure. This catches errors early in the development process, such as when a required property is missing or a property has an incorrect type, reducing bugs in the runtime environment.

2. Code Readability and Documentation
   Interfaces serve as self-documenting code, making it clearer what shape an object should have. This is especially useful in large codebases or when working in a team, as it makes the code easier to understand and use correctly without needing to refer to external documentation.

3. Reusability and Extensibility
   Interfaces can be extended or implemented by multiple classes, promoting code reusability and extensibility. You can define a base interface and extend it to create more specific interfaces, reducing duplication and fostering a modular code structure.
4. Refactoring and Maintenance

   When you need to make changes to the structure of data used across your application, updating the interface definition can instantly highlight where adjustments are needed throughout your code. This makes refactoring safer and faster, as it helps to identify all the places an object's shape is relied upon.

5. Integration with IDEs and Tooling
   Modern Integrated Development Environments (IDEs) and tools are designed to work well with TypeScript's type system, including interfaces. They provide autocomplete suggestions, usage references, and inline error messages, enhancing developer productivity and reducing the cognitive load.

6. Enforces Contract
   Interfaces define a contract for classes or objects, ensuring that they implement specific properties or methods. This is particularly useful when working with libraries, frameworks, or in a team setting, where consistent implementation of an API contract is critical.

7. Duck Typing
   TypeScript uses structural typing (often called duck typing), where type compatibility is determined by the members that a type has. Interfaces allow you to take full advantage of this feature by focusing on the shape that values have, making the code more flexible and adaptable to different implementations that meet the same interface requirements.

8. Conditional Types and Polymorphism
   Interfaces can be used to define conditional types that allow for more complex and flexible type manipulations. They also support polymorphism, enabling a single function to accept arguments of multiple types as long as they adhere to the interface, enhancing code's generic capabilities.

   In summary, interfaces in TypeScript are a powerful feature for designing robust, readable, and maintainable codebases. They enforce a structure for objects and classes, improve development tools' effectiveness, and facilitate safe code refactoring and extension

Implemens CRUD functioonality
