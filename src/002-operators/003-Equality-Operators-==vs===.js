"use strict";

// 我們一般在開發時，我們要避免使用鬆散的比較，我們應該始終使用嚴謹的比較
// ===: 嚴謹的比較(包含型別)
// ==: 鬆散的比較(不包含型別)

const age = 18;
if (age === 18) console.log("You just became an adult:D"); // You just became an adult:D

if (age == 18) console.log("You just became an adult:D (loose)"); // You just became an adult:D (loose)

const favorite = prompt("What's your favorite number?");
console.log(favorite); // 23
console.log(typeof favorite); // string

if (favorite === 23) {
  console.log("Cool! 23 is an amazing number!");
} else if (favorite === 7) {
  console.log("7 is also a cool number");
} else if (favorite === 9) {
  console.log("9 is also a cool number");
} else {
  console.log("Number is not 23 or 7 or 9");
}

if (favorite !== 23) console.log("Why not 23?");

export {};
