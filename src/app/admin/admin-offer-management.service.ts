import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminOfferManagementService {

  constructor(private http: HttpClient) {
  }

  getTemplates(): Observable<any[]> {
    return this.http.get<any[]>(`/api/template`);
  }

  getServices(): Observable<any[]> {
    return this.http.get<any[]>(`/api/services`);
  }

  getOffers(): Observable<any[]> {
    return this.http.get<any[]>(`/api/Offer`);
  }

  getUsers(): Observable<any[]> {
    return this.http.get<any[]>(`/api/Users`);
  }

  addNewOffer(body: any) {
    return this.http.post(`/api/Offer`, body);
  }
}
