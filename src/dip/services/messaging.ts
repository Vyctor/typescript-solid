import { MessagingProtocol } from '../classes/interfaces/messaging-protocol';

export class Messaging implements MessagingProtocol {
  public sendMessage(mensage: string): void {
    console.log('Mensagem enviada: ', mensage);
  }
}
