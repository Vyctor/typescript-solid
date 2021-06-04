import CartItem from './cart-item.interface';

export class Product implements CartItem {
  constructor(public name: string, public price: number) {}
}
