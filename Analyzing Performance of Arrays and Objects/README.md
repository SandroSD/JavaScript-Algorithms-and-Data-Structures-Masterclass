# Arrays and Object performance

## Objective

- Understand how objects and arrays work, through the lens of Big O.
- Explain why adding elements to the beginning of an array is costly.
- Compare and contrast the runtime for arrays and objects, as well as built-in methods.

### Objects

```javascript
let instructor = {
  firstName: "Kelly",
  isInstructor: true,
  favoriteNumbers: [1, 2, 3, 4],
};
```

#### When to use objects

- When you don't need order.
- When you need fast access / insertion and removal.

#### Big O of Objects

- Insertion - **O(1)**
- Removal - **O(1)**
- Searching - **O(n)**
- Access - **O(1)**

#### Big O of Object Methods

- Object.keys - **O(N)**
- Object.values - **O(N)**
- Object.entries - **O(N)**
- hasOwnProperty - **O(1)**

### Arrays

```javascript
let names = ["Michael", "Melissa", "Andrea"];

let values = [true, {}, [], 2, "awesome"];
```

#### When to use arrays

- When you need order.
- When you need fast access / insertion and removal (sort of... )

#### Big O of Arrays

- Insertion - **It Depends... (worst at the beginning)**
- Removal - **It Depends... (worst at the beginning)**
- Searching - **O(N)**
- Access - **O(1)**

#### Big O of Array Operations

- push - **O(1)**
- pop - **O(1)**
- shift - **O(N)**
- unshift - **O(N)**
- concat - **O(N)**
- slice - **O(N)**
- splice - **O(N)**
- sort - **O(N \* log N)**
- forEach/map/filter/reduce/etc... - **O(N)**
