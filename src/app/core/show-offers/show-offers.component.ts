import {Component, Input, OnInit} from '@angular/core';
import {ShowOffersService} from './show-offers.service';

@Component({
  selector: 'app-show-offers',
  templateUrl: './show-offers.component.html',
  styleUrls: ['./show-offers.component.scss']
})
export class ShowOffersComponent implements OnInit {

  @Input() userId: number;

  offers = [];

  currentOffer;

  index = 1;

  constructor(private service: ShowOffersService) {
  }

  ngOnInit() {
    // this.offers = [
    //   {
    //     title: 'Экономьте каждый месяц', id: 0 // Депозит
    //   },
    //   {
    //     title: 'Личный водитель бесплатно', id: 1 // Premium card
    //   },
    //   {
    //     title: 'Персональный бухгалтер онлайн', id: 2 // Бухгалтерия
    //   }
    // ];

    this.service.getOffersByUserId(this.userId).subscribe((response) => {
      this.currentOffer = this.offers[0];
      this.offers = response.map(i => <any>{title: i.text, id: i.id});

      setInterval(() => this.setCurrentOffer(), 10 * 1000);
    });
  }

  setCurrentOffer() {
    this.currentOffer = this.offers[this.index++];
    if (this.index >= this.offers.length) {
      this.index = 0;
    }
  }
}
