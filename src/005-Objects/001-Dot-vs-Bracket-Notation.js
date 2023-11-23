"use strict";

// const properties = ["age", "job", "weight", "height"];

// const jack = {
//   [`${properties[0]}`]: 18,
//   job: "engineer",
//   weight: 60,
//   height: 180,
// };

// console.log(jack); // { age: 18, job: 'engineer', weight: 70, height: 167 }

// Dot vs. Bracket Notation
const jack = {
  firstName: "Jack",
  lastName: "White",
  age: 2037 - 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
};
console.log(jack); // Objects

console.log(jack.lastName); // White
console.log(jack["lastName"]); // White

const nameKey = "Name";
console.log(jack["first" + nameKey]); // Jack
console.log(jack["last" + nameKey]); // White

// console.log(jack.'last' + nameKey)

const interestedIn = prompt(
  "What do you want to know about Jack? Choose between firstName, lastName, age, job, and friends"
);

if (jack[interestedIn]) {
  console.log(jack[interestedIn]);
  alert(jack[interestedIn]);
} else {
  console.log(
    "Wrong request! Choose between firstName, lastName, age, job, and friends"
  );
  alert(
    "Wrong request! Choose between firstName, lastName, age, job, and friends"
  );
}

jack.location = "Taipei";
jack["twitter"] = "@jackwhite";
console.log(jack);

// Challenge
// "Jack has 3 friends, and his best friend is called Michael"
console.log(
  `${jack.firstName} has ${jack.friends.length} friends, and his best friend is called ${jack.friends[0]}`
);

export {};
