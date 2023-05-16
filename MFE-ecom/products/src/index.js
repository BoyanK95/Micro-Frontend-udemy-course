import faker from 'faker';

let products = '';

for (let i = 0; i < 3; i++) {
    const name = faker.commerce.productName();
    products += `<div><h3>${name}</h3></div>`;
}

console.log(products);
