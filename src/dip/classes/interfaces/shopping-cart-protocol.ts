import CartItem from './cart-item.interface';

export interface ShoppingCartProtocol {
  items: Readonly<Array<CartItem>>;

  addItem(item: CartItem): void;
  removeItem(index: number): void;
  total(): number;
  totalWithDiscount(): number;
  isEmpty(): boolean;
  clear(): void;
}
