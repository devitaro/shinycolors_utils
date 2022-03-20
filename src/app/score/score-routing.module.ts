import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { CanDeactivateGuard } from './can-deactivate.guard';
import { ScoreComponent } from './containers/score.component';


const routes: Routes = [
  {
    path: 'score',
    component:  ScoreComponent,
    //canDeactivate: [CanDeactivateGuard],
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ScoreRoutingModule {}
