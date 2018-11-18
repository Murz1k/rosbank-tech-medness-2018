import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-select-operation-type',
  templateUrl: './select-operation-type.component.html',
  styleUrls: ['./select-operation-type.component.scss']
})
export class SelectOperationTypeComponent implements OnInit {

  @Input() placeHolder = 'Тип операции';

  _selectedItemValues;

  showList = false;

  itemGroups = [];

  constructor() {
  }

  ngOnInit() {
    this.itemGroups = [
      {
        title: 'Списания', items: [
          {title: 'Расчёты с контрагентами'},
          {title: 'Расчёты с персоналом'},
          {title: 'Размещение средств'},
          {title: 'Банковское обслуживание'},
          {title: 'Расчёты с бюджетом'},
          {title: 'Прочие списания'},
          {title: 'Между своими счетами'}
        ]
      },
      {
        title: 'Зачисления', items: [
          {title: 'Поступления от экваринга'},
          {title: 'Взнос наличных/инкассация'},
          {title: 'Поступление от контрагентов'},
          {title: 'Возврат средств'},
          {title: 'Выплата процентов'},
          {title: 'Прочие поступления'},
          {title: 'Между своими счетами'}
        ]
      }
    ];
  }
}
