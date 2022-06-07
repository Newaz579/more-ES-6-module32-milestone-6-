const numbers = [1, 2, 4, 5, 6, 7, 8];
const output = [];
const doubleIt = x => x * x;
for (number of numbers) {
    output.push(doubleIt(number));
    console.log(doubleIt(number));
}// ei loop ta korsi numbers array ta k double kore output array modde push kore tarpor seta output kora. kintu ei pura kaj ta k amra niche j map use korsi seta diye korte pari
// console.log(output);

//map use in a array is means that:
//1. loop through each element
// 2. for each element all the provided function 
// 3. result for each element will be stored in an array
const square = numbers.map(doubleIt);
// console.log(square);
const square2 = numbers.map(x => x * x);
console.log(square2);
