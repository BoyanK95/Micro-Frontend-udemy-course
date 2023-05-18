import React from 'react';
import ReactDom from 'react-dom';

const mount = (el) => {
    ReactDom.render(<h1>Hello there!</h1>, el);
};

if (process.env.NODE_ENV === 'development') {
    const devRoot = document.getElementById('_marketing-dev-root');

    if (devRoot) {
        mount(devRoot);
    }
}

export { mount };