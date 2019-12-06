import { Joke } from '@htd/interfaces';
import {
  createHttpFactory,
  HttpMethod,
  SpectatorHttp
} from '@ngneat/spectator/jest';
import { JokeService } from './joke.service';

describe('JokeService', () => {
  let spectator: SpectatorHttp<JokeService>;
  const createHttp = createHttpFactory(JokeService);

  beforeEach(() => (spectator = createHttp()));

  it('can call Joke API', () => {
    spectator.service.getNewJoke();
    spectator.expectOne('https://icanhazdadjoke.com/', HttpMethod.GET);
  });

  it('sets Joke observable as expected', () => {
    const mockJoke = {
      id: '123456',
      joke: 'What did the shy pebble wish for? That she was a little boulder.',
      status: 200
    };
    const mockRequestBody: Joke = { ...mockJoke, jokeState: 'Success' };
    spectator.service.getNewJoke();

    const request = spectator.expectOne(
      'https://icanhazdadjoke.com/',
      HttpMethod.GET
    );
    request.flush(mockJoke);

    let jokeSubject;
    spectator.service.joke$.subscribe(joke => (jokeSubject = joke));

    expect(jokeSubject).toEqual(mockRequestBody);
  });
});
