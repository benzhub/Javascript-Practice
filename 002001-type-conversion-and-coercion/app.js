"use strict";

const inputYear = "1991";
console.log(Number(inputYear), inputYear); // 1991 '1991'
console.log(Number(inputYear) + 18); // 2009
console.log(Number("Jonas")); // Nan;
console.log(typeof NaN); // number
console.log(typeof new String(1)); // object
console.log(typeof String(1)); // string
console.log(typeof new Number("1")); // Object
console.log(typeof Number("1")); // number

console.log(String(23), 23); // 23 23

// type coercion
console.log("I am " + 23 + " years old."); // I am 23 years old
console.log("23" - "10" - 3); // 10
console.log("23" / "2"); // 11.5

let n = "1" + 1;
console.log(n); // 11
n = n - 1;
console.log(n); // 10

