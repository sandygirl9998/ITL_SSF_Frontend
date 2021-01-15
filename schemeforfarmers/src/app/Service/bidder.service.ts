import { FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BidderService {
  baseUrl: string = 'http://localhost:8000';

  constructor(private http: HttpClient) { }

  bidderRegister(bidderRegisterForm: FormGroup): Observable<any> {
    return this.http.post(this.baseUrl + '/bregister', bidderRegisterForm);
  }

  docUpload(formData: FormData) : Observable<any> {
    return this.http.post(this.baseUrl+"/bidder-doc", formData); 
  }
}

