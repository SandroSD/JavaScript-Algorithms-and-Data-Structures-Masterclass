# Insertion Sort

Builds up the sort by gradually creating a larger left half which is always sorted

## Pseudocode

- Start by picking the second element in the array
- Now compare the second element with the one before it and swap if necessary
- Continue to the next element and if it is in the incorrect order, iterate through the sorted portion (i.e. the left side) to place the element in the correct place
- Repeat until the array is sorted

```javascript
function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let currentVal = arr[i];
    for (let j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = currentVal;
  }
  return arr;
}

insertionSort([2, 1, 9, 76, 4]); // [1, 2, 4, 9, 76]
```

### Time Complexity

- General - **O(N<sup>2</sup>)**
- Nearly Sorted - **O(N)**

### Note

If we have to fill an array in live that we don't have totally defined at the beginning this algorithm works fine
