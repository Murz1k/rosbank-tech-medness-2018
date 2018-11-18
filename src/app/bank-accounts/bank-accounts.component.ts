import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-bank-accounts',
  templateUrl: './bank-accounts.component.html',
  styleUrls: ['./bank-accounts.component.scss']
})
export class BankAccountsComponent implements OnInit {

  accounts = [];

  constructor() {
  }

  ngOnInit() {
    this.accounts = [
      {
        title: 'ООО "Ромашка"',
        value: '10 150 000',
        cops: '00',
        currency: '₽',
        status: 'Движения по счету ограничены',
        account: '40702 810 7 8888 8888888'
      },
      {
        title: 'ООО "Ромашка"',
        value: '10 150 000',
        cops: '00',
        currency: '₽',
        status: 'Движения по счету ограничены',
        account: '40702 810 7 8888 8888888'
      },
      {
        title: 'ООО "Ромашка"',
        value: '10 150 000',
        cops: '00',
        currency: '₽',
        status: 'Движения по счету ограничены',
        account: '40702 810 7 8888 8888888'
      },
      {
        title: 'ООО "Ромашка"',
        value: '10 150 000',
        cops: '00',
        currency: '₽',
        status: 'Движения по счету ограничены',
        account: '40702 810 7 8888 8888888'
      }
    ];
  }
}
