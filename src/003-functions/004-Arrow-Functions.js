"use strict";

// Arror Fucntion
const calcAge3 = (birthYear) => 2045 - birthYear;

const age3 = calcAge3(1991);
console.log(age3); // 54

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  return `${firstName} retires in ${retirement} years.`;
};

console.log(yearsUntilRetirement(1991, "Ben")); // Ben retires in 19 years.
console.log(yearsUntilRetirement(1994, "Betty")); // Betty retires in 22 years.

export {};
