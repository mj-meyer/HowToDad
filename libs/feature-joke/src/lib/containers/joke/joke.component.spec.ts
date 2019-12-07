import { of } from 'rxjs';

import { fakeAsync } from '@angular/core/testing';
import { JokeService } from '@htd/feature-joke/data-access-joke';
import {
  createComponentFactory,
  mockProvider,
  Spectator
} from '@ngneat/spectator/jest';

import { JokeComponent } from './joke.component';

describe('JokeComponent', () => {
  let spectator: Spectator<JokeComponent>;
  let mockJokeService: JokeService;
  const createComponent = createComponentFactory({
    component: JokeComponent,
    providers: [
      mockProvider(JokeService, {
        joke$: of({
          id: null,
          joke: 'Loading dad joke...',
          status: null,
          jokeState: 'Loading'
        })
      })
    ],
    shallow: true
  });

  beforeEach(function() {
    spectator = createComponent();
    mockJokeService = spectator.get(JokeService);
  });

  it('should be defined', () => {
    expect(spectator.component).toBeTruthy();
  });

  it('should GET new Joke on component INIT', () => {
    expect(mockJokeService.getNewJoke).toHaveBeenCalled();
    expect(mockJokeService.getNewJoke).toHaveBeenCalledTimes(1);
  });

  it('should have initial joke data', fakeAsync(() => {
    const mockJokeInit = {
      id: null,
      joke: 'Loading dad joke...',
      status: null,
      jokeState: 'Loading'
    };

    let subscriber;
    spectator.component.joke$.subscribe(joke => {
      subscriber = joke;
    });
    expect(subscriber).toEqual(mockJokeInit);
  }));

  it('should be able to get a new Joke', () => {
    spectator.component.newJoke();
    expect(mockJokeService.getNewJoke).toHaveBeenCalledTimes(2);
  });
  it('should be able to trigger favourite event', () => {
    spectator.component.favouriteEvent();
    expect(mockJokeService.favouriteEvent).toHaveBeenCalledTimes(1);
  });
  it('should be able to trigger share Joke', () => {
    spectator.component.shareJoke();
    expect(mockJokeService.shareJoke).toHaveBeenCalledTimes(1);
  });
  it('should be able to trigger all favourites', () => {
    spectator.component.viewAllFavourites();
    expect(mockJokeService.viewAllFavourites).toHaveBeenCalledTimes(1);
  });
});
