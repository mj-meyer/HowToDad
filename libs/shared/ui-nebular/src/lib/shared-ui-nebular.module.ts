import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import {
  NbButtonModule,
  NbCardModule,
  NbIconModule,
  NbLayoutModule,
  NbSpinnerModule,
  NbThemeModule
} from '@nebular/theme';

const nbModules = [
  NbLayoutModule,
  NbEvaIconsModule,
  NbIconModule,
  NbCardModule,
  NbButtonModule,
  NbSpinnerModule
];
@NgModule({
  imports: [
    CommonModule,
    NbThemeModule.forRoot({ name: 'htd-theme' }),
    ...nbModules
  ],
  exports: [NbThemeModule, ...nbModules]
})
export class SharedUiNebularModule {}
