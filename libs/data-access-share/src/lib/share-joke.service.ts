import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ShareJokeService {
  private apiUrl = 'https://api.myjson.com/bins';

  constructor(private http: HttpClient) {}

  getJokes(id) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  saveJokes(jokeData) {
    const dataToString = JSON.stringify(jokeData);
    return this.http.post(`${this.apiUrl}`, { data: dataToString });
  }
}
