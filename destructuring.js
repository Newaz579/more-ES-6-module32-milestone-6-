const fish = {
    id: 58,
    name: 'King Hilsha',
    price: 9000,
    phone: 01755555555,
    address: 'Chandpur',
    dress: 'Silver'
};
// const phone = fish.phone;
// const name = fish. name;
// const price = fish.price;
// const dress = fish.dress;
// const id = fish.id;
const { phone, price, dress, id, address } = fish; // { phone, price, dress, id, address ei jinisgula jodi fish er modde tke thake tahole fish er moddee j value gula ache eikhaner modde phone takhle phone er modde assign hoye jabe ekhi vabe price dress id erkm. r ei jinistai hocche destructing
console.log(id);
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

// const food = company.ceo.food;
// const work = company.itDepartment.web.work;
// console.log(food, work);
const { work, framework } = company.itDepartment.web;
const { food } = company.ceo;
console.log(work, framework, food);