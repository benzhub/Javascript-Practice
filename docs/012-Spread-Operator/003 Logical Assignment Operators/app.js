"use strict";

const dog1 = {
  name: "Lucky",
  age: 0,
};
const dog2 = {
  name: "Lucy",
  owner: "Mike",
};

// Or aasignment operator
// dog1.owner = dog1.owner || "<ANONYMOUS>";
// dog2.owner = dog2.owner || "<ANONYMOUS>";

// shortcut
// dog1.owner ||= "<ANONYMOUS>";
// dog2.owner ||= "<ANONYMOUS>";

// 修正 0 === falsy的問題
// nullish assignment operator(null or undefined)
// shortcut
dog1.owner ??= "<ANONYMOUS>";
dog2.owner ??= "<ANONYMOUS>";
dog1.age ??= 10;
dog2.age ??= 10;

console.log(dog1); // {name: 'Lucky', age: 0, owner: '<ANONYMOUS>'}
console.log(dog2); // {name: 'Lucy', owner: 'Mike', age: 10}
