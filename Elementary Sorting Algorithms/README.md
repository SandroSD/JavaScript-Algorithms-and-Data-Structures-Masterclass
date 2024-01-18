# What is sorting?

Sorting is the process of rearranging the items in a collection (e.g. an array) so that the items are in some kind of order.

## Examples

- Sorting numbers from smallest to largest
- Sorting names alphabetically
- Sorting movies based on release year
- Sorting movies based on revenue

## Why do we need to learn this?

- Sorting is an incredibly common task, so it's good to know how it works
- There are many different ways to sort things, and different techniques have their own advantages and disadvantages

## Objectives

- Implement bubble sort
- Implement selection sort
- Implement insertion sort
- Understand why it is important to learn these simpler sorting algorithms

### Telling JavaScript how to sort

- The built-in sort method accepts an optional _comparator_ function
- You can use this comparator function to tell JavaScript how you want it to sort
- The comparator looks at pairs of elements (_a_ and _b_), determines their sort order based on the return value
  - If it returns a negative number, _a_ should come before _b_
  - If it returns a positive number, _a_ should come after _b_
  - If it returns 0, _a_ and _b_ are th same as far as the sort is concerned

#### Example

```javascript
function numberCompare(num1, num2) {
  return num1 - num2;
}

[6, 4, 15, 10].sort(numberCompare); // [15, 10, 6, 4]
```

```javascript
function compareByLen(str1, str2) {
  return str2.length - str1.length;
}

["Steele", "Colt", "Data Structures", "Algorithms"].sort(compareByLen); // ["Data Structures", "Algorithms", "Steele", "Colt"]
```
