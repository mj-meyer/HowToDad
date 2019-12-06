import { createHostFactory, SpectatorHost } from '@ngneat/spectator/jest';

import { JokeActionsComponent } from './joke-actions.component';

describe('JokeActionsComponent', () => {
  let spectator: SpectatorHost<JokeActionsComponent>;

  const createHost = createHostFactory({
    component: JokeActionsComponent,
    shallow: true
  });

  it('should be defined', () => {
    spectator = createHost(`<htd-joke-actions></htd-joke-actions>`);
    expect(spectator.component).toBeTruthy();
  });

  it('should modify template when it isFavourite', () => {
    const testString = 'Remove Favourite';
    spectator = createHost(
      `<htd-joke-actions [isFavourite]="isFavourite"></htd-joke-actions>`,
      {
        hostProps: {
          isFavourite: true
        }
      }
    );
    const btnFav = spectator.query('[data-test="btnFav"]');

    expect(spectator.component.isFavourite).toEqual(true);
    expect(btnFav).toHaveText(testString);
  });

  it('should modify template when it is NOT isFavourite', () => {
    const testString = 'Add to Favourites';
    spectator = createHost(
      `<htd-joke-actions [isFavourite]="isFavourite"></htd-joke-actions>`,
      {
        hostProps: {
          isFavourite: false
        }
      }
    );
    const btnFav = spectator.query('[data-test="btnFav"]');

    expect(spectator.component.isFavourite).toEqual(false);
    expect(btnFav).toHaveText(testString);
  });

  it('should emit $events on click of each button', () => {
    spectator = createHost(`<htd-joke-actions></htd-joke-actions>`);
    const favouriteEvent = spyOn(spectator.component.favouriteEvent, 'emit');
    const newJoke = spyOn(spectator.component.newJoke, 'emit');
    const shareJoke = spyOn(spectator.component.shareJoke, 'emit');

    spectator.click('[data-test="btnFav"]');
    spectator.click('[data-test="btnNewJoke"]');
    spectator.click('[data-test="btnShareJoke"]');

    // spectator.component.onClick({ type: 'click' });
    expect(favouriteEvent).toHaveBeenCalled();
    expect(newJoke).toHaveBeenCalled();
    expect(shareJoke).toHaveBeenCalled();
  });
});
