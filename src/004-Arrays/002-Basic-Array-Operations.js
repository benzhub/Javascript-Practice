"use strict";

const friends = ["Michael", "Steven", "Peter"];

// Add element
// Array method 'push' will return length of the Array
const newLength = friends.push("Jay");
console.log(friends); // [ 'Michael', 'Steven', 'Peter', 'Jay' ]
console.log(newLength); // 4

// insert element to first of the Array
friends.unshift("John");
console.log(friends); // [ 'John', 'Michael', 'Steven', 'Peter', 'Jay' ]

// remove last element of the Array
// pop will return poped element
const popedElement = friends.pop();
console.log(popedElement); // Jay
console.log(friends); // [ 'John', 'Michael', 'Steven', 'Peter' ]

// remove frist element of the Array
// shift will return shifted element
const shiftedElement = friends.shift();
console.log(shiftedElement); // John
console.log(friends); // [ 'Michael', 'Steven', 'Peter' ]

friends.push(23);
console.log(friends.includes("Steven")); // true
console.log(friends.includes("Bob")); // false
console.log(friends.includes("23")); // false(strict mode)
console.log(friends.includes(23)); // true

if (friends.includes("Peter")) {
  console.log("You have a friend called Peter.");
}
// 'You have a friend called Peter.'

export {};
