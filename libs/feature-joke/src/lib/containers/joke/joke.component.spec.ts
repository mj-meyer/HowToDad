import { JokeActionsComponent } from './../../components/joke-actions/joke-actions.component';
import {
  Spectator,
  createComponentFactory,
  SpectatorHost,
  createHostFactory
} from '@ngneat/spectator/jest';

import { JokeComponent } from './joke.component';

describe('JokeComponent', function() {
  let spectator: SpectatorHost<JokeActionsComponent, JokeComponent>;
  const createHost = createHostFactory({
    component: JokeActionsComponent,
    host: JokeComponent,
    shallow: true
  });

  it('should be defined', () => {
    spectator = createHost(`<htd-joke-actions></htd-joke-actions>`);
    expect(spectator.component).toBeDefined();
    expect(spectator.hostComponent).toBeDefined();
  });

  it('should display the host component title', () => {
    spectator = createHost(`<htd-joke-actions 
    (newJoke)="newJoke()"
    ></htd-joke-actions>`);

    const hostFav = spyOn(spectator.hostComponent, 'newJoke');

    spectator.click('[data-test="btnNewJoke"]');
    expect(hostFav).toHaveBeenCalled();
  });
});
