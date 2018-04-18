import { HEROES } from './mock-heroes';
import { MessageService } from './message.service';
import { Hero } from './hero';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class HeroService {

  constructor(private messageService: MessageService) { }

  getHero(): Observable<Hero[]> {
    this.messageService.WriteMessage('Heroes fetched.');
    return of(HEROES);
  }
}
