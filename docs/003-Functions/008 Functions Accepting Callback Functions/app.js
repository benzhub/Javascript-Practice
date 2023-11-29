"use strict";

const oneWord = function (str) {
  return str.replace(/ /g, "").toLowerCase();
};

const upperFistWord = function (str) {
  const [first, ...others] = str.split(" ");
  return [first.toUpperCase(), ...others].join(" ");
};

// Higher-order function
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);
  console.log(`Transformed by: ${fn.name}`);
};

transformer("Javascript is the best!", upperFistWord);
// Original string: Javascript is the best!
// Transformed string: JAVASCRIPT is the best!
// Transformed by: upperFistWord

transformer("Javascript is the best!", oneWord);
// Original string: Javascript is the best!
// Transformed string: javascriptisthebest
// Transformed by: oneWord

const high5 = function () {
  console.log("🎉");
};

// document.body.addEventListener('click', high5);

const names = ["Jonas", "Martha", "Adam"];
names.forEach(high5);
