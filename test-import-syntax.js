import fetch from 'node-fetch';

const response = await fetch('https://stripe.com/');
const body = await response.text();

console.log(body);
