"use strict";

// example
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
  [`day-${2 + 4}`]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

for (const day of weekdays) {
  //   console.log(day);
  const open = openingHours[day]?.open ?? "closed";
  console.log(`On ${day}, we open at ${open}`);
}
// On mon, we open at closed
// On tue, we open at closed
// On wed, we open at closed
// On thu, we open at 12
// On fri, we open at 11
// On sat, we open at closed
// On sun, we open at closed


// // Methods
const obj = {
  sum(a, b) {
    return a + b;
  },
};
console.log(obj.sum?.(0, 1) ?? "Method does not exist"); // 1
console.log(obj.sum2?.(0, 1) ?? "Method does not exist"); // Method does not exist

// Arrays
const users = [
  { name: 'Jay', email: 'jay123@hello.com' }
]
// if(users.length > 0) console.log(users[0].name);
// else console.log('user array empty');

console.log(users[0]?.name ?? 'User array empty'); // Jay
console.log(users[1]?.name ?? 'User array empty'); // User array empty

