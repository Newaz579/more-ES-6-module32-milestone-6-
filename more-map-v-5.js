const friends = ['Tom Hanks', 'Tom Cruise', 'Tom Brady', 'Tom Solaiman'];
const fLengths = friends.map(friend => friend.length);
console.log(fLengths);
const products = [
    { name: 'water bottle', price: 50, color: 'yellow' },
    { name: 'mobile phone', price: 120000, color: 'navy blue' },
    { name: 'smart watch', price: 18000, color: 'Black' },
    { name: 'sticky note', price: 30, color: 'pink' },
    { name: 'water glass', price: 3, color: 'white' }
];
const productNames = products.map(product => product.name);
const productPrices = products.map(product => product.price);
// console.log(productNames);
// console.log(productPrices);
products.forEach(product => console.log(product));
