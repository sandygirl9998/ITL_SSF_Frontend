import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Farmer } from '../appmodel/farmer';

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
  farmer=new Farmer();
  constructor(private fb: FormBuilder) { }

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
      farmerLandAddress: ['', [Validators.required, Validators.maxLength(255)]],
      farmerLandArea: ['', Validators.required],
      farmerLandPIN: ['', [Validators.required, Validators.pattern('^[1-9][0-9]{5}$')], ],
      farmerAccountNumber: [ '', [Validators.required, Validators.pattern('^[0-9]{9,18}?$')],],
      farmerIFSC: [ '', [Validators.required, Validators.pattern('^[A-Z]{4}0[A-Z0-9]{6}$')], ],
      farmerAADHAR: ['', Validators.required],
      farmerPAN: ['', Validators.required],
      farmerState: ['', Validators.required],
      farmerCity: ['', Validators.required],
      farmerCertificate: ['', Validators.required],
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
    return this.farmerRegisterForm.get('role');
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
  get farmerLandAddress() {
    return this.farmerRegisterForm.get('farmerLandAddress');
  }
  get farmerLandArea() {
    return this.farmerRegisterForm.get('farmerLandArea');
  }
  get farmerLandPIN() {
    return this.farmerRegisterForm.get('farmerLandPIN');
  }
  get farmerAccountNumber() {
    return this.farmerRegisterForm.get('farmerAccountNumber');
  }
  get farmerIFSC() {
    return this.farmerRegisterForm.get('farmerIFSC');
  }
  get farmerAADHAR() {
    return this.farmerRegisterForm.get('farmerAADHAR');
      }
  get farmerPAN() {
    
    return this.farmerRegisterForm.get('farmerPAN');
  }
  get farmerCertificate() {
    return this.farmerRegisterForm.get('farmerCertificate');
  }
  get password() {
    return this.farmerRegisterForm.get('password');
  }
  get confirmPassword() {
  return this.farmerRegisterForm.get('confirmPassword');
  }
  get farmerState() {
    return this.farmerRegisterForm.get('farmerState');
  }
  get farmerCity() {
    return this.farmerRegisterForm.get('farmerCity');
  }

  Previous(){
    this.step=this.step-1;
  }
  next(){
    this.step=this.step+1;
  }

  onSubmit(): void {

    if (this.farmerRegisterForm.valid) {
          console.log(this.farmerRegisterForm.value);
        } else {
          this.allAlert = 'All fields are mandatory to register.';
        }
      }

}

