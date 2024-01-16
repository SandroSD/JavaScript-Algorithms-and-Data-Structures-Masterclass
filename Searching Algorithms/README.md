# Searching Algorithms

## Objectives

- Describe what a searching algorithm is
- Implement linear search on arrays
- Implement binary search on sorted arrays
- Implement a naive string searching algorithm
- Implement the KMP string searching algorithm

## How do we search?

Given an array, the simplest way to search for a value is to look at every element in the array and check if it's the value we want.

There are many different search methods on arrays in JavaScript:

- indexOf
- includes
- find
- findIndex

### Linear Search

#### Pseodocode

- This function accepts an array and a value
- Loop through the array and check if the current array element is equal to the value
- If it is, return the index at which the element is found
- If the value is never found, return -1

```javascript
function linearSearch(arr, val) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      return i;
    }
  }

  return -1;
}

linearSearch([34, 56, 1, 2], 1);
```

- Time Complexity:
  - **BEST** - _O(1)_
  - **AVERAGE** - _O(N)_
  - **WORST** - _O(N)_

### Binary Search

- Binary search is much faster form of search
- Rather than eliminating one element at a time, you can eliminate _half_ of the remaining elements at a time
- Binary search only works on **_sorted_** arrays!

#### Pseudocode

- This function accepts a sorted array and a value
- Create a left pointer at the start of the array, and a right pointer at the end of the array
- While the left pointer comes before the right pointer:
  - Create a pointer in the middle
  - If you find the value you want, return the index
  - If the value is too small, move the left pointer up
  - If the value is too large, move the right pointer down
- If you never find the value, return -1

```javascript
function binarySearch(arr, val) {
  let start = 0;
  let end = arr.length - 1;
  let middle = Math.floor((start + end) / 2);

  while (arr[middle] !== elem && start <= end) {
    if (elem < arr[middle]) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
    middle = Math.floor((start + end) / 2);
  }

  /*if (arr[middle] === val) {
    return middle;
  }

  return -1;*/
  return arr[middle] === val ? middle : -1;
}

binarySearch([2, 5, 6, 9, 13, 15, 28, 30], 15);
```

- Time Complexity:
  - **BEST** - _O(1)_
  - **AVERAGE** - _O(log N)_
  - **WORST** - _O(log N)_

### Naive String Search

- Suppose you want to count the number of times a smaller string appears in a longer string
- A straightforward approach involves checking pairs of characters individually

#### Pseudocode

- Loop over the longer string
- Loop over the shorter string
- If the characters don't match, break out of the inner loop
- If the characters do match, keep going
- If you complete the inner loop and find a match, increment the count of matches
- Return the count

```javascript
function naiveSearch(long, short) {
  let count = 0;
  for (let i = 0; i < long.length; i++) {
    for (let j = 0; j < short.length; j++) {
      if (short[j] !== long[i + j]) {
        break;
      }
      if (j === short.length - 1) {
        count++;
      }
    }
  }
}

naiveSearch("lorie loled", "lol");
```
