'use strict';

const orderId = 'zd3a14';
const customer = {
    name: 'Jack White',
    phone: '0900-123456',
}

const checkPaid = (orderId, customer) => {
    if(!customer.phone.startsWith('09')) throw new Error('Error Phone number')
    orderId = orderId + '-D';
    // console.log(orderId);
    customer.status = 'finished';
    // console.log(customer);
}

checkPaid(orderId, customer);
console.log(orderId); // zd3a14
console.log(customer); // {name: 'Jack White', phone: '0900-123456', status: 'finished'}