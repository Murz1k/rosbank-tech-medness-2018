import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminOfferManagementComponent } from './admin-offer-management/admin-offer-management.component';
import { AdminRoutingModule } from './admin-routing.module';
import { MatListModule, MatSelectModule, MatTableModule, MatInputModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminUserTemplateManagementComponent } from './admin-user-template-management/admin-user-template-management.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatTableModule,
    MatListModule,
    MatInputModule,
    AdminRoutingModule
  ],
  declarations: [AdminOfferManagementComponent, AdminUserTemplateManagementComponent]
})
export class AdminModule {
}
