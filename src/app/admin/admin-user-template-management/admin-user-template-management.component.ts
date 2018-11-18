import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {AdminOfferManagementService} from '../admin-offer-management.service';

@Component({
  selector: 'app-admin-user-template-management',
  templateUrl: './admin-user-template-management.component.html',
  styleUrls: ['./admin-user-template-management.component.scss']
})
export class AdminUserTemplateManagementComponent implements OnInit {

  public form: FormGroup;

  templates = [];
  users = [];

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
    this.service.getUsers().subscribe((response) => {
      this.users = response;
    });
  }

  private loadData() {
    this.service.getOffers().subscribe((response) => {
      // this.offers = response;
    });
  }

  onSubmit() {
    this.service.addNewOffer(this.form.value).subscribe((response) => {
      this.loadData();
    });
  }
}
