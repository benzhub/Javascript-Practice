"use strict";

const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others); // 1 2 [ 3, 4, 5 ]

const post = {
  postId: 2,
  id: 8,
  name: "et omnis dolorem",
  email: "Mallory_Kunze@marie.org",
  body: "ut voluptatem corrupti velit\nad voluptatem maiores\net nisi velit vero accusamus maiores\nvoluptates quia aliquid ullam eaque",
};

const { postId, id, ...postInfo } = post;
console.log(postId); // 2
console.log(id); // 8
console.log(postInfo); // {name: 'et omnis dolorem', email: 'Mallory_Kunze@marie.org', body: 'ut voluptatem corrupti velit\nad voluptatem maiores…samus maiores\nvoluptates quia aliquid ullam eaque'}

// 2. Functions Arguments
const sumFunc = function (...numbers) {
  console.log(numbers);
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
};

console.log(sumFunc(1, 2)); 
// [1, 2];
// 3
console.log(sumFunc(1, 2, 3, 4));
// [1, 2, 3, 4];
// 10
console.log(sumFunc(1, 2, 3, 4, 5, 6, 7));
// [1, 2, 3, 4, 5, 6, 7];
// 28
