import {Injectable} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {of} from "rxjs/observable/of";

import {Hero} from "./hero";
import {HEROES} from "./mock-heroes";
import {MessageService} from "./message.service";
import {HttpClient} from "@angular/common/http";
import {catchError, tap} from "rxjs/operators";

@Injectable()
export class HeroService {

  private heroesUrl = 'api/heroes.json';

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) {
  }

  private log(message:string) {
    this.messageService.add(message);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    };
  }

  getHeroes(): Observable<Hero[]> {
    this.log('Hero Service: fetching heroes');
    // return of(HEROES);
    return this.http.get<Hero[]>(this.heroesUrl)
      .pipe(
        tap(heroes => this.log('fetched heroes')),
        catchError(this.handleError<Hero[]>('getHeroes', []))
      );
  }

  getHero(id: number): Observable<Hero> {
    this.log(`HeroService: fetching hero id=${id}`);
    const url = `/api/hero.${id}.json`;
    return this.http.get<Hero>(url).pipe(
      tap(_ => this.log(`fetched hero id=${id} from ${url}`)),
      catchError(this.handleError<Hero>('getHero'))
    );
  }
}
