import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'htd-joke',
  template: `
    <nb-card class="joke-card">
      <nb-card-header>
        <htd-joke-text
          joke="Why did the scarecrow win an award? Because he was outstanding in his
        field."
        ></htd-joke-text>
      </nb-card-header>
      <nb-card-body>
        <htd-joke-actions
          (favouriteEvent)="favouriteEvent()"
          (newJoke)="newJoke()"
          (shareJoke)="shareJoke()"
          [isFavourite]="false"
        ></htd-joke-actions>
      </nb-card-body>
      <nb-card-footer>
        <htd-joke-footer
          (viewAllFavourites)="viewAllFavourites()"
        ></htd-joke-footer>
      </nb-card-footer>
    </nb-card>
  `,
  styleUrls: ['./joke.component.scss']
})
export class JokeComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  favouriteEvent() {}
  newJoke() {}
  shareJoke() {}
  viewAllFavourites() {}
}
