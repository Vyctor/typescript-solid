import { Discount } from '../../dip/classes/discount';
import CartItem from '../../dip/classes/interfaces/cart-item.interface';

export class ShoppingCart {
  private readonly _items: Array<CartItem> = [];

  constructor(private readonly discount: Discount) {}

  public addItem(item: CartItem): void {
    this._items.push(item);
  }

  public removeItem(index: number): void {
    this._items.splice(index, 1);
  }

  get items(): Readonly<Array<CartItem>> {
    return this._items;
  }

  public total(): number {
    return Number.parseFloat(this._items.reduce((valor, item) => valor + item.price, 0).toFixed(2));
  }

  public totalWithDiscount(): number {
    return this.discount.calculate(this.total());
  }

  public isEmpty(): boolean {
    return this._items.length === 0;
  }

  public clear() {
    console.log('O carrinho de compras foi limpo...');
    this._items.length = 0;
  }
}
