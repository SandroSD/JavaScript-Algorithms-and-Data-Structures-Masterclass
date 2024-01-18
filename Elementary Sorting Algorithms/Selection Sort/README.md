# Selection Sort

Similar to bubble sort, but instead of first placing large values into sorted position, it places small values into sorted position

## Pseudocode

- Store the first element as the smallest value you've seen so far
- Compare this item to the next item in the array until you find a smaller number
- If a smaller number is found, designate the smaller number to be the new _"minimum"_ and continue until the end of the array
- If the _"minimum"_ is not the value(index) you initially began with, swap the two values
- Repeat this with the next element until the array is sorted

```javascript
function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let lowest = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[lowest]) {
        lowest = j;
      }
    }
    if (i !== lowest) {
      let temp = arr[i];
      arr[i] = arr[lowest];
      arr[lowest] = temp;
    }
  }
  return arr;
}

selectionSort([34, 22, 10, 19, 17]);
```

#### Time Complexity

- General - **O(N<sup>2</sup>)**
- Nearly Sorted - **O(N)**
