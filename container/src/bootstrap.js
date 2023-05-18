import { mount as mountProducts } from 'products/ProductsIndex';
import { mount as mountCart } from 'cart/CartShow';

console.log('Container!');

const productsRoot = document.getElementById('my-products');
const cartRoot = document.getElementById('my-cart');
mountProducts(productsRoot);
mountCart(cartRoot);
