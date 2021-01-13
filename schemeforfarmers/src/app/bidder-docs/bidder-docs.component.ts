import { Component, OnInit ,Input} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SharedService } from '../Service/shared.service';
import{Documents} from '../appmodel/documents'
import { BidderService } from '../Service/bidder.service';
@Component({
  selector: 'app-bidder-docs',
  templateUrl: './bidder-docs.component.html',
  styleUrls: ['./bidder-docs.component.css']
})
export class BidderDocsComponent implements OnInit {
emailId: string;
bidderDocsForm: FormGroup;
  allAlert: String;
  statusMsg: String;
  data: any;
  document :Documents = new Documents();
   constructor(private fb: FormBuilder,private shared:SharedService ,private service:BidderService) { }

  ngOnInit() {
      this.BidderDocsRegisterForm();
      this.document.emailId= this.shared.getEmail();
  }

  BidderDocsRegisterForm(): void {
    this.bidderDocsForm = this.fb.group({
      bidderAADHAR: ['', Validators.required],
      bidderPAN: ['', Validators.required],
      bidderLicense: ['', Validators.required],
        
      
    });
  }
  
  selectedCountry: String = '--Choose State--';
  States: Array<any> = [
    {
      name: 'Maharashtra', cities: ['Mumbai', 'Pune','Thane'],},
    { name: 'Telangana', cities: ['Hyderabad', 'Nizamabad', 'Karimnagar'] },
    { name: 'Kerala', cities: ['Kochi', 'Thiruvanthapuram'] },
    { name: 'Rajasthan', cities: ['Jaipur', 'Udaipur'] },
    { name: 'Karnataka', cities: ['Bengaluru', 'Mangalore', 'Hubli'] },
  ];

  cities: Array<any>;

  changeState(state) {
    this.cities = this.States.find((demo) => demo.name == state).cities;
  }
  
  
  get bidderAADHAR() {
    return this.bidderDocsForm.get('bidderAADHAR');
  }
  get bidderPAN() {
    return this.bidderDocsForm.get('bidderPAN');
  }
  get bidderLicense() {
    return this.bidderDocsForm.get('bidderLicense');
  }
 

  onSubmit(): void {
    
    if (this.bidderDocsForm.valid) {
      console.log(this.document);
          console.log(this.bidderDocsForm.value);
          this.register();
        } else {
          this.allAlert = 'All fields are mandatory to register.';
        }
      }
      register() {
        alert(JSON.stringify(this.document));
        this.service.upload(this.document).subscribe(response => {
          alert(JSON.stringify(response));
        })
      }

      onFileChange1(event) {
        this.document.Aadhar = event.target.files[0];
      }
      onFileChange2(event) {
        this.document.PAN = event.target.files[0];
      }
      onFileChange3(event) {
        this.document.License = event.target.files[0];
      }

}

