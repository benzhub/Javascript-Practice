"use strict";

// continue: skip
// break: stop

// Looping Arrays, Breaking and Continuing
const jack = [
  "Jack",
  "White",
  2037 - 1991,
  "teacher",
  ["Nick", "Chris", "Steven"],
  true,
];
const types = [];

// console.log(jack[0])
// console.log(jack[1])
// ...
// console.log(jack[4])
// jack[5] does NOT exist

for (let i = 0; i < jack.length; i++) {
  // Reading from jack array
  console.log(jack[i], typeof jack[i]);

  // Filling types array
  // types[i] = typeof jack[i];
  types.push(typeof jack[i]);
}

// Jack string
// White string
// 46 'number'
// teacher string
// ['Nick', 'Chris', 'Steven'] Object
// true 'boolean'

console.log(types); // ['string', 'string', 'number', 'string', 'object', 'boolean']

const years = [1989, 2005, 1964, 2021];
const ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2037 - years[i]);
}
console.log(ages); // [48, 32, 73, 16]

// continue and break
console.log("--- ONLY STRINGS ---");
for (let i = 0; i < jack.length; i++) {
  if (typeof jack[i] !== "string") continue;

  console.log(jack[i], typeof jack[i]);
}

// Jack string
// White string
// teacher string

console.log("--- BREAK WITH NUMBER ---");
for (let i = 0; i < jack.length; i++) {
  if (typeof jack[i] === "number") break;

  console.log(jack[i], typeof jack[i]);
}

// Jack string
// White string

export {};
