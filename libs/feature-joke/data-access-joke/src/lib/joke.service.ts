import { BehaviorSubject } from 'rxjs';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
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

  constructor(private http: HttpClient) {}

  setState(newState: Partial<Joke>) {
    const currentState = this._joke.getValue();
    const mergeState = { ...currentState, ...newState };
    this._joke.next(mergeState);
  }

  getNewJoke() {
    this.setState({ jokeState: 'Loading' });
    this.http.get(this.apiUrl, this.apiHeaders).subscribe((joke: Joke) => {
      const jokeResult: Joke = { ...joke, jokeState: 'Success' };
      this.setState(jokeResult);
    });
  }
}
