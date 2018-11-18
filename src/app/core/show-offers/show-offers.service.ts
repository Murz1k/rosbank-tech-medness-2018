import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShowOffersService {

  constructor(private http: HttpClient) {
  }

  getOffersByUserId(userId: number): Observable<any[]> {
    return this.http.get<any[]>(`/api/users/${userId}/offers`);
  }
}
