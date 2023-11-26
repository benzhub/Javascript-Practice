"use strict";
"use strict";

const weekdays = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0,
    close: 24,
  },
};

const question = new Map([
  ["question", "What is the best programing language in the world?"],
  [1, "C"],
  [2, "Java"],
  [3, "Javascript"],
  ["correct", 3],
  [true, "Correct 🎉🎉"],
  [false, "Try Again!"],
]);
console.log(question);
// 0: {"question" => "What is the best programing language in the world?"}
// 1: {1 => "C"}
// 2: {2 => "Java"}
// 3: {3 => "Javascript"}
// 4: {"correct" => 3}
// 5: {true => "Correct 🎉🎉"}
// 6: {false => "Try Again!"}


// Convert object to map
console.log(Object.entries(openingHours));
// 0: (2) ['thu', {…}]
// 1: (2) ['fri', {…}]
// 2: (2) ['sat', {…}]
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);
// 0: {"thu" => Object}
// 1: {"fri" => Object}
// 2: {"sat" => Object}

// Quiz app
for (const [key, value] of question) {
  if (typeof key === "number") console.log(`Answer ${key}:${value}`);
}
// Answer 1:C
// Answer 2:Java
// Answer 3:Javascript

const answer = Number(prompt('Your answer'));
console.log(answer);

console.log(question.get(question.get("correct") === answer)); // Correct 🎉🎉

// Convert map to array
console.log([...question]);
// 0: (2) ['question', 'What is the best programing language in the world?']
// 1: (2) [1, 'C']
// 2: (2) [2, 'Java']
// 3: (2) [3, 'Javascript']
// 4: (2) ['correct', 3]
// 5: (2) [true, 'Correct 🎉🎉']
// 6: (2) [false, 'Try Again!']

// console.log(question.entries());
console.log([...question.keys()]); // ['question', 1, 2, 3, 'correct', true, false]
console.log([...question.values()]); // ['What is the best programing language in the world?', 'C', 'Java', 'Javascript', 3, 'Correct 🎉🎉', 'Try Again!']
