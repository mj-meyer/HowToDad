import { Joke } from '@htd/interfaces';
import { createHttpFactory, HttpMethod } from '@ngneat/spectator';
import { ShareJokeService } from './share-joke.service';

describe('ShareJokeService', () => {
  let spectator: SpectatorHttp<ShareJokeService>;
  const createHttp = createHttpFactory(ShareJokeService);
  const apiUrl = 'https://api.myjson.com/bins';
  const mockJoke: Joke = {
    id: '123456',
    joke: 'What did the shy pebble wish for? That she was a little boulder.',
    status: 200,
    jokeState: 'Exists'
  };
  beforeEach(() => (spectator = createHttp()));

  it('can get joke', () => {
    spectator.service.getJokes('1').subscribe();
    spectator.expectOne(`${apiUrl}/1`, HttpMethod.GET);
  });
  it('can save joke', () => {
    spectator.service.saveJokes(mockJoke).subscribe();
    const request = spectator.expectOne(`${apiUrl}`, HttpMethod.POST);
    // request.request.body /*? */
    const expectedResponse = {
      data:
        '{"id":"123456","joke":"What did the shy pebble wish for? That she was a little boulder.","status":200,"jokeState":"Exists"}'
    };
    expect(request.request.body).toEqual(expectedResponse);
  });
});
