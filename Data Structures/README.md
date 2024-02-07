# Data Structures

## What do they do?

Data structures are collections of values, the relationships among them, and the functions or operations that can be applied to the data

## Why so many?

Different data structures excel at different things. Some are highly specialized, while others (like arrays) are more generally used

## Why care?

The more time you spend as a developer, the more likely you'll need to use one of these data structure

# JavaScript Class

- Explain what a class is
- Understand how JavaScript implements the **idea** of classes
- Define terms like abstraction, encapsulation and polymorphism
- Use ES2015 classes to implement data structures

## What is a class?

A blueprint for creating objects with pre-defined properties and methods

### Why do we need to learn this?

We're going to implement **data structures** as **classes!**

### The Syntax

```javascript
class Student {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}
```

The method to create new objects **must** be called constructor

The class keyword creates a constant, so you can not redefine it. Watch out for the syntax as well!

### Creating objects from classes

**We use the _new_ keyword**

```javascript
class Student {
  constructor(firstName, lastName, year) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.year = year;
    this.tardies = 0;
    this.scores = [];
  }

  fullName() {
    return `Your full name is ${this.firstName} ${this.lastName}`;
  }

  markLate() {
    this.tardies += 1;
    if (this.tardies >= 3) {
      return "YOU ARE EXPELLED!!!";
    }
    return `${this.firstName} ${this.lastName} has been late ${this.tardies} times`;
  }

  addScore(score) {
    this.scores.push(score);
    return this.scores;
  }

  calculateAverage() {
    const sum = this.scores.reduce(function (a, b) {
      return a + b;
    });
    return sum / this.scores.length;
  }
}

const firstStudent = new Student("Colt", "Steele", 3);
const secondStudent = new Student("Blue", "Steele", 3);

firstStudent.fullName(); // Your full name is Colt Steele;
firstStudent.markLate(); // `Colt Steele has been late 1 times`;
firstStudent.addScore(1);
firstStudent.addScore(5);
firstStudent.calculateAverage(); // 3
```

### Class Methods

```javascript
class Student {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  fullName() {
    return `Your full name is ${this.firstName} ${this.lastName}`;
  }

  static enrollStudents(...students) {
    // maybe send an email here
  }
}

const firstStudent = new Student("Colt", "Steele");
const secondStudent = new Student("Blue", "Steele");

Student.enrollStudents([firstStudent, secondStudent]);
```

- Classes are blueprints that when created make objects kwown as **instances**
- Classes are created with the **new** keyword
- The **constructor** function is a special function that gets run when the class is instantiated
- Instance methods can be added to classes similar to methods in objects
- Class methods can be added using the **static** keyword
