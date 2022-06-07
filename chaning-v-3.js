const myObject = { x: 2, y: 3, z: 4, a: 1, b: 5 };
const { x, b } = myObject;
console.log(b);
console.log('myObject', myObject?.p?.q); //jodi kunu ekta object er modde tke property khujte jai r jodi seta na takhe, tahole seta k amra try catch diye dhorte pari othoba ? diye o dhorte pari
const [p, q] = [34, 56];
// console.log(p, q);

const [best, faltu] = ['momotaj', 'sakina'];
// console.log(best, faltu);

const { sky, color, money } = { sky: 'blue', soil: 'matti', color: 'red', money: '500' };//destructuring bole eita k

//chaining
const company = {
    name: 'GP',
    ceo: {
        id: 1,
        name: 'Abul vai',
        food: 'Fuska'
    },
    itDepartment: {
        web: {
            work: 'website development',
            employee: 22,
            framework: 'React'
        }
    },
};
console(company?.itDepartment?.web.work);
console.log(company?.backend?.tech?.third);
//question mark diye lekha mane hocche ami j object er modde property gula khujtesi seta jodi takhe tahole tw dekhabe jodi na takhe tahole amk undifind bole dibe
