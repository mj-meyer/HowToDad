import { of } from 'rxjs';

import { Joke } from '@htd/interfaces';
import {
  createServiceFactory,
  mockProvider,
  SpectatorService
} from '@ngneat/spectator/jest';
import { StorageMap } from '@ngx-pwa/local-storage';

import { LocalStorageService } from './local-storage.service';

describe('LocalStorageService', () => {
  let spectator: SpectatorService<LocalStorageService>;
  const mockJoke: Joke = {
    id: '1',
    joke: 'The invention of the wheel was what got things rolling',
    status: 200,
    jokeState: 'Success'
  };
  const mockJokeId = 'favJoke_1';
  const createService = createServiceFactory({
    service: LocalStorageService,
    providers: [mockProvider(StorageMap)]
  });

  beforeEach(() => {
    spectator = createService();
  });

  it('should be defined', () => {
    expect(spectator.service).toBeDefined();
  });

  it('should get joke ID', () => {
    const mockId = spectator.service.jokeId(mockJoke.id);
    expect(mockId).toEqual(mockJokeId);
  });

  it('should ADD joke to storage and subject', () => {
    const mockStorage = spectator.get(StorageMap);

    jest.spyOn(mockStorage, 'set').mockImplementation(() => of<any>({}));
    spectator.service.addJoke(mockJoke);

    expect(mockStorage.set).toHaveBeenCalledWith(mockJokeId, mockJoke);
    expect(spectator.service.favourites).toEqual([mockJoke]);
  });

  it('should REMOVE joke to storage and subject', () => {
    const mockStorage = spectator.get(StorageMap);
    spectator.service.favourites = [
      {
        id: '1',
        joke: 'The invention of the wheel was what got things rolling',
        status: 200,
        jokeState: 'Success'
      }
    ];
    jest.spyOn(mockStorage, 'delete').mockImplementation(() => of<any>({}));
    spectator.service.removeJoke(mockJoke);

    expect(mockStorage.delete).toHaveBeenCalledWith(mockJokeId);
    expect(spectator.service.favourites).toEqual([]);
  });

  it('should check if Joke EXISTS', () => {
    const mockStorage = spectator.get(StorageMap);

    jest.spyOn(mockStorage, 'has').mockImplementation(() => of<any>({}));
    spectator.service.jokeExists(mockJoke);

    expect(mockStorage.has).toHaveBeenCalledWith(mockJokeId);
  });
});
