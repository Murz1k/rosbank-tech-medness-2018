import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {AdminOfferManagementComponent} from './admin-offer-management/admin-offer-management.component';
import {AdminUserTemplateManagementComponent} from './admin-user-template-management/admin-user-template-management.component';

const appRoutes: Routes = [
  {path: '', redirectTo: 'offers'},
  {path: 'offers', component: AdminOfferManagementComponent},
  {path: 'user-templates', component: AdminUserTemplateManagementComponent},
  {path: '**', redirectTo: 'offers'}
];

@NgModule({
  imports: [
    RouterModule.forChild(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AdminRoutingModule {
}
