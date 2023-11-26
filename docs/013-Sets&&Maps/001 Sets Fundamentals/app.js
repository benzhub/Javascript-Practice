"use strict";

// Sets就是一個集合，裡面都不能有重複的值
// Sets不能索引
// has() ⇒ 有沒有存在
// delete() ⇒ 刪除
// add() ⇒ 添加
// size() ⇒ 長度

console.log(new Set("JohnDoe")); // Set { 'J', 'o', 'h', 'n', 'D', 'e' }

const fruitSet = new Set([
  "Apple",
  "Cherry",
  "Ornage",
  "Watermelon",
  "Ornage",
  "Cherry",
]);
console.log(fruitSet); // Set { 'Apple', 'Cherry', 'Ornage', 'Watermelon' }
console.log(fruitSet.size); // 4
console.log(fruitSet.has("Apple")); // true
console.log(fruitSet.has("Kiwi")); // false
fruitSet.add("Grape");
fruitSet.add("Strawberry");
fruitSet.delete("Grape");

// fruitSet.clear();
console.log(fruitSet); // Set {'Apple', 'Cherry', 'Ornage', 'Watermelon', 'Strawberry'}

for (const fruit of fruitSet) console.log(fruit);
// Apple
// Cherry
// Ornage
// Watermelon
// Strawberry

// exmaple
const pets = ["rabbit", "dog", "cat", "snake", "bird", "rabbit", "turtle", "snake", "cat"];
const petUnique = [...new Set(pets)];
console.log(petUnique); // ['rabbit', 'dog', 'cat', 'snake', 'bird', 'turtle']
console.log(
  new Set(["rabbit", "dog", "cat", "snake", "bird", "rabbit", "turtle", "snake", "cat"]).size
); // 6

console.log(new Set("joooeeesssmiitthh")); // Set { 'j', 'o', 'n', 's', 'm', 'i', 't', 'h' }
