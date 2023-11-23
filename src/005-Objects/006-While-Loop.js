"use strict";

// for (let num = 1; num <= 10; num++) {
//   console.log(`print ${num}.`);
// }

let num = 1;
while (num <= 10) {
  console.log(`print ${num}`);
  num++;
}

// print 1
// print 2
// print 3
// print 4
// print 5
// print 6
// print 7
// print 8
// print 9
// print 10

let dice = Math.trunc(Math.random() * 6) + 1;
console.log(dice);

while (dice !== 6) {
  console.log(`You Rolled a ${dice}.`);
  break;
}

if (dice === 6) console.log("Loop is about to end...");

export {};
