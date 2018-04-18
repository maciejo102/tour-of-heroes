import { HEROES } from './mock-heroes';
import { MessageService } from './message.service';
import { Hero } from './hero';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class HeroService {

  GetHero(id: number): Observable<Hero> {
    this.messageService.WriteMessage(`Hero with id = ${id} fetched.`);
    return of(HEROES.find(hero => hero.id === id));
  }
  constructor(private messageService: MessageService) { }

  GetHeroes(): Observable<Hero[]> {
    this.messageService.WriteMessage('Heroes fetched.');
    return of(HEROES);
  }
}
