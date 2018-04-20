import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';

@Injectable()
export class MessageService {

  messages: string[] = [];

  constructor() { }

  AddMessage(message: string): void {
    this.messages.push(message);
  }

  ClearMessages(): void {
    this.messages = [];
  }
}
