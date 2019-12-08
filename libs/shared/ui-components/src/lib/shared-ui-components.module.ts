import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedUiNebularModule } from '@htd/shared/ui-nebular';

import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ModalComponent } from './modal/modal.component';
import { ModalFavouritesComponent } from './modal-favourites/modal-favourites.component';
import { ModalShareComponent } from './modal-share/modal-share.component';

@NgModule({
  imports: [CommonModule, SharedUiNebularModule],
  declarations: [HeaderComponent, FooterComponent, ModalComponent, ModalFavouritesComponent, ModalShareComponent],
  exports: [HeaderComponent, FooterComponent, ModalComponent],
  entryComponents: [ModalComponent]
})
export class SharedUiComponentsModule {}
