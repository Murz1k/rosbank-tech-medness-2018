import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {OperationsHistoryComponent} from './operations-history.component';
import {SelectOperationTypeModule} from '../_shared/select-operation-type/select-operation-type.module';

@NgModule({
  imports: [
    SelectOperationTypeModule,
    CommonModule
  ],
  declarations: [OperationsHistoryComponent],
  exports: [OperationsHistoryComponent]
})
export class OperationsHistoryModule {
}
