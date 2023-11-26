'use strict';

let num = 0;
const guests = num || 10;
console.log(guests); // 10

// Nullish: null and undefined(Not 0 or '')
const guestCorrect = num ?? 10;
console.log(guestCorrect); // 0