# Radix Sort

Radix sort is a special sorting algorithm that works on lists of numbers.

It never makes comparisons between elements!

It exploits the fact that information about the size of a number is encoded in the number of digits.

More digits means a bigger number!

## Radix Sort Helpers

In order to implement radix sort, it's helpful to build a few helper functions first:

- getDigit(_num, place_) - returns the digit in _num_ at the given _place_ value

```javascript
function getDigit(number, place) {
  return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
}

getDigit(12345, 0); // 5
getDigit(12345, 1); // 4
getDigit(12345, 5); // 0
```

- digitCount(_num_) - returns the number of digits in _num_

```javascript
function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

digitCount(1); // 1
digitCount(25); // 2
digitCount(314); // 3
```

- mostDigits(_nums_) - Given an array of numbers, returns the number of digits in the largest numbers in the list

```javascript
function mostDigits(nums) {
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }
  return maxDigits;
}

mostDigits([1234, 56, 7]); //4
mostDigits([1, 1, 11111, 1]); //5
mostDigits([12, 34, 56, 78]); //2
```

## Radix Sort Pseudocode

- Define a function that accepts list of numbers
- Figure out how many digits the largest number has
- Loop from _k_=0 up to this largest number of digits
- For each iteration of the loop:
  - Create buckets for each digit (0 to 9)
  - Place each number in the corresponding bucket based on it's *k*th digit
- Replace our existing array with values in our buckets, starting with 0 and going up to 9
- return list at the end!

```javascript
function radixSort(nums) {
  const maxDigitCount = mostDigits(nums);
  for (let k = 0; k < maxDigitCount; k++) {
    let digitBuckets = Array.from({ length: 10 }, () => []);
    for (let i = 0; i < nums.length; i++) {
      const digit = getDigit(nums[i], k);
      digitBuckets[digit].push(nums[i]);
    }
    nums = [].concat(...digitBuckets);
  }

  return nums;
}

radixSort([23, 345, 5467, 12, 2345, 9852]);
```

## Time Complexity

- Best - **O(NK)**
- Average - **O(NK)**
- Worst - **O(NK)**

> N: length of array

> K: length of digits (average)

## Space Complexity

- **O(N + K)**
