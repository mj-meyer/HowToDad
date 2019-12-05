import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'htd-joke',
  template: `
    <nb-card class="joke-card">
      <nb-card-header>
        <div class="joke">
          <p>
            Why did the scarecrow win an award? Because he was outstanding in
            his field.
          </p>
        </div>
      </nb-card-header>
      <nb-card-body>
        <div class="joke-actions">
          <button nbButton size="small" outline>
            <nb-icon icon="heart-outline"></nb-icon> Add to Favourites</button
          ><button nbButton size="giant">
            <nb-icon icon="refresh-outline"></nb-icon> New Dad Joke</button
          ><button nbButton size="small" outline>
            <nb-icon icon="link-2-outline"></nb-icon> Share Dad Joke
          </button>
        </div>
      </nb-card-body>
      <nb-card-footer class="joke-footer">
        <button nbButton status="basic" size="tiny">
          <nb-icon icon="list-outline"></nb-icon> View All Favourites
        </button>
      </nb-card-footer>
    </nb-card>
  `,
  styleUrls: ['./joke.component.scss']
})
export class JokeComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
