import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FarmerService } from '../Service/farmer.service';
import {SharedService} from '../Service/shared.service'

@Component({
  selector: 'app-farmer-registration',
  templateUrl: './farmer-registration.component.html',
  styleUrls: ['./farmer-registration.component.css']
})
export class FarmerRegistrationComponent implements OnInit {
  farmerRegisterForm: FormGroup;
  allAlert: String;
  statusMsg: String;
  data: any;
  step: any=1;
  farmerEmail: any;
  constructor(private fb: FormBuilder, private shared :SharedService ,private router: Router,private service:FarmerService) { }

  ngOnInit() {
      this.FarmerRegisterForm();
  }

  FarmerRegisterForm(): void {
    this.farmerRegisterForm = this.fb.group({
      name: ['', [ Validators.required, Validators.pattern('^[a-zA-Z]{4,}(?: [a-zA-Z]+){0,2}$'), ], ],
      emailId: ['', [Validators.required, Validators.email]],
      farmerContact: [ '', [Validators.required, Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')], ],
      farmerAddressLine1: [ '', [Validators.required, Validators.maxLength(255)], ],
      farmerAddressLine2: [ '', [Validators.required, Validators.maxLength(255)], ],
      farmerAccountNumber: [ '', [Validators.required, Validators.pattern('^[0-9]{9,18}?$')],],
      farmerIFSC: [ '', [Validators.required, Validators.pattern('^[A-Z]{4}0[A-Z0-9]{6}$')], ],
      farmerState: ['', Validators.required],
      farmerCity: ['', Validators.required],
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
  get password() {
    return this.farmerRegisterForm.get('password');
  }
  get confirmPassword() {
  return this.farmerRegisterForm.get('confirmPassword');
  }
  
  get name() {
    return this.farmerRegisterForm.get('name');
  }
  get emailId() {
    return this.farmerRegisterForm.get('emailId');
  }
  get farmerContact() {
    return this.farmerRegisterForm.get('farmerContact');
  }
  get farmerAddressLine1() {
    return this.farmerRegisterForm.get('farmerAddressLine1');
  }
  get farmerAddressLine2() {
    return this.farmerRegisterForm.get('farmerAddressLine2');
  }
  get farmerAccountNumber() {
    return this.farmerRegisterForm.get('farmerAccountNumber');
  }
  get farmerIFSC() {
    return this.farmerRegisterForm.get('farmerIFSC');
  }
  get farmerState() {
    return this.farmerRegisterForm.get('farmerState');
  }
  get farmerCity() {
    return this.farmerRegisterForm.get('farmerCity');
  }


  onSubmit(): void {
    
    if (this.farmerRegisterForm.valid) {
        alert("Details Successfully Registered,Proceed to Uploading Documents")
          
          this.farmerEmail=this.farmerRegisterForm.value.emailId;
          
          this.shared.setEmail(this.farmerEmail);
          this.register();
          this.router.navigate(['/farmerDocs']);
        } else {
          this.allAlert = 'All fields are mandatory to register.';
        }
      }

      register(){
        this.service.farmerRegister(this.farmerRegisterForm.value)
        .subscribe((response) => {
          this.data = response;
        });
      }

}

