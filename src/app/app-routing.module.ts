import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DetailsViewComponent } from './details-view/details-view.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  { path: 'heroes', component: HeroesComponent },
  { path: 'dashboard', component: DashboardComponent},
  { path: 'details/:id', component: DetailsViewComponent}
];

@NgModule({
   exports: [RouterModule],
   imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule {
}


