/**
 * Open/closed principle
 * Entidades devem estar abertas para extensão, mas fechadas para modificação.
 */
import { Order } from './classes/order';
import { Product } from './classes/product';
import { ShoppingCart } from './classes/shopping-cart';
import { Messaging } from './services/messaging';
import { Persistency } from './services/persistency';
import { NoDiscount, TenPercentDiscount } from './classes/discount';

const noDiscount = new NoDiscount();
const tenPercentDiscount = new TenPercentDiscount();
const shoppingCart = new ShoppingCart(tenPercentDiscount);
const messaging = new Messaging();
const persistency = new Persistency(messaging);
const order = new Order(shoppingCart, messaging, persistency);

shoppingCart.addItem(new Product('Camiseta', 50.0));
shoppingCart.addItem(new Product('Caderno', 9.9));
shoppingCart.addItem(new Product('Lápis', 2.1));

console.log(order.orderStatus);
order.checkout();
console.log(order.orderStatus);
