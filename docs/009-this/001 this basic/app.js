'use strict';

const jack = {
  name: "jack",
  job: "firefighter",
  birthYear: 1999,
  age() {
    console.log(this);
    return 2023 - this.birthYear;
  },
};

console.log(jack.age());
// {name: 'jack', job: 'firefighter', birthYear: 1999, age: ƒ}
// 24

const mike = {
  birthYear: 2001,
};

mike.age = jack.age;
console.log(mike.age());
// 我們可以發現this是動態的
// 誰調用，this就會指向誰(但只能指向Object)
// {birthYear: 2001, age: ƒ}
// 22

const x = jack.age;
console.log(x()); // this不能指向function
// Window {window: Window, self: Window, document: document, name: '', location: Location, …}
// NaN

const betty = (height, weight) => {
  let BMI = weight / height ** 2;
  console.log(BMI);
  console.log(this); // 箭頭函數沒有自己的this，但它會顯示parent scope或是全域scope
};
betty(1.65, 55);
// 20.202020202020204
// Window {window: Window, self: Window, document: document, name: '', location: Location, …}
