import { Component, OnInit } from '@angular/core';
import { AdminService } from '../Service/admin.service';

@Component({
  selector: 'app-bidder-request',
  templateUrl: './bidder-request.component.html',
  styleUrls: ['./bidder-request.component.css']
})
export class BidderRequestComponent implements OnInit {
  data: any = [];
  baccept : any = 'Approved';
  breject : any = 'Rejected';
  constructor(private adminService: AdminService) { }

  ngOnInit() {
    this.loadBidders();
  }
  loadBidders() {
    this.adminService.getRequestBidder().subscribe((d: {}) => {
      this.data = d;
    });
  }

  acceptBidder(id){
    
    console.log("Approve Bidder with id="+id);
    this.adminService.acceptBidder(id,this.baccept)
      .subscribe(data => {
        this.ngOnInit();
      });
  }

  rejectBidder(id){
    
    console.log("Approve Bidder with id="+id);
    this.adminService.acceptBidder(id,this.breject)
      .subscribe(data => {
        this.ngOnInit();
      });
  }
}
