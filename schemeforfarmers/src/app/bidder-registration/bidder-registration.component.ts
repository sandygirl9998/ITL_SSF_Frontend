import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BidderService } from '../Service/bidder.service';
import { SharedService } from '../Service/shared.service';
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
  bidderEmail: string;
  constructor(private fb: FormBuilder, private shared :SharedService ,private router: Router,private service:BidderService) { }

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
      bidderState: ['', Validators.required],
      bidderCity: ['', Validators.required],
      password: [ '', [ Validators.required, Validators.pattern( '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$' ), ], ],
      confirmPassword: [ '', [ Validators.required, Validators.pattern( '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$' ), ],],
  
      
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
  get bidderState() {
    return this.bidderRegisterForm.get('bidderState');
  }
  get bidderCity() {
    return this.bidderRegisterForm.get('bidderCity');
  }

  get password() {
    return this.bidderRegisterForm.get('password');
  }
  get confirmPassword() {
  return this.bidderRegisterForm.get('confirmPassword');
  }

  onSubmit(): void {
    
    if (this.bidderRegisterForm.valid) {
        alert("Details Successfully Registered")
          console.log(this.bidderRegisterForm.value);
          this.bidderEmail=this.bidderRegisterForm.value.emailId;
          this.shared.setEmail(this.bidderEmail);
          this.register();
          this.router.navigate(['/bidDocs']);
        } else {
          alert('All fields are mandatory to register') ;
        }
      }
      register() {
        this.service
          .bidderRegister(this.bidderRegisterForm.value)
          .subscribe((response) => {
            this.data = response;
          });
       
      }


}

