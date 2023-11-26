"use strict";

// Copy Object
const jessica = {
  firstName: "Jessica",
  lastName: "Williams",
  age: 27,
  family: ["Amy", "Josh", "Alice"],
};

// 淺拷貝shallow copy(如果object裡面還有Reference Type的話，一樣會被影響)
// 淺拷貝只適合object裡面只有Primitive Type
const jessicaCopied = Object.assign({}, jessica);
jessicaCopied.lastName = "Davis";
console.log("Before marriage:", jessica); // Before marriage: { firstName: 'Jessica', lastName: 'Williams', age: 27 }
console.log("After marriage:", jessicaCopied); // After marriage: { firstName: 'Jessica', lastName: 'Davis', age: 27 }
jessicaCopied.family.push("Lisa");
jessicaCopied.family.push("Jane");

// Reference Type 一樣有被改變
console.log(jessica.family); // [ 'Amy', 'Josh', 'Alice', 'Lisa', 'Jane' ]
console.log(jessicaCopied.family); // [ 'Amy', 'Josh', 'Alice', 'Lisa', 'Jane' ]

// 深拷貝deep copy
// 將物件轉成字串再轉成物件，這樣就真的可以確保出來的會是一個新的物件而且是使用不同的記憶體。

let obj1 = {a: {a: 1}}
let obj2 = JSON.parse(JSON.stringify(obj1))
obj1.a.a = 2
// 這邊我們可以發現這樣確實是兩個獨立的物件了
console.log(obj1.a)  // {a: 2}
console.log(obj2.a)  // {a: 1}