import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  menuItems = [];

  constructor() {
  }

  ngOnInit() {
    this.menuItems = [
      {title: 'Обзор', url: ''},
      {title: 'Счета', url: ''},
      {title: 'Карты', url: ''},
      {title: 'Переводы', url: ''},
      {title: 'Вклады', url: ''},
      {title: 'Кредиты', url: ''},
      {title: 'Валюты', url: ''}
    ];
  }

}
