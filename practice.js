const notChangeValue = 20;
let valueCanChange = 17;
function forStringTemplate() {
    nam = "forStringTemplate";
}
const stringTemplate = `I have a this can not change. Because its constant type variable. and this value is ${notChangeValue}. And I have another value this can change anytime anywhere. and this value is ${valueCanChange}.`;
const functionDetails = `Now I have a function. The name of function is ${forStringTemplate}`;
// console.log(stringTemplate);
// console.log(functionDetails);

//1st arrow function
const arrowfunction = x => console.log(x / 5);
//call the arrow function
arrowfunction(10);
//2nd arrow function
const towValueArrowFunction = (x, y) => {
    console.log((x + 2) * (y + 2));
}
towValueArrowFunction(10, 20);
//3rd arrow function
const threeValueArrowFunction = (x, y, z) => {
    return x * y * z;
}
console.log(threeValueArrowFunction(10, 20, 30));
//4th arrow
const array = [10, 30, 20, 40, 5, 34, 3];
const copyArray1 = [];
copyArray1.push(array.map(x => x * 5));
// for (arrayValue of copyArray1) {
//     console.log(arrayValue);
// }
console.log(copyArray1);
//filter for finding odd value from an array
const numbers = [10, 3, 4, 5, 13, 30, 19, 55];
const oddNumbers = [];
oddNumbers.push(numbers.filter(number => number % 2 != 0));
console.log(oddNumbers);

function threeValue(x, y, z = 7) {
    return x + y + z;
}
console.log(threeValue(10, 20));
