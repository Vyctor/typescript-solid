type CartItem = { name: string; price: number };
type OrderStatus = 'open' | 'closed';

export class ShoppingCartLegacy {
  private readonly _items: Array<CartItem> = [];
  private _orderStatus: OrderStatus = 'open';

  public addItem(item: CartItem): void {
    this._items.push(item);
  }

  public removeItem(index: number): void {
    this._items.splice(index, 1);
  }

  get items(): Readonly<Array<CartItem>> {
    return this._items;
  }

  get orderStatus(): OrderStatus {
    return this._orderStatus;
  }

  public total(): number {
    return Number.parseFloat(this._items.reduce((valor, item) => valor + item.price, 0).toFixed(2));
  }

  public checkout(): void {
    if (this.isEmpty()) {
      console.log('Seu carrinhjo está vazio');
      return;
    }

    this._orderStatus = 'closed';
    this.sendMessage(`Seu pedido com total de ${this.total()} foi recebido.`);
    this.saveOrder();
    this.clear();
  }

  public isEmpty(): boolean {
    return this._items.length === 0;
  }

  public sendMessage(mensage: string): void {
    console.log('Mensagem enviada: ', mensage);
  }

  public saveOrder(): void {
    console.log('Pedido salvo com sucesso');
  }

  public clear() {
    console.log('O carrinho de compras foi limpo...');
    this._items.length = 0;
  }
}

const shoppingCart = new ShoppingCartLegacy();

shoppingCart.addItem({ name: 'Camiseta', price: 50.0 });
shoppingCart.addItem({ name: 'Caderno', price: 9.9 });
shoppingCart.addItem({ name: 'Lápis', price: 2.1 });

console.log(shoppingCart.orderStatus);
shoppingCart.checkout();
console.log(shoppingCart.orderStatus);
