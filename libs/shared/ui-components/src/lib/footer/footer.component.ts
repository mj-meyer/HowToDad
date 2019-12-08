import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'htd-footer',
  template: `
    <p>
      ©2019 MJ Meyer |
      <a
        nbButton
        status="basic"
        size="tiny"
        target="_blank"
        href="https://github.com/mj-meyer/HowToDad"
      >
        <nb-icon icon="github"></nb-icon> View On Github
      </a>
    </p>
  `,
  styleUrls: ['./footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
