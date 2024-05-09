// Example of Max Binary Heap
class Heap {
  constructor() {
    this.values = [];
  }

  insert(element) {
    this.values.push(element);

    this.bubbleUp();
  }

  bubbleUp() {
    let index = this.values.length - 1;
    const element = this.values[index];

    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      let parent = this.values[parentIndex];

      if (element <= parent) break;
      this.values[parentIndex] = element;
      this.values[index] = parent;
      index = parentIndex;
    }
  }

  extractMax() {
    const max = this.values[0];
    const end = this.values.pop();

    if (this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown();
    }

    return max;
  }

  extractMax2() {
    let max = this.values[0];
    [this.values[0], this.values[this.values.length - 1]] = [
      this.values[this.values.length - 1],
      this.values[0],
    ];
    this.values.pop();
    let pIdx = 0;
    let lcIdx = 1;
    let rcIdx = 2;
    let mc = Math.max(this.values[lcIdx], this.values[rcIdx]);
    let mcIdx = this.values[lcIdx] === mc ? lcIdx : rcIdx;
    while (this.values[pIdx] < mc) {
      [this.values[pIdx], this.values[mcIdx]] = [
        this.values[mcIdx],
        this.values[pIdx],
      ];
      pIdx = mcIdx;
      lcIdx = 2 * mcIdx + 1;
      rcIdx = 2 * mcIdx + 2;
      mc = Math.max(this.values[lcIdx], this.values[rcIdx]);
      mcIdx = this.values[lcIdx] === mc ? lcIdx : rcIdx;
    }
    return max;
  }

  sinkDown() {
    let index = 0;
    const length = this.values.length;
    const element = this.values[0];

    while (true) {
      let leftChildIndex = 2 * index + 1;
      let rightChildIndex = 2 * index + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftChildIndex < length) {
        leftChild = this.values[leftChildIndex];
        if (leftChild > element) {
          swap = leftChildIndex;
        }
      }

      if (rightChild < length) {
        rightChild = this.values[rightChildIndex];
        if (
          (swap === null && rightChild > element) ||
          (swap !== null && rightChild > leftChild)
        ) {
          swap = rightChildIndex;
        }
      }

      if (swap === null) break;
      this.values[index] = this.values[swap];
      this.values[swap] = element;
      index = swap;
    }
  }
}
