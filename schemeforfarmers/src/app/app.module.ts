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
    FarmerDocsComponent

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
