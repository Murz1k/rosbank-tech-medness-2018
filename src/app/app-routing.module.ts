import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {LandingComponent} from './landing/landing.component';
import {ServicesDetailsComponent} from './services/services-details/services-details.component';

const appRoutes: Routes = [
  {path: '', component: LandingComponent},
  {path: 'admin', loadChildren: './admin/admin.module#AdminModule'},
  {path: 'services/:id', pathMatch: 'full', component: ServicesDetailsComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
