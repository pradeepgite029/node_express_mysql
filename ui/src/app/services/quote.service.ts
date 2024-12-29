import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuoteService {

  constructor() { }

  message = new BehaviorSubject("Hello Wolrld!");

  currentMessage = this.message.asObservable();

  updateMessage(text: string) {
    this.message.next(text);
  }
}
