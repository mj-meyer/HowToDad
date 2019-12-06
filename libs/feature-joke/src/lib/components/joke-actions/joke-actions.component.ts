import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  Output,
  Input
} from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'htd-joke-actions',
  template: `
    <div class="joke-actions" data-test="jokeActions">
      <button
        nbButton
        size="small"
        outline
        data-test="btnFav"
        (click)="favouriteEvent.emit()"
      >
        <nb-icon
          class="heartIcon"
          icon="heart{{ isFavourite ? '' : '-outline' }}"
        ></nb-icon>
        {{ isFavourite ? 'Remove Favourite' : 'Add to Favourites' }}</button
      ><button
        nbButton
        size="giant"
        data-test="btnNewJoke"
        (click)="newJoke.emit()"
      >
        <nb-icon icon="refresh-outline"></nb-icon> New Dad Joke</button
      ><button
        nbButton
        size="small"
        outline
        data-test="btnShareJoke"
        (click)="shareJoke.emit()"
      >
        <nb-icon icon="link-2-outline"></nb-icon> Share Dad Joke
      </button>
    </div>
  `,
  styleUrls: ['./joke-actions.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class JokeActionsComponent implements OnInit {
  @Output() favouriteEvent = new EventEmitter();
  @Output() newJoke = new EventEmitter();
  @Output() shareJoke = new EventEmitter();

  @Input() isFavourite;
  constructor() {}

  ngOnInit() {}
}
