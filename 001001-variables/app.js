"use strict";

// Primitive type 原始型別
//////////////////////////////////////////
// String                               //
// Number                               //
// Boolean                              //
// Null                                 //
// Undefined                            //
//////////////////////////////////////////

// Reference Types 參考資料型別
//////////////////////////////////////////
// Object                               //
// Function                             //
// Array                                //
// Set                                  //
//////////////////////////////////////////

// let的賦值變量可以改變

let test = "testStr";
test = "testStr2";
console.log(test); // testStr2

// const的賦值變量在primitive type不可以改變
// const的賦值變量在reference type可以改變
// const 在命名變量的時候，一定要給值，不然會出錯
// const testConst; // 'const' declarations must be initialized.

const test2 = "testStr";
// test2 = "testStr2"; // 'test2' is constant.eslintno-const-assign
console.log(test2); // testStr

const testObj = { name: "testObj" };
testObj.name = "testObj changed";
console.log(testObj); // {name: 'testObj changed'}

// var是舊的js變量賦值方式
// var的賦值變量可以改變
var testVar = "123";
testVar = "456";
console.log(testVar); // 456

var testVarObj = { name: "testVarObj" };
testVarObj.name = "testVarObj change";
console.log(testVarObj); // {name: 'testVarObj change'}

// var和let. const 的差別:
// let. const 作用域是塊級區域
// var作用域是函數範圍
// modern javascript的code中，我們幾乎不會用到var，除非是在一些特殊情況中才會用到

