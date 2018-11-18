import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ShowOffersComponent} from './show-offers.component';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [ShowOffersComponent],
  exports: [ShowOffersComponent]
})
export class ShowOffersModule {
}
