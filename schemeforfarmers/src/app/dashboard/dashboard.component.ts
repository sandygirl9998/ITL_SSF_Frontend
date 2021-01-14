import { Component, OnInit } from '@angular/core';
import { policy } from '../appmodel/insurance.model';
import { FarmerDashboardService } from '../service/farmer-dashboard.service';
import { insuranceClaim } from '../appmodel/insuranceHistory.model';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  policies: policy[] = [];
  insClaim: insuranceClaim[] = [];
  constructor(private service: FarmerDashboardService) { }

  ngOnInit() {
    this.service.viewInsurance().subscribe((data)=>(this.insClaim=data));
  }

}
