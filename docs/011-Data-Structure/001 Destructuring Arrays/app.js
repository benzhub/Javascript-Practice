'use strict';

const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];
console.log(a, b, c); // 2 3 4

const [x, y, z] = arr;
console.log(x, y , z); // 2 3 4

let [main, ,secondary] = arr;
console.log(main, secondary); // 2 4

let [, , third] = arr;
console.log(third); // 4

[main, secondary] = [secondary, main]
console.log([main, secondary]); // [4, 2]



// Nested destructuring
const nested = [2, 4, [5, 6]];
const [i, , j] = nested;
console.log(i, j); // 2 [5 ,6]

const [x2, , [y2, z2]] = nested;
console.log(x2 , y2, z2); // 2 5 6 

// Default values
const [p, q, r] = [8, 9];
console.log(p, q, r); // 8 9 undefined

const [n=1, m=1, g=1] = [10];
console.log(n, m, g); // 10 1 1