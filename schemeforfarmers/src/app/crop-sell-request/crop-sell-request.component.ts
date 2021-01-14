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
  //crops: Crop[] = [];
  crops: FarmerCrop[] = [];
  // data: any = [];
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

}
