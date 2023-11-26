'use strict';

// Map: map與object不同的是，key可以是string以外的類型
// .get(<property>)
// .delete(<property>)
// .set(<property>, <value>)

const cart = new Map();
cart.set('brand', 'Tesla');
cart.set('name', 'model y');
cart.set(true, 'I bought it.')
console.log(cart.set(2, 'Fremont'));
// 0: {"brand" => "Tesla"}
// 1: {"name" => "model y"}
// 2: {"true" => "I bought it."}
// 3: {2 => "Fremont"}

console.log(cart.get('name')); // model y
console.log(cart.get(true)); // I bought it.

console.log(cart.has('categories')); // false
cart.delete(2)
// cart.clear();
console.log(cart); // Map(3) {'brand' => 'Tesla', 'name' => 'model y', true => 'I bought it.'}

const arr = [1, 2];
cart.set(arr, 'Test')
console.log(cart); // Map(4) {'brand' => 'Tesla', 'name' => 'model y', true => 'I bought it.', Array(2) => 'Test'}
console.log(cart.size); // 4

console.log(cart.get(arr)); // Test