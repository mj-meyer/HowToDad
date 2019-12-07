import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FeatureJokeModule } from '@htd/feature-joke';
import { SharedUiComponentsModule } from '@htd/shared/ui-components';
import { SharedUiNebularModule } from '@htd/shared/ui-nebular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StorageModule } from '@ngx-pwa/local-storage';

@NgModule({
  declarations: [AppComponent],
  imports: [
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedUiNebularModule,
    SharedUiComponentsModule,
    FeatureJokeModule,
    StorageModule.forRoot({ IDBNoWrap: true })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
