"use strict";

// 5 falsy values: 0, '', undefiend, null, NaN
console.log(Boolean(0)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean("Jonas")); // true
console.log(Boolean({})); // true
console.log(Boolean("")); // false

const money = 100;
if (money) {
  console.log("Don't spend it all ;");
} else {
  console.log("You should get a job!");
}
// Don't spend it all ;

let height = 0;
if (height) {
  console.log("YAY! Height is defined");
} else {
  console.log("Height is UNDEFINED");
}
// Height is UNDEFINED

// console.log(height ?? "YAY! Height is defined"); // 0

export {};
