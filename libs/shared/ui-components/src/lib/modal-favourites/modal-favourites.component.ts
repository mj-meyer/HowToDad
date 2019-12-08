import { Joke } from './../../../../../interfaces/src/lib/joke';
import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Output,
  EventEmitter,
  Input
} from '@angular/core';
import { ModalEvent } from '@htd/interfaces';

@Component({
  selector: 'htd-modal-favourites',
  template: `
    <nb-card size="medium">
      <nb-card-header>Favourite Jokes </nb-card-header>
      <nb-card-body>
        <nb-list-item *ngFor="let favourite of favourites">
          <div class="joke">{{ favourite.joke }}</div>
          <div class="removeJoke">
            <button
              nbButton
              outline
              status="danger"
              (click)="
                eventActions.emit({ event: 'deleteOne', payload: favourite })
              "
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
          (click)="eventActions.emit({ event: 'shareAll' })"
        >
          <nb-icon icon="share"></nb-icon> Share List
        </button>
        <button
          size="small"
          outline
          nbButton
          status="danger"
          (click)="eventActions.emit({ event: 'deleteAll' })"
        >
          <nb-icon icon="trash-2"></nb-icon> Delete List
        </button>
        <button
          size="small"
          nbButton
          (click)="closeModal.emit()"
          status="basic"
        >
          <nb-icon icon="close"></nb-icon>
          Close
        </button>
      </nb-card-footer>
    </nb-card>
  `,
  styleUrls: ['./modal-favourites.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ModalFavouritesComponent implements OnInit {
  @Input() favourites: Joke[];
  @Output() closeModal = new EventEmitter<any>();
  @Output() eventActions = new EventEmitter<ModalEvent>();

  constructor() {}

  ngOnInit() {}
}
