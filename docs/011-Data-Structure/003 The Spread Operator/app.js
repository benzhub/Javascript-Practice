"use strict";

const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr); // [ 1, 2, 7, 8, 9 ]

const betterNewArr = [1, 2, ...arr];
console.log(betterNewArr); // [ 1, 2, 7, 8, 9 ]

console.log(...betterNewArr); // 1 2 7 8 9
console.log(1, 2, 7, 8, 9); // 1 2 7 8 9

const posts = [
  {
    postId: 1,
    id: 1,
    name: "id labore ex et quam laborum",
    email: "Eliseo@gardner.biz",
    body: "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium",
  },
  {
    postId: 1,
    id: 2,
    name: "quo vero reiciendis velit similique earum",
    email: "Jayne_Kuhic@sydney.com",
    body: "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et",
  },
  {
    postId: 1,
    id: 3,
    name: "odio adipisci rerum aut animi",
    email: "Nikita@garfield.biz",
    body: "quia molestiae reprehenderit quasi aspernatur\naut expedita occaecati aliquam eveniet laudantium\nomnis quibusdam delectus saepe quia accusamus maiores nam est\ncum et ducimus et vero voluptates excepturi deleniti ratione",
  },
];

const newPosts = [
  ...posts,
  {
    postId: 2,
    id: 10,
    name: "eaque et deleniti atque tenetur ut quo ut",
    email: "Carmen_Keeling@caroline.name",
    body: "voluptate iusto quis nobis reprehenderit ipsum amet nulla\nquia quas dolores velit et non\naut quia necessitatibus\nnostrum quaerat nulla et accusamus nisi facilis",
  },
];
console.log(newPosts);
// {postId: 1, id: 1, name: 'id labore ex et quam laborum', email: 'Eliseo@gardner.biz', body: 'laudantium enim quasi est quidem magnam voluptate …utem quasi\nreiciendis et nam sapiente accusantium'}
// {postId: 1, id: 2, name: 'quo vero reiciendis velit similique earum', email: 'Jayne_Kuhic@sydney.com', body: 'est natus enim nihil est dolore omnis voluptatem n…iatur\nnihil sint nostrum voluptatem reiciendis et'}
// {postId: 1, id: 3, name: 'odio adipisci rerum aut animi', email: 'Nikita@garfield.biz', body: 'quia molestiae reprehenderit quasi aspernatur\naut …mus et vero voluptates excepturi deleniti ratione'}
// {postId: 2, id: 10, name: 'eaque et deleniti atque tenetur ut quo ut', email: 'Carmen_Keeling@caroline.name', body: 'voluptate iusto quis nobis reprehenderit ipsum ame…s\nnostrum quaerat nulla et accusamus nisi facilis'}


// Copy a Array(shallow copy)淺拷貝
const newPostsShallowCopied = [...posts];
console.log(newPostsShallowCopied);
// {postId: 1, id: 1, name: 'id labore ex et quam laborum', email: 'Eliseo@gardner.biz', body: 'laudantium enim quasi est quidem magnam voluptate …utem quasi\nreiciendis et nam sapiente accusantium'}
// {postId: 1, id: 2, name: 'quo vero reiciendis velit similique earum', email: 'Jayne_Kuhic@sydney.com', body: 'est natus enim nihil est dolore omnis voluptatem n…iatur\nnihil sint nostrum voluptatem reiciendis et'}
// {postId: 1, id: 3, name: 'odio adipisci rerum aut animi', email: 'Nikita@garfield.biz', body: 'quia molestiae reprehenderit quasi aspernatur\naut …mus et vero voluptates excepturi deleniti ratione'}

// Copy a Array(Deep copy)深拷貝
const newPostsDeepCopied = JSON.parse(JSON.stringify(posts));
console.log(newPostsDeepCopied);
// {postId: 1, id: 1, name: 'id labore ex et quam laborum', email: 'Eliseo@gardner.biz', body: 'laudantium enim quasi est quidem magnam voluptate …utem quasi\nreiciendis et nam sapiente accusantium'}
// {postId: 1, id: 2, name: 'quo vero reiciendis velit similique earum', email: 'Jayne_Kuhic@sydney.com', body: 'est natus enim nihil est dolore omnis voluptatem n…iatur\nnihil sint nostrum voluptatem reiciendis et'}
// {postId: 1, id: 3, name: 'odio adipisci rerum aut animi', email: 'Nikita@garfield.biz', body: 'quia molestiae reprehenderit quasi aspernatur\naut …mus et vero voluptates excepturi deleniti ratione'}

const arr1 = ['a', 'b', 'c'];
const arr2 = ['x', 'y', 'z'];

// Join 2 Arrays
const joinedArr = [...arr1, ...arr2];
console.log(joinedArr); // ['a', 'b', 'c', 'x', 'y', 'z']

// Iterables: arrays, strings, maps, sets, Not Objects
const str = "Michael";
const letters = [...str, " ", "S."];
console.log(...str); // M i c h a e l
console.log(letters); // ['M', 'i', 'c', 'h', 'a', 'e', 'l', ' ', 'S.']
// console.log(`${...str}`); // Unexpected token

// // Objects
const newPostsObj = { first: 'a1', second: "b1", ...posts[0] };
console.log(newPostsObj); // {first: 'a1', second: 'b1', postId: 1, id: 1, name: 'id labore ex et quam laborum', …}



// // Shallow Copy
const obj = { a: 'a', b: 'b', c: { c1: 'c1' }};
const objShallowCopied = {...obj};
objShallowCopied.c.c1 = 'c2';
console.log(obj); // { a: 'a', b: 'b', c: { c1: 'c2' }};
console.log(objShallowCopied); // { a: 'a', b: 'b', c: { c1: 'c2' }};

// // Deep Copy
const obj2 = { x: 'x', y: 'y', z: { z1: 'z1' }};
const objDeepCopied = JSON.parse(JSON.stringify(obj2));
objDeepCopied.z.z1 = 'z2';
console.log(obj2); // { x: 'x', y: 'y', z: { z1: 'z1' }};
console.log(objDeepCopied); // { x: 'x', y: 'y', z: { z1: 'z2' }};