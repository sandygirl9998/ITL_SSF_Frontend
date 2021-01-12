import { ListOfFarmersComponent } from './list-of-farmers/list-of-farmers.component';
import { FarmerRequestComponent } from './farmer-request/farmer-request.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ListOfBiddersComponent } from './list-of-bidders/list-of-bidders.component';
import { BidderRequestComponent } from './bidder-request/bidder-request.component';


const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contact', component:ContactComponent},
  {path: 'admindb', component:AdminDashboardComponent},
  {path:'farmerrequests', component:FarmerRequestComponent},
  {path:'bidderrequests', component:BidderRequestComponent},
  {path:'listfarmers', component:ListOfFarmersComponent},
  {path:'listbidders', component:ListOfBiddersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
