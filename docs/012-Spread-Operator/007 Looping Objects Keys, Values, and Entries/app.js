"use strict";

const weekdays = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const properties = Object.keys(openingHours);
console.log(properties); // ['thu', 'fri', 'sat']

let openStr = `We are open on ${properties.length} days: `;

for (const day of Object.keys(openingHours)) {
  openStr += `${day} `;
}

console.log(openStr); // We are open on 3 days: thu fri sat

// // Propertry Values
const values = Object.values(openingHours);
console.log(values); // [{ open: 12, close: 22 }, { open: 11, close: 23 }, { open: 0, close: 24 }];

// // Entrie Object
const entries = Object.entries(openingHours);
console.log(entries); // [["thu", {open: 12, close: 22}], ["fri", {open: 11, close: 23}], ["sat", {open: 0, close: 24}]]

for (const [key, { open, close }] of entries) {
  console.log(`on ${key} we open at ${open} and close at ${close}`);
}
// on thu we open at 12 and close at 22
// on fri we open at 11 and close at 23
// on sat we open at 0 and close at 24