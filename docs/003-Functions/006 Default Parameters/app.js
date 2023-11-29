'use strict';
const orders = [];

// ES6 default parameters
const createOrder = function(phone, numCustomers=1, price=100*numCustomers){
    const newOrder = {
        phone,
        numCustomers,
        price
    }
    console.log(newOrder);
    orders.push(newOrder);
}
createOrder('0900-123456'); // { phone: '0900-123456', numCustomers: 1, price: 100 }
createOrder('0900-123456', 2, 800); // {phone: '0900-123456', numCustomers: 2, price: 800}
createOrder('0900-123456', 2); // {phone: '0900-123456', numCustomers: 2, price: 200}
createOrder('0900-123456', 5); // {phone: '0900-123456', numCustomers: 5, price: 500}
createOrder('0900-123456', undefined,  1000); // {phone: '0900-123456', numCustomers: 1, price: 1000}