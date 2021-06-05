import { Messaging } from './messaging';

export class Persistency {
  constructor(private readonly messaging: Messaging) {}

  public saveOrder(): void {
    this.messaging.sendMessage('Pedido salvo com sucesso');
  }
}
