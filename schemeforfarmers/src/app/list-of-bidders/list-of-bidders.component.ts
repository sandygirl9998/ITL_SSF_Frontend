import { Component, OnInit } from '@angular/core';
import { AdminService } from '../Service/admin.service';

@Component({
  selector: 'app-list-of-bidders',
  templateUrl: './list-of-bidders.component.html',
  styleUrls: ['./list-of-bidders.component.css']
})
export class ListOfBiddersComponent implements OnInit {
  data: any = [];
  constructor(private adminService: AdminService) { }

  ngOnInit() {
    this.adminService.listBidder().subscribe((d: {}) => {
      this.data = d;
    })
  }

}
