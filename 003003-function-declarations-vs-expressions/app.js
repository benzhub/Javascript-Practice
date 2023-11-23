"use strict";

// 聲明式和表達式主要常見的差別在於: 聲明式會提升(hoisting)，表達式不會提升
// 但其實在開發上，這可以視個人喜好選擇，其實沒有太大的效能差距

// const age3 = calcAge2(1988); // Uncaught ReferenceError: Cannot access 'calcAge2' before initialization
// console.log(age3); // 

const age4 = calcAge1(1949);
console.log(age4); // 88

////////////////////////////////////////////////////////////////////////////////////

// Function Declaration(申明式)
function calcAge1(birthYear) {
  return 2037 - birthYear;
}

const age1 = calcAge1(1991);
console.log(age1); //46

// Function Expression(表達式)=>表達式會產生一個值
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};
const age2 = calcAge2(1991);
console.log(age2); // 46

