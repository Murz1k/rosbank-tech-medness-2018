import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-show-offers',
  templateUrl: './show-offers.component.html',
  styleUrls: ['./show-offers.component.scss']
})
export class ShowOffersComponent implements OnInit {

  offers = [];

  currentOffer;

  index = 1;

  constructor() {
  }

  ngOnInit() {
    this.offers = [
      {
        title: 'Экономьте каждый месяц', id: 0 // Депозит
      },
      {
        title: 'Личный водитель бесплатно', id: 1 // Premium card
      },
      {
        title: 'Персональный бухгалтер онлайн', id: 2 // Бухгалтерия
      }
    ];

    this.currentOffer = this.offers[0];

    setInterval(() => this.setCurrentOffer(), 10 * 1000);
  }

  setCurrentOffer() {
    this.currentOffer = this.offers[this.index++];
    if (this.index >= this.offers.length) {
      this.index = 0;
    }
  }
}
