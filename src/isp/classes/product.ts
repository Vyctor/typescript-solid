import CartItem from './interfaces/cart-item.interface';

export class Product implements CartItem {
  constructor(public name: string, public price: number) {}
}
