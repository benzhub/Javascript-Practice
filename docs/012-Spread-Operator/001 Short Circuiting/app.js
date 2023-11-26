'use strict';

// short-circuiting
// OR中第一個若是true，就立即返回第一個
console.log(4 || 'Lee'); // 4
console.log('' || 'Lee'); // Lee
console.log(true || 0); // true
console.log(undefined || null); // null
console.log(undefined || 27 || 0 || '' || 'Hello' || null); // 27

let guestAge = 0;
let guestName;
// remember number=0 is falsy
const guests1 = guestAge ? guestAge : 10;
console.log(guests1); // 10
const guests2 = guestName || 10;
console.log(guests2); // 10


// AND就是OR的相反，第一個若是falsy，就立即返回第一個
// remember number=0 is falsy
console.log(0 && 'Lee'); // 0
console.log(7 && 'Lee'); // Lee

console.log('Hello' && 23 && null && 'lee'); // null

// Practical example
let a1 = 1;
let b2 = 2;
function sum(a, b){
    return a + b;
}

if(a1 && b2){
    sum(a1, b2);
}

// Better Way
console.log(a1 && b2 && sum(a1, b2)); // 3