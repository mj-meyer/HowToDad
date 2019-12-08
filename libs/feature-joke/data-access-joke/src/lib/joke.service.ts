import { BehaviorSubject } from 'rxjs';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LocalStorageService } from '@htd/feature-joke-state';
import { Joke } from '@htd/interfaces';

@Injectable({
  providedIn: 'root'
})
export class JokeService {
  private apiUrl = 'https://icanhazdadjoke.com/';
  private apiHeaders = {
    headers: new HttpHeaders().set('Accept', 'application/json')
  };

  private jokeInitialValue: Joke = {
    id: null,
    joke: 'Loading dad joke...',
    status: null,
    jokeState: 'Loading'
  };

  private _joke = new BehaviorSubject<Joke>(this.jokeInitialValue);
  public joke$ = this._joke.asObservable();

  constructor(
    private http: HttpClient,
    private jokeState: LocalStorageService
  ) {}

  favouriteJokes$ = this.jokeState.favourites$;

  loadFavourites() {
    this.jokeState.addAllJokesToSubject();
  }

  setState(newState: Partial<Joke>) {
    const currentState = this._joke.getValue();
    const mergeState = { ...currentState, ...newState };
    this._joke.next(mergeState);
  }

  getNewJoke() {
    this.setState({ jokeState: 'Loading' });
    this.http.get(this.apiUrl, this.apiHeaders).subscribe((joke: Joke) => {
      const jokeResult: Joke = { ...joke, jokeState: 'Success' };
      this.jokeState.jokeExists(jokeResult).subscribe(exists => {
        if (exists) {
          this.setState({ ...joke, jokeState: 'Exists' });
          return;
        }
      });
      this.setState(jokeResult);
    });
  }

  favouriteEvent() {
    const currentJoke = this._joke.getValue();
    if (currentJoke.jokeState === 'Exists') {
      this.jokeState.removeJoke(currentJoke);
      this.setState({ jokeState: 'Success' });
    } else {
      this.jokeState.addJoke(currentJoke);
      this.setState({ jokeState: 'Exists' });
    }
  }
  shareJoke() {}
  viewAllFavourites() {}
}
