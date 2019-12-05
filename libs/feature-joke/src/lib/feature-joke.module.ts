import { SharedUiNebularModule } from '@htd/shared/ui-nebular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { JokeComponent } from './containers/joke/joke.component';

export const featureJokeRoutes: Route[] = [
  {
    path: '',
    component: JokeComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(featureJokeRoutes),
    SharedUiNebularModule
  ],
  declarations: [JokeComponent]
})
export class FeatureJokeModule {}
