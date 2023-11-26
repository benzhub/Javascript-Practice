"use strict";


const company = 'Romaguera-Jacobson';
const zipcode = '90566-7771';

console.log(company[0]); // R
console.log(company[1]); // o
console.log(company[2]); // m
console.log('A123'[0]); // A

console.log(company.length); // 18
console.log('A123'.length); // 4 

console.log(company.indexOf('r')); // 7
console.log(company.lastIndexOf('r')); // 7
console.log(company.indexOf('Jacobson')); // 10 (if falsy will return -1)

console.log(zipcode.slice(6)); // 7771
console.log(zipcode.slice(0, 5)); // 90566


console.log(company.slice(0, company.indexOf('-'))); // Romaguera
console.log(company.slice(company.lastIndexOf('-'))); // -Jacobson
console.log(company.slice(4)); // guera-Jacobson
console.log(company.slice(1, -1)); // omaguera-Jacobso

const checkZipcode = function(zipCodeStr){
  // B and E are middle seats
  if(zipCodeStr.indexOf('-') >= 0) return true;
  return false
}

console.log(checkZipcode('90566-7771')); // true
console.log(checkZipcode('7771')); // false
console.log(checkZipcode('90566')); // false

console.log(new String('JohnDoe')); // String {'JohnDoe'}
console.log(typeof new String('JohnDoe')); // object
console.log(typeof new String('JohnDoe').slice(1)); // string

console.log(String(1233445)); // 1233445
console.log(typeof String(1233445)); // string