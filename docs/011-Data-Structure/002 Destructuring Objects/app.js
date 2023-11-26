"use strict";

const user = {
  id: 1,
  name: "Leanne Graham",
  username: "Bret",
  email: "Sincere@april.biz",
  address: {
    street: "Kulas Light",
    suite: "Apt. 556",
    city: "Gwenborough",
    zipcode: "92998-3874",
    geo: {
      lat: "-37.3159",
      lng: "81.1496",
    },
  },
  phone: "1-770-736-8031 x56442",
  website: "hildegard.org",
  company: {
    name: "Romaguera-Crona",
    catchPhrase: "Multi-layered client-server neural-net",
    bs: "harness real-time e-markets",
  },
};

const { id, name, website } = user;
console.log(id); // 1
console.log(name); // Leanne Graham
console.log(website); // hildegard.org

// Reassignment when Destructuring
const {id: userID, name: userName, website: userBlog} = user;
console.log(userID); // 1
console.log(userName); // Leanne Graham
console.log(userBlog); // hildegard.org

// Setting Default Value
const {nation = "", email: userEmail = "test@test.com", phone: userPhone = "0900-000000"} = user;
console.log(nation); // 
console.log(userEmail); // Sincere@april.biz
console.log(userPhone); // 1-770-736-8031 x56442

// Mutating Variables
let a = 111;
let b = 999;
const obj = {a: 23, b: 7, c:14};
({a, b} = obj);
console.log(a, b); // 23 7

// Nested Objects
const {address: {city: c, street: s}} = user;
console.log(c); // Gwenborough
console.log(s); // Kulas Light