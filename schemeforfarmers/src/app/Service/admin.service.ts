import { User } from './../Model/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

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
}