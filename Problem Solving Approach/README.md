# Problem Solving Approach

## What is an algorithm?

A **process** or **set of steps** to accomplish a certain task.

Almost **everything** that you do in programming involves some kind of **algorithm!**

**It's the _foundation_ for being a successful problem solving and developer**

## How do you improve?

1. **Devise** a plan for solving problems.
2. **Master** common problem solving patterns.

### Problem Solving

- Understand the problem.
- Explore concrete examples.
- Break it down.
- Solve / simplify.
- Look back and refactor.

#### Understand the problem

1. Can I restate the problem in my own words?
2. What are the inputs that go into the problem?
3. What are the outputs that should come from the solution problem?
4. Can the outputs be determined from the inputs? In other words, do I have enough information to solve the problem? (You may not be able to answer this question until you set about solving the problem. That's okay; it's still worth considering the question at this early stage.)
5. How should I label the important pieces of data that are a part of the problem?

##### Example

###### Can I restate the problem in my own words?

```javascript
// ===================================================================
// = WRITE A FUNCTION WHICH TAKES TWO NUMBERS AND RETURNS THEIR SUM. =
// ===================================================================

// 1. Can I restate the problem in my own words?
// "implement addition."

// 2. What are the inputs that go into the problem?
// ints?, floats?, what about string for large numbers?

// 3. What are the outputs that should come from the solution problem?
// int?, float?, string?

//4. Can the outputs be determined from the inputs? In other words, do I have enough information to solve the problem? (You may not be able to answer this question until you set about solving the problem. That's okay; it's still worth considering the question at this early stage.)

//5. How should I label the important pieces of data that are a part of the problem?
```

###### Explore examples

Coming up with examples can help you understand the problem better.

Examples also provide sanity checks that your eventual solution works how it shoud

- User Stories!
- Unit Tests!

- Start with simple examples
- Progress to more complex examples
- Explore examples with empty inputs
- Explore examples with invalid inputs.

```javascript
// ================================================================================================
// = Write a function which takes in a string and returns counts of each character in the string. =
// ================================================================================================

charCount("aaaa"); // {a: 4}
charCount("hello"); // {h: 1, e:1, l:2, o:1}

("my phone number is 182763");
("Hello hi");
charCount("");
```

###### Break it down

Explicity write out the steps you need to take.

This forces you to think about the code you'll write before you write it, and helps you catch any lingering conceptual issues or misunderstandings before you dive in and have to worry about details (e.g. language syntax) as well.

```javascript
// ================================================================================================
// = Write a function which takes in a string and returns counts of each character in the string. =
// ================================================================================================

function charCount(str) {
  // make object to return at end
  // loop over string, for each character...
  - // if the char is a number/letter AND is a key in object, add one to count
  - // if the char is a number/letter AND is not in object, add it and set value to 1
  - // if the char is something else (space, period, etc.) don't do anything

  // return object at end
}
```

###### Solve / Simplify

Solve the problem

if you can't...

Solve a simpler problem!

- Simplify
  - Find the core difficulty in what you're trying to do.
  - Temporarily ignore that difficulty.
  - Write a simplified solution.
  - Then incorporate that difficulty back in.

```javascript
// ================================================================================================
// = Write a function which takes in a string and returns counts of each character in the string. =
// ================================================================================================

function charCount(str) {
  // make object to return at end
  const result = {};
  // loop over string, for each character...
  for(let i = 0; i < str.length; i++) {
    const char = str[i].toLowerCase();
    - // if the char is a number/letter AND is a key in object, add one to count
    if(result[char] > 0) {
        result[char]++;
    }
    - // if the char is a number/letter AND is not in object, add it and set value to 1
    else {
        result[char] = 1;
    }
  }
    - // if the char is something else (space, period, etc.) don't do anything
  // return object at end
  return result;
}
```

###### Look Back and Refactor

Congrats on solving it, but you are not done!

- Refactoring questions
  - Can you check the result?
  - Can you derive the result differently?
  - Can you understand it at a glance?
  - Can you use the result or method for some other problem?
  - Can you improve the performance of your solution?
  - Can you think of other ways to refactor?
  - How have other people solved this problem?

```javascript
function charCount(str) {
  const result = {};
  for (let char of str) {
    /*if (/[a-z0-9/.test(char)]) {
        obj[char] = ++obj[char] || 1
    }*/
    if (isAlphaNumeric(char)) {
      char = char.toLowerCase();
      obj[char] = ++obj[char] || 1;
    }
  }
  return result;

  function isAlphaNumeric(char) {
    const code = char.charCodeAt(0);
    if (
      !(code > 47 && code < 58) && //numeric (0-9)
      !(code > 64 && code < 91) && // upper alpha (A-Z)
      !(code > 96 && code < 123) // lower alpha (a-z)
    ) {
      return false;
    }
    return true;
  }
}
```
