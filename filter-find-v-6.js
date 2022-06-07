//filter mane hocche filter kora jemon ekta array ache ami oitar tke sudu 20 er boro number gula k chai tahole othoba oi array er j value gula ache ami oigular tke 10 er chuto number gula chai. r eitai hocche filter.
const numbers = [10, 3, 4, 5, 13, 30, 19, 55];
const bigNumbers = numbers.filter(number => number > 20);
console.log(bigNumbers);
const smallNumbers = numbers.filter(number => number < 10);
console.log(smallNumbers);

const products = [
    { name: 'water bottle', price: 50, color: 'yellow' },
    { name: 'mobile phone', price: 120000, color: 'navy blue' },
    { name: 'smart watch', price: 18000, color: 'black' },
    { name: 'sticky note', price: 30, color: 'pink' },
    { name: 'water glass', price: 3, color: 'white' }
];
const expensive = products.filter(product => product.price > 100);
// console.log(expensive);
const balckProduct = products.filter(product => product.color == 'black');
console.log(balckProduct);
//find
const whiteProduct = products.find(product => product.color == 'white');
console.log(whiteProduct);

//filter and find er modde ekta partokko ache r seta hocche filter tar condition er modde jare jare pabe sobai k niye ese dekhabe. kintu find tar condition er modde jake prothom pabe sudui takhe dekhabe baki gula k dekhabena
