import { LocalStorageService } from '@htd/feature-joke-state';
import { JokeService } from '@htd/feature-joke/data-access-joke';
import { Joke, ModalEvent } from '@htd/interfaces';
import { Component, OnInit, EventEmitter } from '@angular/core';
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
            <button
              nbButton
              outline
              status="danger"
              (click)="events.emit({ event: 'deleteOne', payload: favourite })"
            >
              <nb-icon icon="close"></nb-icon>
            </button>
          </div>
        </nb-list-item>
      </nb-card-body>
      <nb-card-footer>
        <button
          size="small"
          nbButton
          status="info"
          (click)="events.emit({ event: 'shareAll' })"
        >
          <nb-icon icon="share"></nb-icon> Share List
        </button>
        <button
          size="small"
          outline
          nbButton
          status="danger"
          (click)="events.emit({ event: 'deleteAll' })"
        >
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
  events: EventEmitter<ModalEvent> = new EventEmitter<ModalEvent>();
  favourites$: Observable<Joke[]>;

  constructor(protected dialogRef: NbDialogRef<ModalComponent>) {}

  ngOnInit() {}

  close() {
    this.dialogRef.close();
  }
}
