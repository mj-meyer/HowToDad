import { of } from 'rxjs';
import { LocalStorageService } from '@htd/feature-joke-state';
import { Joke } from '@htd/interfaces';
import {
  createHttpFactory,
  HttpMethod,
  SpectatorHttp
} from '@ngneat/spectator/jest';
import { JokeService } from './joke.service';
import { mockProvider } from '@ngneat/spectator';

describe('JokeService', () => {
  let spectator: SpectatorHttp<JokeService>;
  const createHttp = createHttpFactory({
    service: JokeService,
    providers: [mockProvider(LocalStorageService)]
  });

  const mockJoke = {
    id: '123456',
    joke: 'What did the shy pebble wish for? That she was a little boulder.',
    status: 200
  };

  beforeEach(() => (spectator = createHttp()));

  it('can call Joke API', () => {
    spectator.service.getNewJoke();
    spectator.expectOne('https://icanhazdadjoke.com/', HttpMethod.GET);
  });

  it('sets Joke observable as expected', () => {
    const jokeState = spectator.get(LocalStorageService);

    const mockRequestBody: Joke = { ...mockJoke, jokeState: 'Success' };
    spectator.service.getNewJoke();
    const jokeExists = jest
      .spyOn(jokeState, 'jokeExists')
      .mockReturnValue(of(true));

    const request = spectator.expectOne(
      'https://icanhazdadjoke.com/',
      HttpMethod.GET
    );
    request.flush(mockJoke);

    let jokeSubject;
    spectator.service.joke$.subscribe(joke => (jokeSubject = joke));

    expect(jokeSubject).toEqual(mockRequestBody);
  });

  it('should trigger loading of all jokes', () => {
    const jokeState = spectator.get(LocalStorageService);
    jest.spyOn(jokeState, 'addAllJokesToSubject');
    spectator.service.loadFavourites();

    expect(jokeState.addAllJokesToSubject).toHaveBeenCalled();
  });

  it('should change joke state to Exists', () => {
    const jokeState = spectator.get(LocalStorageService);
    const currentJoke: Joke = { ...mockJoke, jokeState: 'Success' };
    let jokeValue;
    spectator.service.setState(currentJoke);
    spectator.service.favouriteEvent();
    spectator.service.joke$.subscribe(joke => (jokeValue = joke));

    const expectedValue: Joke = { ...mockJoke, jokeState: 'Exists' };
    expect(jokeValue).toEqual(expectedValue);
  });

  it('should change joke state to Success', () => {
    const jokeState = spectator.get(LocalStorageService);
    const currentJoke: Joke = { ...mockJoke, jokeState: 'Exists' };
    let jokeValue;
    spectator.service.setState(currentJoke);
    spectator.service.favouriteEvent();
    spectator.service.joke$.subscribe(joke => (jokeValue = joke));

    const expectedValue: Joke = { ...mockJoke, jokeState: 'Success' };
    expect(jokeValue).toEqual(expectedValue);
  });
});
