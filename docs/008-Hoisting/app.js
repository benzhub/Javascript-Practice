'use strict';

// Function Declarations
//   Hoisted: Yes
//   Inital Value: Actual Function
//   Scope: Block

// var variables
//   Hoisted: Yes
//   Inital Value: undefined
//   Scope: Function

// let and const variables
//   Hoisted: No
//   Inital Value: TDZ(Temporal Dead Zone)
//   Scope: Block


// Variables
// var me;
// console.log(me); // undefined
// console.log(job); //  ReferenceError: Cannot access 'job' before initialization
// console.log(year); //  ReferenceError: Cannot access 'year' before initialization

var me = 'Jack';
let job = 'DJ';
const year = 1995

// Functions
// var addExpr2;
// var addArrow2;
// console.log(addDec(2, 3)); // 5
// console.log(addExpr(2, 3)); // ReferenceError: Cannot access 'addExpr' before initialization
// console.log(addExpr2); // undefined
// console.log(addExpr2(2, 3)); // undefined(2, 3) => TypeError: addExpr2 is not a function

// console.log(addArrow(2, 3)); // ReferenceError: Cannot access 'addArrow' before initialization
// console.log(addArrow2); // undefined
// console.log(addArrow2(2, 3)); // app.js:18 Uncaught TypeError: addArrow2 is not a function


function addDec(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};
var addExpr2 = function (a, b) {
  return a + b;
};

const addArrow = (a, b) => a + b;

var addArrow2 = (a, b) => a + b;

// Example
// Hoisting
// var numProducts; // undefined => false
if (!numProducts) deleteShoppingCart(); // All products deleted!

var numProducts = 10;

function deleteShoppingCart() {
  console.log("All products deleted!");
}

var x = 1;
let y = 2;
const z = 3;

// 使用var會在window中創建property
console.log(x === window.x); // true
console.log(y === window.y); // false
console.log(z === window.z); // false
