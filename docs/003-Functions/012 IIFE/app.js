"use strict";

const runOnce = function () {
  console.log("This will never run again!");
};
// This will never run again!

runOnce();
const isPublic = 123;
// IIFF
(function () {
  console.log("This will never run again!");
  console.log(isPublic);
  const isPrivate = 23;
})();
// This will never run again!
// 123

// console.log(isPrivate); // isPrivate is not defined

(() => console.log("This will ALSO never run again"))(); // This will ALSO never run again

// 如果我們想要創建一個新的scope範圍，我們就直接使用{}
// 而不用再使用function來創建scope(除了var以外)
{
  const isPrivate = 23;
  var notPrivate = 46;
}

// console.log(isPrivate); // isPrivate is not defined
console.log(notPrivate); // 46
