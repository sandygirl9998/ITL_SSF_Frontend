import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AboutComponent } from './about/about.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { FarmerRequestComponent } from './farmer-request/farmer-request.component';
import { ListOfFarmersComponent } from './list-of-farmers/list-of-farmers.component';
import { BidderRequestComponent } from './bidder-request/bidder-request.component';
import { ListOfBiddersComponent } from './list-of-bidders/list-of-bidders.component';
import { BidderRegistrationComponent } from './bidder-registration/bidder-registration.component';
import { FarmerRegistrationComponent } from './farmer-registration/farmer-registration.component';
import { BidderDocsComponent } from './bidder-docs/bidder-docs.component';
import { FarmerDocsComponent } from './farmer-docs/farmer-docs.component';
import { ApplyComponent } from './apply/apply.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CropSellRequestComponent } from './crop-sell-request/crop-sell-request.component';
import { ViewAuctionComponent } from './view-auction/view-auction.component';
import { ViewPolicyComponent } from './view-policy/view-policy.component';
import { PolicyClaimApproveComponent } from './policy-claim-approve/policy-claim-approve.component';
import { BidderDashboardComponent } from './bidder-dashboard/bidder-dashboard.component';
import { CropsInAuctionComponent } from './crops-in-auction/crops-in-auction.component';
import { LoginComponent } from './login/login.component';
import { ClaimInsuranceInfoComponent } from './claim-insurance-info/claim-insurance-info.component';
import { ClaimInsuranceDocsComponent } from './claim-insurance-docs/claim-insurance-docs.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    HeaderComponent,
    FooterComponent,
    ContactComponent,
    AdminDashboardComponent,
    FarmerRequestComponent,
    ListOfFarmersComponent,
    BidderRequestComponent,
    ListOfBiddersComponent,
    BidderRegistrationComponent,
    FarmerRegistrationComponent,
    BidderDocsComponent,
    FarmerDocsComponent,
    ApplyComponent,
    DashboardComponent,
    CropSellRequestComponent,
    ViewAuctionComponent,
    ViewPolicyComponent,
    PolicyClaimApproveComponent,
    BidderDashboardComponent,
    CropsInAuctionComponent,
    LoginComponent,
    ClaimInsuranceInfoComponent,
    ClaimInsuranceDocsComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
   ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
