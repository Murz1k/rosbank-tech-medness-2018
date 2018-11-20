import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  currentTab = 'history';

  allTabs = [];

  activeTabs = [];
  deactiveTabs = [];

  isChangeTab = false;

  menuItems = [];

  currentUserId;

  constructor(private route: ActivatedRoute) {
  }

  hasShowModule(moduleName: string): boolean {
    return JSON.parse(localStorage.getItem('savedMenuItems')).some(i => i === moduleName);
  }

  ngOnInit() {
    this.allTabs = [
      {url: 'history', title: 'Операции'},
      {url: 'accounts', title: 'Счета'},
      {url: '', title: 'Бухгалтерия'},
      {url: '', title: 'Инвестиции'},
      {url: '', title: ''}
    ];

    this.activeTabs = [
      {url: 'history', title: 'Операции'},
      {url: 'accounts', title: 'Счета'},
      {url: '', title: 'Бухгалтерия'}
    ];

    localStorage.getItem('savedMenuItems');
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

  changeTabs() {
    this.isChangeTab = true;
  }

  switchTab(tabName: string) {
    this.currentTab = tabName;
  }
}
