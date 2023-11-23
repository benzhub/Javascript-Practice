"use strict";

// Scope in Javascript:

// global scope => 全域的
// function scope => 函數內的
// block scope => {} 內的

// var: function scope
// let. const: block scope

function calcAge(birthYear) {
  const age = 2037 - birthYear;
  console.log(firstName); // Jack
  function printAge() {
    let output = `${firstName}, You are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      const firstName = "Steven";
      const str = `Oh, and you're a miilenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
      output = "NEW OUTPUT";
    }
    // console.log(str); // Uncaught ReferenceError: str is not defined
    console.log(millenial); // true
    // console.log(add(2, 3)); // Uncaught ReferenceError: add is not defined
    console.log(output); // Jack, You are 46, born in 1991
  }
  printAge();
  return age;
}

const firstName = "Jack";
console.log(calcAge(1991));
// console.log(age); // Uncaught ReferenceError: age is not defined
// console.log(printAge()); // Uncaught ReferenceError: printAge is not defined
