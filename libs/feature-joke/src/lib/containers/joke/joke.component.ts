import { Observable } from 'rxjs';

import { Component, OnInit } from '@angular/core';
import { JokeService } from '@htd/feature-joke/data-access-joke';
import { Joke } from '@htd/interfaces';

@Component({
  selector: 'htd-joke',
  template: `
    <ng-container *ngIf="joke$ | async as joke">
      <nb-card class="joke-card" [nbSpinner]="joke?.jokeState == 'Loading'">
        <nb-card-header>
          <htd-joke-text [joke]="joke?.joke"></htd-joke-text>
        </nb-card-header>
        <nb-card-body>
          <htd-joke-actions
            (favouriteEvent)="favouriteEvent()"
            (newJoke)="newJoke()"
            (shareJoke)="shareJoke()"
            [isFavourite]="joke?.jokeState == 'Exists'"
          ></htd-joke-actions>
        </nb-card-body>
        <nb-card-footer>
          <htd-joke-footer
            (viewAllFavourites)="viewAllFavourites()"
          ></htd-joke-footer>
        </nb-card-footer>
      </nb-card>
    </ng-container>
  `,
  styleUrls: ['./joke.component.scss']
})
export class JokeComponent implements OnInit {
  joke$: Observable<Joke>;

  constructor(private jokeService: JokeService) {}

  ngOnInit() {
    this.joke$ = this.jokeService.joke$;
    this.jokeService.getNewJoke();
  }

  newJoke() {
    this.jokeService.getNewJoke();
  }
  favouriteEvent() {
    this.jokeService.favouriteEvent();
  }
  shareJoke() {
    this.jokeService.shareJoke();
  }
  viewAllFavourites() {
    this.jokeService.viewAllFavourites();
  }
}
