# Heap

## Objectives

- Define what a binary heap is
- Compare and contrast minand max heaps
- Implement basic methods on heaps
- Understand where heaps are used in the real world and what other data structures can be constructed from heaps

## What is a Binary Heap?

**Very** similar to a binary search tree,but with some different rules.

In a **MaxBinaryHeap**, parent nodes are always larger than child nodes. In a **MinBinaryHeap**, parent nodes are always smaller than child nodes.

### Max Binary Heap

- Each parent has at most two child nodes
- The values of each parent node is **always** greater than it's child nodes
- In a Max Binary Heap the parent is greater than the children, but there are no guarantees between siblings nodes
- A Binary Heap is as compact as possible. All the children of each node are as full as they can be and left children are filled out first

### Example (Min Binary Heap)

![example](./example.png)

### Why I should know Heaps?

Binary Heaps are used to implement Priority Queues, which are **very** commonly used data structures.

They are also used ueite a bit, with **graph traversal** algorithms.

We can represent a heap using a list / array

![example](./representation.png)

#### How to find a children

For any index of an array _n_...

The left child is stored at _2n + 1_

The right child is stored at _2n + 2_

#### How to find a parent

For any child node at index _n_...

It's parent is at index _(n - 1) / 2_

### Methods

#### Insert

##### Pseudocode

- Push the value into the values property on the heap
- Bubble Up:
  - Create a variable called index which is the length of the values property - 1
  - Create a variable called parentIndex which is the floor of (index - 1) / 2
  - Keep looping as long as the values element at the parentIndex is less than the values element at the child index
    - Swap the value of the values element at the parentIndex with the value of the element property at the child index
    - Set the index to be the parentIndex, and start over

#### Extract Max

- Remove the root
- Replace with the most recently added
- Adjust (sink down)
  - The procedure for deleting the root from the heap (effectively extracting the maximum element in a max-heap or the minimum element in a min-heap) and restoring the properties is called _down-heap_ (also known as _bubble-down_, _percolate-down_, _sift-down_, _trickle down_, _heapify-down_, _cascade-down_, and _extract-min/max_)

##### Pseudocode

- Swap the first value in the values property with the last one
- Pop from the values property, so you can return the value at the end
- Have the new root "sink down" to the correct spot...
  - Your parent index starts at 0 (the root)
  - Find the index of the left child: 2 \* index + 1 (make sure it's not out of bounds)
  - Find the index of the right child: 2 \* index + 2 (make sure it's not out of bounds)
  - If the left or right child is greater than the element...swap. If both left and right children are larger, swap with the largest child
  - The child index you swapped to now becomes the new parent index
  - Keep looping and swapping until neither child is larger than the element.
  - Return the old root

## Priority Queue

A data structure where each element has a priority. Elements with higher priorities are served before elements with lower priorities.

### A Naive version

Use a list to store all elements

Iterate over the entire thing to find the highest priority element.

### Pseudocode

> Value doesn't matter. Heap is constructed **using Priority**.

- Write a Min Binary Heap - lower number means higher priority.
- Each Node has a value and a priority. Use the priority to build the heap.
- **Enqueue** method accepts a value and priority, makes a new node, and puts it in the right spot based off of it's priority.
- **Dequeue** method removes root element, returns it, and rearranges heap using priority.

### Big O - Binary Heap

- Insertion - **O(log n)**
- Removal - **O(log n)**
- Searching - **O(n)**

## Recap

- Binary Heaps are very useful data structures for sorting, and implementing other data structures like priority queue
- Binary Heaps are either MaxBinaryHeaps or MinBinaryHeaps with parents either being smaller or larger than their children
- With just a little bit of math, we can represent heaps using arrays
