import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {LandingComponent} from './landing/landing.component';
import {AppRoutingModule} from './app-routing.module';
import {HeaderComponent} from './core/header/header.component';
import {OperationsHistoryModule} from './operations-history/operations-history.module';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    HeaderComponent
  ],
  imports: [
    AppRoutingModule,
    OperationsHistoryModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
