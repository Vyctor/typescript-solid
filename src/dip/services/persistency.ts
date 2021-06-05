import { Messaging } from './messaging';
import { PersistencyProtocol } from '../classes/interfaces/persistency-protocol';

export class Persistency implements PersistencyProtocol {
  constructor(private readonly messaging: Messaging) {}

  public saveOrder(): void {
    this.messaging.sendMessage('Pedido salvo com sucesso');
  }
}
