"use strict";

// Loops in Loops 對於效能是O(n^2)，不建議經常使用

const jack = [
  "Jack",
  "White",
  2037 - 1991,
  "teacher",
  ["Mike", "Chris", "Lisa"],
  true,
];

for (let i = jack.length - 1; i >= 0; i--) {
  console.log(i, jack[i]);
}

// 5 true
// 4 ['Mike', 'Chris', 'Lisa']
// 3 'teacher'
// 2 46
// 1 'White'
// 0 'Jack'

for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`------- Starting exercise ${exercise}`);
  for (let rep = 1; rep < 6; rep++) {
    console.log(`Exercise ${exercise}: Lifting weight repetition ${rep}`);
  }
}

// ------- Starting exercise 1
// Exercise 1: Lifting weight repetition 1
// Exercise 1: Lifting weight repetition 2
// Exercise 1: Lifting weight repetition 3
// Exercise 1: Lifting weight repetition 4
// Exercise 1: Lifting weight repetition 5
// ------- Starting exercise 2
// Exercise 2: Lifting weight repetition 1
// Exercise 2: Lifting weight repetition 2
// Exercise 2: Lifting weight repetition 3
// Exercise 2: Lifting weight repetition 4
// Exercise 2: Lifting weight repetition 5
// ------- Starting exercise 3
// Exercise 3: Lifting weight repetition 1
// Exercise 3: Lifting weight repetition 2
// Exercise 3: Lifting weight repetition 3
// Exercise 3: Lifting weight repetition 4
// Exercise 3: Lifting weight repetition 5

export {};
