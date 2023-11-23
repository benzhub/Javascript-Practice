"use strict";

const jack = {
  firstName: "Jack",
  lastName: "White",
  birthYear: 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
  hasDriversLicense: false,
  calcAge: function () {
    this.age = 2045 - this.birthYear;
    return this.age;
  },
  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()}-years old ${
      this.job
    }, and he ${
      this.hasDriversLicense ? "has" : "doesn't have"
    } a driver's license.`;
  },
};

console.log(jack.age); // undefined
console.log(jack.calcAge()); // 54
console.log(jack.age); // 54

console.log(jack.getSummary());

// Challenge
// "Jack is a 54-year old teacher, and he has a Driver's License "

export {};
