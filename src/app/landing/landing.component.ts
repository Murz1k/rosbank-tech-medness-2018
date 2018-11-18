import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  currentTab = 'history';

  menuItems = [];

  currentUserId;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.currentUserId = params['id'];
    });
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

  switchTab(tabName: string) {
    this.currentTab = tabName;
  }
}
