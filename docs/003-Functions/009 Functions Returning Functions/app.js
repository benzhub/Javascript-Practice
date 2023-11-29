"use strict";

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

// const greeterHey = greet('Hey');
// greeterHey('Jack'); // Hey Jack
greet("Hello")("Jack"); // Hello Jack

// Double Arrow Function implement Function return Function
const greetArr = (greeting) => (name) => console.log(`${greeting} ${name}`);
greetArr("Hi")("Adam"); // Hi Adam
greetArr("How are you,")("Amy?")
