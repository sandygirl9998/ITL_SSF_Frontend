import { Component, OnInit } from '@angular/core';
import { AdminService } from '../Service/admin.service';

@Component({
  selector: 'app-list-of-farmers',
  templateUrl: './list-of-farmers.component.html',
  styleUrls: ['./list-of-farmers.component.css']
})
export class ListOfFarmersComponent implements OnInit {
  data: any = [];
  constructor(private adminService: AdminService) { }

  ngOnInit() {
    this.adminService.listFarmer().subscribe((d: {}) => {
      this.data = d;
    })
  }

}
