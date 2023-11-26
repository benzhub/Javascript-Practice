"use strict";

const arr1 = ["a", "b", "c"];
const arr2 = ["x", "y", "z"];

const arr3 = [...arr1, ...arr2];

for (const item of arr3) console.log(item);
// a
// b
// c
// x
// y
// z

for (const [idx, el] of arr3.entries()) {
  console.log(idx + 1, el);
}
// 1 'a'
// 2 'b'
// 3 'c'
// 4 'x'
// 5 'y'
// 6 'z'