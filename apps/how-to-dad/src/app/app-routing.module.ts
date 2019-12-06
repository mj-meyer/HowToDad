import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { featureJokeRoutes } from '@htd/feature-joke';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    children: featureJokeRoutes
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
