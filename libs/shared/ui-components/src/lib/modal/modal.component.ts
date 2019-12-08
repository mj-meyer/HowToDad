import { LocalStorageService } from '@htd/feature-joke-state';
import { JokeService } from '@htd/feature-joke/data-access-joke';
import { Joke } from '@htd/interfaces';
import { Component, OnInit } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';
import { Observable } from 'rxjs';

@Component({
  selector: 'htd-modal',
  template: `
    <nb-card size="medium">
      <nb-card-header>Favourite Jokes </nb-card-header>
      <nb-card-body>
        <nb-list-item *ngFor="let favourite of favourites$ | async">
          <div class="joke">{{ favourite.joke }}</div>
          <div class="removeJoke">
            <button nbButton outline status="danger">
              <nb-icon icon="close"></nb-icon>
            </button>
          </div>
        </nb-list-item>
      </nb-card-body>
      <nb-card-footer>
        <button size="small" nbButton status="info">
          <nb-icon icon="share"></nb-icon> Share List
        </button>
        <button size="small" outline nbButton status="danger">
          <nb-icon icon="trash-2"></nb-icon> Delete List
        </button>
        <button
          size="small"
          nbButton
          (click)="dialogRef.close()"
          status="basic"
        >
          <nb-icon icon="close"></nb-icon>
          Close
        </button>
      </nb-card-footer>
    </nb-card>
  `,
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  favourites$: Observable<Joke[]>;

  constructor(protected dialogRef: NbDialogRef<ModalComponent>) {}

  ngOnInit() {
    // this.favourites$ = this.jokeState.favourites$;
  }

  close() {
    this.dialogRef.close();
  }
}
