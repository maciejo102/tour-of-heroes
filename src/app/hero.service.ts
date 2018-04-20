import { tap, catchError } from 'rxjs/operators';

import { HEROES } from './mock-heroes';
import { MessageService } from './message.service';
import { Hero } from './hero';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HeroService {

  private heroesUrl = 'api/heroes';

  GetHero(id: number): Observable<Hero> {
    this.messageService.AddMessage(`Hero with id = ${id} fetched.`);
    return of(HEROES.find(hero => hero.id === id));
  }
  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  GetHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.heroesUrl).pipe(
      tap(_ => this.Log('Fetched heroes')),
      catchError(this.HandleException('GetHeroes', []))
    );
  }

  private Log(message: string) {
    this.messageService.AddMessage('Hero Service: ' + message);
  }

  private HandleException<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.Log(`${operation} failed. ${error.message}`);
      return of(result as T);
    };
  }
}
