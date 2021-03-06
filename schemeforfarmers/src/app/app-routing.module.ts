import { CropsInAuctionComponent } from './crops-in-auction/crops-in-auction.component';
import { BidderDashboardComponent } from './bidder-dashboard/bidder-dashboard.component';
import { PolicyClaimApproveComponent } from './policy-claim-approve/policy-claim-approve.component';
import { ViewPolicyComponent } from './view-policy/view-policy.component';
import { ViewAuctionComponent } from './view-auction/view-auction.component';
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
import { BidderRegistrationComponent } from './bidder-registration/bidder-registration.component';
import { FarmerRegistrationComponent } from './farmer-registration/farmer-registration.component';
import { BidderDocsComponent } from './bidder-docs/bidder-docs.component';
import { FarmerDocsComponent } from './farmer-docs/farmer-docs.component';
import{ApplyComponent} from './apply/apply.component';
import{DashboardComponent} from './dashboard/dashboard.component';
import { CropSellRequestComponent } from './crop-sell-request/crop-sell-request.component';
import { LoginComponent } from './login/login.component';
const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contact', component:ContactComponent},
  {path: 'admindb', component:AdminDashboardComponent},
  {path:'farmerrequests', component:FarmerRequestComponent},
  {path:'bidderrequests', component:BidderRequestComponent},
  {path:'listfarmers', component:ListOfFarmersComponent},
  {path:'listbidders', component:ListOfBiddersComponent},
  {path:'bidderReg',component:BidderRegistrationComponent},
  {path:'bidDocs',component:BidderDocsComponent},
  {path:'farmerReg',component:FarmerRegistrationComponent},
  {path:'farmerDocs',component:FarmerDocsComponent},
  {path:'apply',component:ApplyComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'croprequests',component:CropSellRequestComponent},
  {path:'auction', component:ViewAuctionComponent},
  {path:'viewpolicy', component:ViewPolicyComponent},
  {path:'policyClaimRequest', component:PolicyClaimApproveComponent},
  {path:'bidderdb',component:BidderDashboardComponent},
  {path:'cropsInAuction',component:CropsInAuctionComponent},
  {path:'login',component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
