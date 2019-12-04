import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedUiComponentsModule } from '@htd/shared/ui-components';
import { SharedUiNebularModule } from '@htd/shared/ui-nebular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedUiNebularModule,
    SharedUiComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
