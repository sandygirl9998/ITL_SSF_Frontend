import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
//import { Bids } from '../bids.module';
//import { items } from '../dashboard/bid.model';
//import { crop } from '../dashboard/crop.model';
//import { crop1 } from '../dashboard/crop1.model';
import { insuranceClaim } from '../appmodel/insuranceHistory.model';
//import { previous } from '../dashboard/pb.model';

@Injectable({
  providedIn: 'root',
})
export class FarmerDashboardService {
  baseUrl: string = 'http://localhost:8081';
  farmerId: number;
  //bids: items;
  //cropId: number;
  //pBid: previous;

  constructor(private router: Router, private http: HttpClient) {
    this.farmerId = parseInt(localStorage.getItem('userId'));
    //this.cropId = parseInt(localStorage.getItem('id'));
  }

  /*viewSoldCropList() {
    return this.http.get<crop1[]>(
      this.baseUrl + '/sale?farmerId=' + this.farmerId
    );
  }

  viewMarketPlace() {
    return this.http.get<items[]>(this.baseUrl + '/marketcrops');
  }
*/
  /*viewMarketPlaceDetails(pri: previous): Promise<items> {
    const params = new HttpParams().append(
      'cropId',
      this.bids.cropId.toString()
    );

    let result = this.http
      .get<items>(this.baseUrl + '/getBidsOnCrops', { params: params })
      .toPromise();
    return result;

    //   return this.http.get<previous[]>(this.baseUrl + '/getBidsOnCrops'   );
  }*/
  /*viewMarketPlaceDetails(cropId) {
    return this.http.get<previous[]>(
      this.baseUrl + '/listbidsOnCrop?cropId=' + cropId
    );
  }*/
  viewInsurance(){
    return this.http.get<insuranceClaim[]>(this.baseUrl+ '/listpolicies?fid='+ 101 )
  }
}
