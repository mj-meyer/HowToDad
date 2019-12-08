import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedUiNebularModule } from '@htd/shared/ui-nebular';

import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ModalComponent } from './modal/modal.component';

@NgModule({
  imports: [CommonModule, SharedUiNebularModule],
  declarations: [HeaderComponent, FooterComponent, ModalComponent],
  exports: [HeaderComponent, FooterComponent, ModalComponent],
  entryComponents: [ModalComponent]
})
export class SharedUiComponentsModule {}
