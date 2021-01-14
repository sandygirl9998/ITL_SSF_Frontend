import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FarmerCrop } from '../Model/farmer-crop';
import { AdminService } from '../Service/admin.service';

@Component({
  selector: 'app-view-auction',
  templateUrl: './view-auction.component.html',
  styleUrls: ['./view-auction.component.css']
})
export class ViewAuctionComponent implements OnInit {
  crops: FarmerCrop[] = [];
  constructor(private adminService: AdminService,private router: Router) { }

  ngOnInit() {
    this.loadCropRequests();
  }

  loadCropRequests() {
    console.log(this.crops);
    this.adminService.getInMarketCrop().subscribe((d) => {
      this.crops = d;
    });
    console.log(this.crops);
  }
  finalizeBid(cropid){
    this.adminService.finalizeBid(cropid)
      .subscribe(data => {
        this.ngOnInit();
      });

  }

  goback(){
    this.router.navigate(['/admindb']);
  }


}
