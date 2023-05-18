import faker from 'faker';

const mount = (el) => {
    let products = '';

    for (let i = 0; i < 7; i++) {
        const name = faker.commerce.productName();
        products += `<div>${name}</div>`;
    }

    el.innerHTML = products;
};

//Context/Situation #1
//We are running this file in development in isolation
//We are running local index.html file
//DEFINITELY has element with chosen id
if (process.env.NODE_ENV === 'development') {
    const el = document.getElementById('dev-products')

    //Assuming container doesn't have an element with id 'dev-products'
    if (el) {
        //Probably running in isolation
        mount(el)
    }
}

//Context/Situation #2
//We are running file in development or production
//through CONTAINER app
//No GUARANTEEE that an element with the chosen id is there
//DO NOT WANT to try to imidiately render the app
export { mount };
