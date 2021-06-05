/**
 * Módulos de alto nível não devem depender de módulos de baixo nível. Ambops devem depender de abstrações.
 * Depdenda de abstrações, não de implementações.
 * Abstrações não devem depender de detalhes. Detalhes devem depender de abstrações.
 *
 * Classes de baixo nível não são classes que executam tarefas (os detalhes)
 * Classes de alto nível são classes que gerenciam as classes de baixo nível.
 */
import { Order } from './classes/order';
import { Product } from './classes/product';
import { ShoppingCart } from './classes/shopping-cart';
import { Messaging } from './services/messaging';
import { Persistency } from './services/persistency';
import { TenPercentDiscount } from './classes/discount';
import { IndividualCustomer } from './classes/customer';

const tenPercentDiscount = new TenPercentDiscount();
const shoppingCart = new ShoppingCart(tenPercentDiscount);
const messaging = new Messaging();
const persistency = new Persistency(messaging);
const customerOrder = new IndividualCustomer('Vyctor', 'Vieira', '700.966.211-84');
const order = new Order(shoppingCart, messaging, persistency, customerOrder);

shoppingCart.addItem(new Product('Camiseta', 50.0));
shoppingCart.addItem(new Product('Caderno', 9.9));
shoppingCart.addItem(new Product('Lápis', 2.1));

console.log(order.orderStatus);
order.checkout();
console.log(order.orderStatus);
