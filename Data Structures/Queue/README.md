# Queue

## Objectives

- Define what a queue is
- Understand use cases for a queue
- Implement operations on a queue data structure

## What is a queue?

A **FIFO** _(**F**irst **I**n **F**irst **O**ut)_ data structure

## How is it used?

Think about the last time you waited in a line

## Where queue are used

- Background tasks
- Uploading resources
- Printing / Task processing

## How you can implement it

- Array
- Simply Linked List

### Array

Using only methods:

- push and shift (removing from the beginning needs to re-index all the array, if the array is too big it will take time)
- unshift and pop

### Simply Linked List

#### Enqueue Pseudocode

- This function accepts some value
- Create a new node using that value passed to the function
- If there are no nodes in the queue, set this node to be the first and last property of the queue
- Otherwise, set the next property on the current last to be that node, and then set the last property of the queue to be that node
- Increment the size of the queue by 1

#### Dequeue Pseudocode

- If there is no first property, just return null
- Store the first property in a variable
- See if the first is the same as the last (check if there is only 1 node). If so, set the first and last to be null
- If there is more than 1 node, set the first property to be the next property of the first
- Decrement the size by 1
- Return the value of the node dequeued

## Big O

### Queue - Singly Linked List

- Insertion - **O(1)**
- Removal - **O(1)**
- Searching - **O(n)**
- Access - **O(n)**

## Recap

- Queues are a **FIFO** data structure, all elements are first in first out.
- Queues are useful for processing tasks and are foundational for more complex data structures
- Insertion and Removal can be done in **O(1)**
