import { Observable } from 'rxjs';

import { Component, OnInit } from '@angular/core';
import { JokeService } from '@htd/feature-joke/data-access-joke';
import { Joke, Share } from '@htd/interfaces';
import { ModalComponent } from '@htd/shared/ui-components';
import { NbDialogService } from '@nebular/theme';

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

  constructor(
    private jokeService: JokeService,
    private dialogService: NbDialogService
  ) {}

  ngOnInit() {
    this.joke$ = this.jokeService.joke$;
    this.jokeService.loadFavourites();
    this.jokeService.getNewJoke();
    this.jokeService.shareAllJokes$.subscribe(data => {
      console.log('data share all', data);
      this.shareJoke(data);
    });
  }

  newJoke() {
    this.jokeService.getNewJoke();
  }

  favouriteEvent() {
    this.jokeService.favouriteEvent();
  }

  shareJoke(data) {
    this.jokeService.shareJoke(data).subscribe((share: Share) => {
      this.dialogService.open(ModalComponent, {
        context: { share }
      });
    });
  }

  viewAllFavourites() {
    const dialog = this.dialogService.open(ModalComponent, {
      context: { favourites$: this.jokeService.favouriteJokes$ }
    });

    const events = dialog.componentRef.instance.events.subscribe(event =>
      this.jokeService.modalEvents(event)
    );

    dialog.onClose.subscribe(_ => events.unsubscribe());
  }
}
