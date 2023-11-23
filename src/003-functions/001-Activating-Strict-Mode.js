// 嚴格模式下，我們在瀏覽器的console中可以發現我們平常看不到的一些錯誤
// 在開發的時候非常好用，我們應該在開發的時候保持使用嚴格模式

"use strict";

let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriverLicense = true; // Uncaught ReferenceError: hasDriverLicense is not defined
if (hasDriversLicense) console.log("I can drive :D");

export {};
