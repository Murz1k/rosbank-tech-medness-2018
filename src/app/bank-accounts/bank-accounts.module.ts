import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BankAccountsComponent} from './bank-accounts.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [BankAccountsComponent],
  exports: [BankAccountsComponent]
})
export class BankAccountsModule {
}
