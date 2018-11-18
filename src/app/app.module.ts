import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {LandingComponent} from './landing/landing.component';
import {AppRoutingModule} from './app-routing.module';
import {HeaderComponent} from './core/header/header.component';
import {OperationsHistoryModule} from './operations-history/operations-history.module';
import {ServicesDetailsComponent} from './services/services-details/services-details.component';
import {ShowOffersModule} from './core/show-offers/show-offers.module';
import {BankAccountsModule} from './bank-accounts/bank-accounts.module';
import { FooterComponent } from './core/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    HeaderComponent,
    ServicesDetailsComponent,
    FooterComponent
  ],
  imports: [
    AppRoutingModule,
    OperationsHistoryModule,
    BankAccountsModule,
    BrowserModule,
    ShowOffersModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
