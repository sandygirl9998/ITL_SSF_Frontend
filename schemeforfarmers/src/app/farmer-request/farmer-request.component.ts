import { Component, OnInit } from '@angular/core';
import { AdminService } from '../Service/admin.service';

@Component({
  selector: 'app-farmer-request',
  templateUrl: './farmer-request.component.html',
  styleUrls: ['./farmer-request.component.css']
})
export class FarmerRequestComponent implements OnInit {
  data: any = [];
  faccept : any = 'Approved';
  freject : any = 'Rejected';
  constructor(private adminService: AdminService) { }

  ngOnInit() {
    this.loadFarmers();
  }

  loadFarmers() {
    this.adminService.getRequestFarmer().subscribe((d: {}) => {
      this.data = d;
    });
  }

  acceptFarmer(id){
    
    console.log("Approve Farmer with id="+id);
    this.adminService.acceptFarmer(id,this.faccept)
      .subscribe(data => {
        this.ngOnInit();
      });
  }

  rejectFarmer(id){
    
    console.log("Approve Farmer with id="+id);
    this.adminService.acceptFarmer(id,this.freject)
      .subscribe(data => {
        this.ngOnInit();
      });
  }

}
