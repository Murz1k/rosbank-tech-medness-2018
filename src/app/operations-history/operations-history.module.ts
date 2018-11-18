import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {OperationsHistoryComponent} from './operations-history.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [OperationsHistoryComponent],
  exports: [OperationsHistoryComponent]
})
export class OperationsHistoryModule {
}
