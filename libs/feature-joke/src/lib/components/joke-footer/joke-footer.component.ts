import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Output,
  EventEmitter
} from '@angular/core';

@Component({
  selector: 'htd-joke-footer',
  template: `
    <button
      nbButton
      status="basic"
      size="tiny"
      data-test="btnAllFavourites"
      (click)="viewAllFavourites.emit()"
    >
      <nb-icon icon="list-outline"></nb-icon> View All Favourites
    </button>
  `,
  styleUrls: ['./joke-footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class JokeFooterComponent {
  @Output() viewAllFavourites = new EventEmitter();
}
