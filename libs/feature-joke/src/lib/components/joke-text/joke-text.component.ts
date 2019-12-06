import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'htd-joke-text',
  template: `
    <p data-test="joke-text">
      {{ joke }}
    </p>
  `,
  styleUrls: ['./joke-text.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class JokeTextComponent {
  @Input()
  joke;
}
