import { createHostFactory, SpectatorHost } from '@ngneat/spectator/jest';

import { JokeFooterComponent } from './joke-footer.component';

describe('JokeFooterComponent', () => {
  let spectator: SpectatorHost<JokeFooterComponent>;

  const createHost = createHostFactory({
    component: JokeFooterComponent,
    shallow: true
  });

  it('should be defined', () => {
    spectator = createHost(`<htd-joke-footer></htd-joke-footer>`);
    expect(spectator.component).toBeTruthy();
  });

  it('should receive correct input', () => {
    const testString = 'This is a test joke';
    spectator = createHost(`<htd-joke-footer></htd-joke-footer>`);

    const emitSpy = spyOn(spectator.component.viewAllFavourites, 'emit');
    spectator.click('[data-test="btnAllFavourites"]');

    expect(emitSpy).toHaveBeenCalled();
  });
});
