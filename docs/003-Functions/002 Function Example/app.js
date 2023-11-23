"use strict";

function logger() {
  console.log("My name is Mike");
}

// calling / running / invoking function
logger(); // My name is Mike
logger(); // My name is Mike
logger(); // My name is Mike
logger(); // My name is Mike

function fruitProcessor(apples, oranges) {
//   console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges`;
  return juice;
}
const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice); // Juice with 5 apples and 0 oranges

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice); // Juice with 2 apples and 4 oranges