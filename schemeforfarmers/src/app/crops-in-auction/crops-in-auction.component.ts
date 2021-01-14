import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { FarmerCrop } from '../Model/farmer-crop';
import { AdminService } from '../Service/admin.service';
import { CropsService } from '../Service/crops.service';

@Component({
  selector: 'app-crops-in-auction',
  templateUrl: './crops-in-auction.component.html',
  styleUrls: ['./crops-in-auction.component.css']
})
export class CropsInAuctionComponent implements OnInit {
  crops: FarmerCrop[] = [];
  logedInForm;
  bidAmount;
  display='none';
  constructor(private adminService: AdminService, private cropService: CropsService,private router: Router) { }

  ngOnInit() {
    this.loadCropRequests();
    // 
    this.logedInForm = new FormGroup({
      bidAmount: new FormControl(),
    });
    // 
  }
  loadCropRequests() {
    console.log(this.crops);
    this.adminService.getInMarketCrop().subscribe((d) => {
      this.crops = d;
    });
    console.log(this.crops);
  }
  placeBid(cropId){
    this.cropService.placeBid(103,cropId)
    .subscribe(data => {
      this.ngOnInit();
    });
  }
 // Model Driven Form - login
 mdfLogin(data) {
  this.bidAmount = data.bidAmount;
  alert(JSON.stringify(data));
}
  

  openModalDialog(){
    this.display='block'; //Set block css
 }

 closeModalDialog(){
  this.display='none'; //set none css after close dialog
 }

}
