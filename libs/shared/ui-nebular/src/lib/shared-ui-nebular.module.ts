import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import {
  NbButtonModule,
  NbCardModule,
  NbIconModule,
  NbLayoutModule,
  NbSpinnerModule,
  NbThemeModule,
  NbDialogModule,
  NbListModule
} from '@nebular/theme';

const nbModules = [
  NbLayoutModule,
  NbEvaIconsModule,
  NbIconModule,
  NbCardModule,
  NbButtonModule,
  NbSpinnerModule,
  NbListModule
];
@NgModule({
  imports: [
    CommonModule,
    NbThemeModule.forRoot({ name: 'htd-theme' }),
    NbDialogModule.forRoot(),
    ...nbModules
  ],
  exports: [NbThemeModule, ...nbModules]
})
export class SharedUiNebularModule {}
