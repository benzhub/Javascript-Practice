"use strict";

const company = 'Romaguera-Jacobson';

console.log(company.toLowerCase()); // romaguera-jacobson

// Fix capitalization in name
const guest = 'joHN'; // John
const guestLower = guest.toLowerCase();
console.log(guestLower); // john
const guestCorrect = guestLower[0].toUpperCase() + guestLower.slice(1);
console.log(guestCorrect); // John

// Comparing emails
const email = 'hello@john.io';
const loginEmail = '  Hello@john.Io \n';

const lowerEmail = loginEmail.toLowerCase();
const trimedEmail = lowerEmail.trim();
console.log(trimedEmail); // hello@john.io

// trim() => 消除空白
const normalizedEmail = loginEmail.toLowerCase().trim()
console.log(normalizedEmail); // hello@john.io
console.log(email === normalizedEmail); // true

// replacing
const priceGB = '288,97₤';
const priceUS = priceGB.replace('₤', '$').replace(',', '.');
console.log(priceUS); // 288.97$

const commnet = 'I like cats.';

// console.log(commnet.replace('cats', 'dogs')); // I like dogs.
// console.log(commnet.replaceAll('cats', 'dogs')); // I like dogs.
// Regular Expression
console.log(commnet.replace(/cats/g, 'dogs')); // I like dogs.

// Booleans
const userEmail = "Nathan@yesenia.net";
console.log(userEmail.includes('Nathan')); // true
console.log(userEmail.includes('@')); // true
console.log(userEmail.startsWith('Nathan')); // true
console.log(userEmail.endsWith('.net')); // true

// Practice exercise
const checkBaggage = function(items) {
  const baggage = items.toLowerCase()
  if(baggage.includes('knife') || baggage.includes('gun')){
    console.log('You are NOT allowed on board');
  } else {
    console.log('Welcome aboard!');
  }
}

checkBaggage('I have a laptop, some food and a pocket Knife.'); // You are NOT allowed on board
checkBaggage('Socks and camera'); // Welcome aboard!
checkBaggage('Got some snacks and a gun for protection');// You are NOT allowed on board