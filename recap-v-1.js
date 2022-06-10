// let and constant
const hubby = 'omar sani';
let phone = 'iphone 15';
phone = 'samsung glaxy s17';
const myNotes = `I am mojnu of ${hubby}. I don't have a laili.`;
console.log(myNotes);
//default parameter
function maxNumber(array = []) {
    const max = Math.max(...array);//...(three dots) means spread
    return max;
}
const biggest = maxNumber([12, 343, 32, 54, 35, 334]);
console.log(biggest);
// const  = `I am mojnu of ${hubby}. I have a ${phone}`;
// console.log(myNotes);
const square = x => x * x;
console.log(square(8));
