# Recursion

## Objectives

- Define what recursion is and how it can be used
- Understand the two essential components of a recursive function
- Visualize the call stack to better debug and understand recursive functions
- Use helper methods recursion and pure recursion to solve more difficult problems

## What is recursion?

A **process** (a function in our case) that **calls itself**.

### It's everywhere

- JSON.parse / JSON.stringify
- document.getElementById and DOM traversal algorithms
- Object traversal
- We will see it with more complex data structures
- It's sometimes a cleaner alternative to iteration

### But first... let's talk about functions

- In almost all program langugages, there is a built in data structure that manages what happens when functions are invoked
- It's named the **call stack!**

#### The call stack

- It's a **stack** data structure.
- Any time a function is invoked it is placed (**pushed**) on the top of the call stack
- When JavaScript sees the **return** keyword or when the function ends, the compiler will remove (**pop**)

#### Why do I care?

- You're used to functions being pushed on the call stack and popped off when they are done
- When we write recursive functions, we keep pushing new functions onto the call stack!

## Two essential parts of a recursive function!

- Base Case
- Different Input

### Base Case

The condition when the recursion ends.

**This is the most important concept to understand.**

### Example 1

```javascript
function countDown(num) {
  if (num <= 0) {
    console.log("All done!!!");
    return;
  }
  console.log(num);
  num--;
  countDown(num);
}
```

### Example 2

```javascript
function sumRange(num) {
  if (num === 1) return 1;
  return num + sumRange(num - 1);
}
```

### Example 3 - Factorial (Iterative Version)

```javascript
function factorial(num) {
  let total = 1;
  for (let i = num; i > 1; i--) {
    total *= i;
  }
  return total;
}
```

### Example 4 - Factorial (Recursive Version)

```javascript
function factorial(num) {
  if (num === 0 || num === 1) return 1;
  return num * factorial(num - 1);
}
```

## When things go wrong

- No base case
- Forgetting to return or returning the wrong thing!
- Stack overflow!

```javascript
function factorial(num) {
  if (num === 1) return 1;
  return num * factorial(num);
}
```

```javascript
function factorial(num) {
  if (num === 1) console.log(1);
  return num * factorial(num - 1);
}
```

## Helper Method Recursion

```javascript
function outer(input) {
  let outerScopedVariable = [];

  function helper(helperInput) {
    // modify the outerScopedVariable
    helper(helperInput--);
  }

  helper(input);

  return outerScopedVariable;
}
```

```javascript
function collectOddValues(arr) {
  let result = [];

  function helper(helperInput) {
    if (helperInput.length === 0) return;

    if (helperInput[0] % 2 !== 0) {
      result.push(helperInput[0]);
    }

    helper(helperInput.slice(1));
  }

  helper(arr);

  return result;
}
```

## Pure Recursion

- For arrays, use methods like **slice**, **the spread operator**, and **concat** that make copies of arrays so you do not mutate them
- Remember that strings are immutable so you will need to use methods like **slice**, **substr**, **or substring** to make copies of string
- To make copies of objects use **Object.assign**, **or the spread operator**

```javascript
function collectOddValues(arr) {
  let newArr = [];

  if (arr.length === 0) {
    return newArr;
  }

  if (arr[0] % 2 !== 0) {
    newArr.push(arr[0]);
  }

  newArr = newArr.concat(collectOddValues(arr.slice(1)));
  return newArr;
}
```
