"use strict";

const friend1 = "Michael";
const friend2 = "Steven";
const friend3 = "Peter";

const friends = [friend1, friend2, friend3];
console.log(friends); // [ 'Michael', 'Steven', 'Peter' ]

const years = new Array(1991, 1984, 2008, 2020);
console.log(years); // [ 1991, 1984, 2008, 2020 ]

console.log(friends[0]); // Michael
console.log(friends[1]); // Steven
console.log(friends[2]); // Peter

console.log(friends.length); // 3
// cannot put statements in Array
// last of Array
console.log(friends[friends.length - 1]); // Peter

friends[2] = "Betty";
console.log(friends); // [ 'Michael', 'Steven', 'Betty' ]

const firstName = "Jack";
const jack = [firstName, "White", 2037 - 1991, "teacher", friends];
console.log(jack); // [ 'Jack', 'White', 46, 'teacher', [ 'Michael', 'Steven', 'Betty' ] ]
console.log(jack.length); // 5

// Exercise
const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

const yearsArr = [1990, 1967, 2002, 2010, 2018];
const age1 = calcAge(yearsArr[0]);
const age2 = calcAge(yearsArr[1]);
const age3 = calcAge(yearsArr[2]);
const age4 = calcAge(yearsArr[3]);
const age5 = calcAge(yearsArr[4]);

const ages = [age1, age2, age3, age4, age5];
console.log(ages); // [ 47, 70, 35, 27, 19 ]

