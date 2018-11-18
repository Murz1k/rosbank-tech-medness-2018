import {Component, OnInit} from '@angular/core';
import {AdminOfferManagementService} from '../admin-offer-management.service';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-admin-offer-management',
  templateUrl: './admin-offer-management.component.html',
  styleUrls: ['./admin-offer-management.component.scss']
})
export class AdminOfferManagementComponent implements OnInit {

  public form: FormGroup;

  templates = [];
  offers = [];
  services = [];

  constructor(private formBuilder: FormBuilder,
              private service: AdminOfferManagementService) {
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      userTemplate: undefined,
      text: '',
      service: undefined
    });

    this.loadData();

    this.service.getTemplates().subscribe((response) => {
      this.templates = response;
    });
    this.service.getServices().subscribe((response) => {
      this.services = response;
    });
  }

  private loadData() {
    this.service.getOffers().subscribe((response) => {
      this.offers = response;
    });
  }

  onSubmit() {
    this.service.addNewOffer(this.form.value).subscribe((response) => {
      alert("Оффер добавлен");
      this.form.reset();
      this.loadData();
    });
  }
}
