# Tree

## Objectives

- Define what a tree is
- Compare and contrast trees and lists
- Explain the differences between trees, binary trees, and binary search trees
- Implement operations on binary search trees

## What is a tree?

A data structure that consists of nodes in a **parent / child** relationship.

**_WHAT IS NOT A TREE_** A node can point to a children, not a sibling

## Example

![example](./example.png)

## Compare & Contrast

- List - linear
- Tree - nonlinear

## Terminology

- **Root** - The top node in a tree.
- **Child** - A node directly connected to another node when moving away from the Root.
- **Parent** - The converse notion of a child.
- **Siblings** - A group of nodes with the same parent.
- **Leaf** - A node with no children.
- **Edge** - The connection between one node and another.

## Different use cases

- HTML DOM
- Network Routing
- Abstract Syntax Trees
- Artificial Intelligence
- Fodlers in Operating Systems
- Computer File System
- JSON

## Kinds of trees

- Trees
- Binary Trees (Per node they can only have 0, 1 or 2 children)
- Binary Search Trees (Sorted in a particular way)

### How _BSTS_ Work

- Every parent node has at most **two** children
- Every node to the left of a parent node is **always less** than the parent
- Every node to the right of a parent node is **always greater** than the parent

## Methods

### Inserting Pseudocode

- Create a new node
- Starting at the root
  - Check if there is a root, if not - the root now becomes that new node
  - If there is a root, check if the value of the new node is greater than or less than the value of the root
  - If it is greater
    - Check to see if there is a node to the right
      - If there is, move to that node and repeat these steps
      - If there is not, add that node as the right property
  - If it is less
    - Check to see if there is a node to the left
      - If there is, move to that node and repeat these steps
      - If there is not, add that node as the left property

### Finding Pseudocode

- Starting at the root
  - Check if there is a root, if not - we're done searching
  - If there is a root, check if the value of the new node is the value we are looking for. If we found it, we're done
  - If not, check to see if the value is greater than or less than the value of the root
  - If it is greater
    - Check to see if there is a node to the right
      - If there is, move to that node and repeat these steps
      - If there is not, we're done searching
  - If it is less
    - Check to see if there is a node to the left
      - If there is, move to that node and repeat these steps
      - If there is not, we're done searching

## Big O

### BST

- Insertion - **O(log n)**
  - worst case - **O(n)**
- Searching - **O(log n)**

## Tree Traversal

### Two ways:

- Breadth-first Search (From Left to Right, level by level)
- Depth-first Search (From Top to Bottom)

#### Breadth - First Search (BFS):

##### Steps - Iteratively

- Create a queue (this can be an array) and a variable to store the values of nodes visited
- Place root node in the queue
- Loop as long as there is anything in the queue
  - Dequeue a node from the queue and push the value of the node into the variable that stores the nodes
  - If there is a left property on the node dequeued - add it to the queue
  - If there is a right property on the node dequeued - add it to the queue
- Return the variable that stores the values

#### Depth - First Search (DFS):

##### Pre Order

###### Steps - Recursively

- Create a variable to store the values of nodes visited
- Store the root of thte BST in a variable called current
- Write a helper function which accepts a node
  - Push the value of the node to the variable that stores the values
  - If the node has a left property, call the helper function with the left property on the node
  - If the node has a right property, call the helper function with the right property on the node
- Invoke the helper functon with the current varble
- Return the array of values

##### Post Order

###### Steps - Recursively

- Create a variable to store the values of nodes visited
- Store the root of the BST in a variable called current
- Write a helper function which accepts a node
  - If the node has a left property, call the helper function with the left property on the node
  - If the node has a right property, call the helper function with the right property on the node
  - Push the value of the node to the variable that stores the values
- Invoke the helper function with the current variable
- Return the array fo values

##### In Order

###### Steps - Recursively

- Create a variable to store the values of nodes visited
- Store the root of the BST in a variable called current
- Write a helper function which accepts a node
  - If the node has a left property, call the helper function with the left property on the node
  - Push the value of the node to the variable that stores the values
  - If the node has a right property, call the helper function with the right property on the node
- Invoke the helper function with the current variable
- Return the array fo values

### When use BFS or DFS ?

Time Complexity doesn't matter
Space Complexity, if it is a wide tree BFS the queue will have a lot of information. If it is a really deep long tree DFS will take more space.

#### When use PreOrder, PostOrder or InOrder

If you have a binary tree and you use InOrder, you will have all the nodes sorted
If you use PreOrder you can serialize and store in a database or a file and then you can recreate it

## Recap

- Trees are non-linear data structures that contain a root and child nodes
- Binary Trees can have values of any type, but at most two children for each parent
- BinarySearch Trees are a more specific version of binary trees where every node to the left of a parent is less than it's value and every node to the right is greater
- We can search through Trees using BFS and DFS
