import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter
} from '@angular/core';

@Component({
  selector: 'htd-modal-share',
  template: `
    <nb-card size="tiny">
      <nb-card-header>Share Jokes </nb-card-header>
      <nb-card-body>
        <nb-list-item>
          <div class="share">{{ uri }}</div>
        </nb-list-item>
      </nb-card-body>
      <nb-card-footer>
        <button nbButton size="small" status="success" (click)="copyLink()">
          <nb-icon icon="copy"></nb-icon> Copy Link
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
  styleUrls: ['./modal-share.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ModalShareComponent implements OnInit {
  @Input() uri;
  @Output() closeModal = new EventEmitter();
  constructor() {}

  ngOnInit() {}

  copyLink() {
    console.log('copy link');
    navigator.clipboard.writeText(this.uri).then(
      function() {
        /* clipboard successfully set */
      },
      function() {
        /* clipboard write failed */
      }
    );
  }
}
