import { User } from './../Model/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Crop } from '../Model/crop';
import { FarmerCrop } from '../Model/farmer-crop';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  URL:string = "http://localhost:8000/farmerapproval"
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  constructor(private httpClient: HttpClient) { }

  getRequestFarmer():Observable<User>{
    return this.httpClient.get<User>(this.URL);
  }

  acceptFarmer(id:number,fstatus:string):Observable<User>{
    let url = "http://localhost:8000/userstatus?userStatus="+fstatus+"&userId="+id;
    console.log(url);
    return this.httpClient.put<User>("http://localhost:8000/userstatus?userStatus="+fstatus+"&userId="+id,id);   
  }

  rejectFarmer(id:number,fstatus:string):Observable<User>{
    let url = "http://localhost:8000/userstatus?userStatus="+fstatus+"&userId="+id;
    console.log(url);
    return this.httpClient.put<User>("http://localhost:8000/userstatus?userStatus="+fstatus+"&userId="+id,id);   
  }

  listFarmer():Observable<User>{
    let url = "http://localhost:8000/farmerlist"
    return this.httpClient.get<User>(url);
  }

  getRequestBidder():Observable<User>{
    let url ="http://localhost:8000/bidderapproval"
    return this.httpClient.get<User>(url);
  }

  acceptBidder(id:number,bstatus:string):Observable<User>{
    let url = "http://localhost:8000/userstatus?userStatus="+bstatus+"&userId="+id;
    console.log(url);
    return this.httpClient.put<User>("http://localhost:8000/userstatus?userStatus="+bstatus+"&userId="+id,id);   
  }

  rejectBidder(id:number,bstatus:string):Observable<User>{
    let url = "http://localhost:8000/userstatus?userStatus="+bstatus+"&userId="+id;
    console.log(url);
    return this.httpClient.put<User>("http://localhost:8000/userstatus?userStatus="+bstatus+"&userId="+id,id);   
  }

  listBidder():Observable<User>{
    let url = "http://localhost:8000/bidderlist"
    return this.httpClient.get<User>(url);
  }

  getRequestCrop():Observable<FarmerCrop[]>{
    let url = "http://localhost:8000/cropSellRequestList";
    return this.httpClient.get<FarmerCrop[]>(url);
  }

  approveCrop(userid:number,cropid:number,soldstatus:string,approve:string):Observable<FarmerCrop>{
    let url = "http://localhost:8000/approveCropRequest?cropId="+cropid+"&userId="+userid+"&cropSoldStatus="+soldstatus+"&adminApproval="+approve;
    console.log(url);
    return this.httpClient.put<FarmerCrop>(url,userid);   
  }
  finalizeBid(cropid:number):Observable<FarmerCrop>{
    let url = "http://localhost:8000/finalizeAuction?cropId="+cropid;
    console.log(url);
    return this.httpClient.put<FarmerCrop>(url,cropid);   
  }
  
  getInMarketCrop():Observable<FarmerCrop[]>{
    let url = "http://localhost:8000/cropsforbidder";
    return this.httpClient.get<FarmerCrop[]>(url);
  }
}
