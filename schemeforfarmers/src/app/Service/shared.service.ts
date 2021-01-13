import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
message: string;
  constructor() { }
  setEmail(data){
    this.message=data
  }
  getEmail():string{
    return this.message
  }
}
