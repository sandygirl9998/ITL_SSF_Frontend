import { FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Documents } from '../appmodel/documents';

@Injectable({
  providedIn: 'root'
})
export class FarmerService {
  baseUrl: string = 'http://localhost:8000';
  constructor(private http: HttpClient) { }

  farmerRegister(farmerRegisterForm: FormGroup): Observable<any> {
    return this.http.post(this.baseUrl + '/fregister', farmerRegisterForm);
  }
  upload(document:Documents): Observable<any> { 
    return this.http.post(this.baseUrl+"/farmer-doc", document); 
   }
}
