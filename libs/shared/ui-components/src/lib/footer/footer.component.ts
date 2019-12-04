import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'htd-footer',
  template: `
    <p>
      ©2019 MJ Meyer |
      <button nbButton status="basic" size="tiny">
        <nb-icon icon="github"></nb-icon> View On Github
      </button>
    </p>
  `,
  styleUrls: ['./footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
