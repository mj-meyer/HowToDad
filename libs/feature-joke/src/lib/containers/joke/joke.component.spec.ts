import { Spectator, createComponentFactory } from '@ngneat/spectator/jest';

import { JokeComponent } from './joke.component';

describe('JokeComponent', () => {
  let spectator: Spectator<JokeComponent>;
  const createComponent = createComponentFactory(JokeComponent);

  it('should create', () => {
    spectator = createComponent();

    expect(spectator.component).toBeTruthy();
  });
});
