import { SharedUiNebularModule } from '@htd/shared/ui-nebular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { JokeComponent } from './containers/joke/joke.component';
import { JokeTextComponent } from './components/joke-text/joke-text.component';
import { JokeActionsComponent } from './components/joke-actions/joke-actions.component';
import { JokeFooterComponent } from './components/joke-footer/joke-footer.component';

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
  declarations: [JokeComponent, JokeTextComponent, JokeActionsComponent, JokeFooterComponent]
})
export class FeatureJokeModule {}
