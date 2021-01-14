import { Component, OnInit } from '@angular/core';
import { Crop } from '../Model/crop';
import { FarmerCrop } from '../Model/farmer-crop';
import { AdminService } from '../Service/admin.service';

@Component({
  selector: 'app-crop-sell-request',
  templateUrl: './crop-sell-request.component.html',
  styleUrls: ['./crop-sell-request.component.css']
})
export class CropSellRequestComponent implements OnInit {
  
  crops: FarmerCrop[] = [];
  adminApprove : any = 'Approved';
  adminReject : any = 'Rejected';
  cropSoldStatus : any ='In Market';
  
  constructor(private adminService: AdminService) { }

  ngOnInit() {
    this.loadCropRequests();
  }

  loadCropRequests() {
    console.log(this.crops);
    this.adminService.getRequestCrop().subscribe((d) => {
      this.crops = d;
    });
    console.log(this.crops);
  }

  acceptCrop(userid,cropid){
    
    console.log("Approve crop with id="+cropid);
    this.adminService.approveCrop(userid,cropid,this.cropSoldStatus,this.adminApprove)
      .subscribe(data => {
        this.ngOnInit();
      });
  }

  rejectCrop(userid,cropid){
    
    console.log("Approve Farmer with id="+cropid);
    this.adminService.approveCrop(userid,cropid,this.cropSoldStatus,this.adminReject)
      .subscribe(data => {
        this.ngOnInit();
      });
  }

}
