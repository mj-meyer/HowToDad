import { createHostFactory, SpectatorHost } from '@ngneat/spectator/jest';

import { JokeTextComponent } from './joke-text.component';

describe('JokeTextComponent', () => {
  let spectator: SpectatorHost<JokeTextComponent>;

  const createHost = createHostFactory(JokeTextComponent);

  it('should be defined', () => {
    spectator = createHost(`<htd-joke-text></htd-joke-text>`);
    expect(spectator.component).toBeTruthy();
  });

  it('should receive correct input', () => {
    const testString = 'This is a test joke';
    spectator = createHost(`<htd-joke-text [joke]="joke"></htd-joke-text>`, {
      hostProps: {
        joke: 'This is a test joke'
      }
    });
    const jokeText = spectator.query('p');

    expect(spectator.component.joke).toEqual(testString);
    expect(jokeText).toHaveText(testString);
  });
});
