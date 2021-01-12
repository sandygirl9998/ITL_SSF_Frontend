import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-bidder-registration',
  templateUrl: './bidder-registration.component.html',
  styleUrls: ['./bidder-registration.component.css']
})
export class BidderRegistrationComponent implements OnInit {
  bidderRegisterForm: FormGroup;
  allAlert: String;
  statusMsg: String;
  data: any;
  step: any=1;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
      this.BidderRegisterForm();
  }

  BidderRegisterForm(): void {
    this.bidderRegisterForm = this.fb.group({
      name: ['', [ Validators.required, Validators.pattern('^[a-zA-Z]{4,}(?: [a-zA-Z]+){0,2}$'), ], ],
      emailId: ['', [Validators.required, Validators.email]],
      bidderContact: [ '', [Validators.required, Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')], ],
      bidderAddressLine1: [ '', [Validators.required, Validators.maxLength(255)], ],
      bidderAddressLine2: [ '', [Validators.required, Validators.maxLength(255)], ],
      bidderAccountNumber: [ '', [Validators.required, Validators.pattern('^[0-9]{9,18}?$')],],
      bidderIFSC: [ '', [Validators.required, Validators.pattern('^[A-Z]{4}0[A-Z0-9]{6}$')], ],
      bidderAADHAR: ['', Validators.required],
      bidderPAN: ['', Validators.required],
      bidderState: ['', Validators.required],
      bidderCity: ['', Validators.required],
      bidderLicense: ['', Validators.required],
      password: [ '', [ Validators.required, Validators.pattern( '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$' ), ], ],
      confirmPassword: [],
        
      
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
  
  get role() {
    return this.bidderRegisterForm.get('role');
  }
  get name() {
    return this.bidderRegisterForm.get('name');
  }
  get emailId() {
    return this.bidderRegisterForm.get('emailId');
  }
  get bidderContact() {
    return this.bidderRegisterForm.get('bidderContact');
  }
  get bidderAddressLine1() {
    return this.bidderRegisterForm.get('bidderAddressLine1');
  }
  get bidderAddressLine2() {
    return this.bidderRegisterForm.get('bidderAddressLine2');
  }
  get bidderAccountNumber() {
    return this.bidderRegisterForm.get('bidderAccountNumber');
  }
  get bidderIFSC() {
    return this.bidderRegisterForm.get('bidderIFSC');
  }
  get bidderAADHAR() {
    return this.bidderRegisterForm.get('bidderAADHAR');
  }
  get bidderPAN() {
    return this.bidderRegisterForm.get('bidderPAN');
  }
  get bidderLicense() {
    return this.bidderRegisterForm.get('bidderLicense');
  }
  get password() {
    return this.bidderRegisterForm.get('password');
  }
  get confirmPassword() {
  return this.bidderRegisterForm.get('confirmPassword');
  }
  get bidderState() {
    return this.bidderRegisterForm.get('bidderState');
  }
  get bidderCity() {
    return this.bidderRegisterForm.get('bidderCity');
  }

  Previous(){
    this.step=this.step-1;
  }
  next(){
    this.step=this.step+1;
  }

  onSubmit(): void {
    
    if (this.bidderRegisterForm.valid) {
          console.log(this.bidderRegisterForm.value);
        } else {
          this.allAlert = 'All fields are mandatory to register.';
        }
      }

}

