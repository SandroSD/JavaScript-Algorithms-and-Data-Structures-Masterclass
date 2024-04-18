# Hash Table

## Objectives

- Explain what a hash table is
- Define what a hashing algorithm
- Disucuss what makes a good hashing algorithm
- Understand how collisions occur in a hash table
- Handle collisions using separate chaining or linear problem

## What is a Hash Table?

Hash tables are used to store _key-value_ pairs.

They are like arrays, but the keys are not ordered.

Unlike arrays, hash tables are _fast_ for all of the following operations: finding values, adding new values, and removing values.

## Why should I care?

Nearly every programming language has some sort of hash table data structure

Because of their speed, hash tables are very commonly used

## The Hash Part

To implement a hash table, we'll using an array.

In order to look up values by key, we need a way to _convert keys into valid array indices_.

A function that performs this task is called a _hash function_.

## What makes a good hash?

> Not a cryptographically secure one

1. Fast (i.e. constant time)

```javascript
// NON - EXAMPLE
function slowHash(key) {
  for (let i = 0; i < 1000; i++) {
    console.log("everyday i'm hashing");
  }
  return key[0].charCodeAt(0);
}
```

2. Doesn't cluster outputs at specific indices, but distributes uniformly

```javascript
// NON - EXAMPLE
function sameHashedValue(key) {
  return 0;
}
```

3. Deterministic (same input yields same output)

```javascript
// NON - EXAMPLE
function randomHash(key) {
  return Math.floor(Math.random() * 1000);
}
```

---

```javascript
// EXAMPLE: IT WORKS ONLY ON STRINGS.
function hash(key, arrayLength) {
  let total = 0;
  for (let char of key) {
    // map "a" to 1, "b" to 2, "c" to 3, etc.
    let value = char.charCodeAt(0) - 96;
    total = (total + value) % arrayLength;
  }

  return total;
}

hash("pink", 10); // 0
hash("orangered", 10); // 7
hash("cyan", 10); // 3
```

### Refining our hash

> Problems wih our current hash

1. Only hashes strings (we won't worry about this)
2. Not constant time - linear in key length
3. Could be a little more random

```javascript
function hash(key, arrayLength) {
  let total = 0;
  for (let i = 0; i < key.length; i++) {
    let char = key[i];
    let value = char.charCodeAt(0) - 96;
    total = (total + value) % arrayLength;
  }

  return total;
}
```

```javascript
function hash(key, arrayLength) {
  let total = 0;
  let WEIRD_PRIME = 31;
  for (let i = 0; i < Math.min(key.length, 100); i++) {
    let char = key[i];
    let value = char.charCodeAt(0) - 96;
    total = (total * WEIRD_PRIME + value) % arrayLength;
  }

  return total;
}
```

#### Prime Numbers

The prime number in the hash is helpful in spreading out the keys more uniformly.

It's also helpful if the array that you're putting values into has a prime length.

You don't need to know why (Math is complicated!)

Why do hash functions use prime numbers?

Does making array size a prime number help in hash table implementation?

### Dealing with collisions

Even with a large array and a great hash functions, collisions are inevitable.

There are many strategies for dealing with collisions, but we'll focus on two:

1. Separate Chaining
2. Linear Probing

#### Separate Chaining

With _separate chaining_, at each index in our array we store values using a more sophisticated data structure (e.g. an array or a linked list)

This allows us to store multiple key-value pairs at the same index

#### Linear Probing

With _linear probing_, when we find a collision, we search through the array to find the next empty slot

Unline with _separate chaining_, this allows us to store a single key-value at each index

### Methods

#### Set

1. Accepts a key and a value
2. Hashes the key
3. Stores the key-value pair in the hash table array via separate chaining

#### Get

1. Accepts a key
2. Hashes the key
3. Retrieves the key-value pair in the hash table
4. If the key isn't found, returns _undefined_

#### Keys

1. Loop through the hash table array and returns an array of keys in the table

#### Values

1. Loops through the hash table array and returns an array of values in the table

## Big O

> average case

- Insertion - **O(1)**
- Removal - **O(1)**
- Access - **O(1)**

> worst case

- Insertion - **O(n)**
- Removal - **O(n)**
- Access - **O(n)**

## Recap

- Hash tables are collections of key-value pairs
- Hash tables can find values quickly given a key
- Hash tables can add new key-values quickly
- Hash tables store data in a large array, and work by _hashing_ the keys
- A good hash should be fast, distribute keys uniformly, and be deterministic
- Separate chaining and linear probing are two strategies used to deal with two keys that hash to the same index
