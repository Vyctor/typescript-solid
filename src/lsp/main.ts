/**
 * Liskov Substitution Principle
 * Se o(x) é uma propriedade demonstrável dos objetos x de tipo T, então o(y) deve ser verdadeiro
 * para os objetos y de tipo S on S é um subtipo de T.
 *
 * Simplificando: substipos prcisam ser substituíveis por seus tipos de base (subtipos).
 * Mais simples ainda: Se meu programa espera um Animal, algo do tipo Cachorro, (que herda de Animal), deve servir
 * como qualquer outro Animal
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
