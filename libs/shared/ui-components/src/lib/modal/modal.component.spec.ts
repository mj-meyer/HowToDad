import {
  createHostFactory,
  SpectatorHost,
  mockProvider
} from '@ngneat/spectator/jest';

import { ModalComponent } from './modal.component';
import { NbDialogRef } from '@nebular/theme';

describe('ModalComponent', () => {
  let spectator: SpectatorHost<ModalComponent>;

  const createHost = createHostFactory({
    component: ModalComponent,
    providers: [mockProvider(NbDialogRef)],
    shallow: true
  });

  it('should be defined', () => {
    spectator = createHost(`<htd-modal></htd-modal>`);
    expect(spectator.component).toBeTruthy();
  });

  // it('should...', () => {
  //   spectator = createHost(`<zippy title="Zippy title">Zippy content</zippy>`);
  //   spectator.click('.zippy__title');
  //   expect(spectator.query('.arrow')).toHaveText('Close');
  // });

  // it('should...', () => {
  //   spectator = createHost(`<zippy title="Zippy title"></zippy>`);
  //   spectator.click('.zippy__title');
  //   expect(host.query('.zippy__content')).toExist();
  //   spectator.click('.zippy__title');
  //   expect('.zippy__content').not.toExist();
  // });
});
