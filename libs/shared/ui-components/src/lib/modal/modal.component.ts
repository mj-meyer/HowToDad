import { LocalStorageService } from '@htd/feature-joke-state';
import { JokeService } from '@htd/feature-joke/data-access-joke';
import { Joke, ModalEvent, Share } from '@htd/interfaces';
import { Component, OnInit, EventEmitter } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';
import { Observable } from 'rxjs';

@Component({
  selector: 'htd-modal',
  template: `
    <htd-modal-favourites
      *ngIf="!share"
      [sharedList]="sharedList"
      [favourites]="favourites$ | async"
      (closeModal)="close()"
      (eventActions)="events.emit($event)"
    ></htd-modal-favourites>
    <htd-modal-share
      *ngIf="share"
      (closeModal)="close()"
      [uri]="share?.uri"
    ></htd-modal-share>
  `,
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  events: EventEmitter<ModalEvent> = new EventEmitter<ModalEvent>();
  favourites$: Observable<Joke[]>;
  share: Share;
  sharedList;

  constructor(protected dialogRef: NbDialogRef<ModalComponent>) {}

  ngOnInit() {}

  close() {
    this.dialogRef.close();
  }
}
