import { BehaviorSubject } from 'rxjs';
import { filter, mergeMap, toArray } from 'rxjs/operators';

import { Injectable } from '@angular/core';
import { Joke } from '@htd/interfaces';
import { StorageMap } from '@ngx-pwa/local-storage';

export type stateKey = 'favourites' | 'currentSession';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  private readonly _favourites = new BehaviorSubject<Joke[]>([]);
  readonly favourites$ = this._favourites.asObservable();

  constructor(private storage: StorageMap) {}

  get favourites(): Joke[] {
    return this._favourites.getValue();
  }

  set favourites(val: Joke[]) {
    this._favourites.next(val);
  }

  jokeId(id): string {
    return `favJoke_${id}`;
  }

  addJoke(joke: Joke) {
    const id = this.jokeId(joke.id);
    this.storage.set(id, joke).subscribe(() => {
      this.favourites = [...this.favourites, joke];
    });
  }

  removeJoke(joke: Joke) {
    const id = this.jokeId(joke.id);
    this.storage.delete(id).subscribe(() => {
      this.favourites = this.favourites.filter(
        jokeItem => joke.id !== jokeItem.id
      );
    });
  }

  jokeExists(joke: Joke) {
    const id = this.jokeId(joke.id);
    return this.storage.has(id);
  }

  addAllJokesToSubject() {
    this.storage
      .keys()
      .pipe(
        filter(key => key.startsWith('favJoke_')),
        mergeMap(key => this.storage.get(key)),
        toArray()
      )
      .subscribe((jokes: Joke[]) => {
        this.favourites = [...this.favourites, ...jokes];
      });
  }
}
