import {
  createHostFactory,
  SpectatorHost,
  mockProvider
} from '@ngneat/spectator/jest';

import { ModalFavouritesComponent } from './modal-favourites.component';
import { NbDialogRef } from '@nebular/theme';

describe('ModalFavouritesComponent', () => {
  let spectator: SpectatorHost<ModalFavouritesComponent>;

  const createHost = createHostFactory({
    component: ModalFavouritesComponent,
    providers: [mockProvider(NbDialogRef)],
    shallow: true
  });

  it('should create', () => {
    spectator = createHost(`<htd-modal-favourites></htd-modal-favourites>`);
    expect(spectator.component).toBeTruthy();
  });
});
