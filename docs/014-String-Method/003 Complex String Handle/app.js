"use strict";

// Split and Join
console.log('I+like+cats+and+dogs'.split('+')); // [ 'I', 'like', 'cats', 'and', 'dogs' ]
console.log('Jack White'.split(' ')); // [ 'Jack', 'White' ]

const [firstName, lastName] = 'jack white'.split(' ');
const newName = ['Mr.', firstName.toUpperCase(), lastName.toUpperCase()].join(' ')
console.log(newName); // Mr. JACK WHITE

const capitalizeName = function (name) {
  const names = name.split(' ')
  const changedNames = names.slice().map(word => word[0].toUpperCase() + word.slice(1).toLowerCase());
  return changedNames.join(' ')
}

console.log(capitalizeName('jessica and smith davis')); // Jessica And Smith Davis
console.log(capitalizeName('ben simons')); // Ben Simons

// Padding
const message = 'Go to gate 23!';
console.log(message.padStart(25, '+')); // +++++++++++Go to gate 23! 
console.log(message.padEnd(25, '+')); // Go to gate 23!+++++++++++  
console.log(message.padStart(25, '+').padEnd(35, '+')); // +++++++++++Go to gate 23!++++++++++ 

const maskCreditCard = function(number){
  // const str = String(number);
  const str = number + '';
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
}

console.log(maskCreditCard(654987654)); // *****7654
console.log(maskCreditCard(65498765465489783541)); // ****************5000
console.log(maskCreditCard('65498761')); // ****8761

// Repeat
const message2 = 'Bad weather... All Departues Delayed...';
console.log(message2.repeat(5)); // 

const planesInLine = function(n) {
  console.log(`There are ${n} plances in line ${'✈'.repeat(n)}`)
}
planesInLine(5); // There are 5 plances in line ✈✈✈✈✈ 
planesInLine(3); // There are 3 plances in line ✈✈✈ 
planesInLine(12); // There are 12 plances in line ✈✈✈✈✈✈✈✈✈✈✈✈// Data needed for a later exercise


const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// console.log(flights.split('+'));

for(const flight of flights.split('+')){
  const [type, from, to, time] = flight.split(';')
  const output = `${type.startsWith('_Delayed') ? '🎈': ''}${type.replaceAll('_', ' ')} from ${from.slice(0, 3).toUpperCase()} to ${to.slice(0, 3).toUpperCase()} ${time.replace(':', 'h')}`;
  console.log(output.padStart(50));
}
// 🎈 Delayed Departure from FAO to TXL 11h25
//              Arrival from BRU to FAO 11h45
//   🎈 Delayed Arrival from HEL to FAO 12h05
//            Departure from FAO to LIS 12h30