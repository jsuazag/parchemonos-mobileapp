import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(private httpClient: HttpClient) { }

  public createBooking(bookingData: any, id: string): Observable<any> {
    const token = 'XXXXXXXXX'; // TODO
    const url = ``; // TODO
    const config = {
      headers: new HttpHeaders({
        Authorization: `Bearer ${token}`
      })
    }
    return this.httpClient.post(url, bookingData, config)
  }

}
