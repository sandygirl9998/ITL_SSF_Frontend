import { FarmerCrop } from './../Model/farmer-crop';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CropsService {
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  constructor(private httpClient: HttpClient) { }

  placeBid(bidderid: number,cropId: number): Observable<FarmerCrop> {
    let url="http://localhost:8000/placebid?bidderid="+bidderid+"&cropid="+cropId;
    return this.httpClient.post<FarmerCrop>(url,cropId);
  }
}
