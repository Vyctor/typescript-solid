import { Order } from './entities/order';
import { Product } from './entities/product';
import { ShoppingCart } from './entities/shopping-cart';
import { Messaging } from './services/messaging';
import { Persistency } from './services/persistency';

const shoppingCart = new ShoppingCart();
const messaging = new Messaging();
const persistency = new Persistency(messaging);
const order = new Order(shoppingCart, messaging, persistency);

shoppingCart.addItem(new Product('Camiseta', 50.0));
shoppingCart.addItem(new Product('Caderno', 9.9));
shoppingCart.addItem(new Product('Lápis', 2.1));

console.log(order.orderStatus);
order.checkout();
console.log(order.orderStatus);
