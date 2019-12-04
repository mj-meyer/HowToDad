import { NbEvaIconsModule } from '@nebular/eva-icons';
import {
  NbThemeModule,
  NbLayoutModule,
  NbIconModule,
  NbCardModule,
  NbButtonModule
} from '@nebular/theme';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const nbModules = [
  NbLayoutModule,
  NbEvaIconsModule,
  NbIconModule,
  NbCardModule,
  NbButtonModule
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
