import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SharedService } from '../Service/shared.service';
import {Documents} from '../appmodel/documents'
import { FarmerService } from '../Service/farmer.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-farmer-docs',
  templateUrl: './farmer-docs.component.html',
  styleUrls: ['./farmer-docs.component.css']
})
export class FarmerDocsComponent implements OnInit {

farmerDocsForm: FormGroup;
  allAlert: String;
  statusMsg: String;
  data: any;
  document: Documents=new Documents();
   constructor(private fb: FormBuilder,private shared:SharedService,private service:FarmerService,private router:Router) { }

  ngOnInit() {
      this.FarmerDocsRegisterForm();
     this.document.emailId= this.shared.getEmail();
    
  }

  FarmerDocsRegisterForm(): void {
    this.farmerDocsForm = this.fb.group({
      farmerAADHAR: ['', Validators.required],
      farmerPAN: ['', Validators.required],
      farmerCertificate: ['', Validators.required],
     
      
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
  
  
  get farmerAADHAR() {
    return this.farmerDocsForm.get('farmerAADHAR');
  }
  get farmerPAN() {
    return this.farmerDocsForm.get('farmerPAN');
  }
  get farmerCertificate() {
    return this.farmerDocsForm.get('farmerCertificate');
  }
  
 

  onSubmit(): void {
    
    if (this.farmerDocsForm.valid) {
      console.log(this.document);
          console.log(this.farmerDocsForm.value);
          this.upload();
          this.router.navigate(['/home']);
          
        } else {
          this.allAlert = 'All fields are mandatory to register.';
        }
      }
     
      onFileChange1(event) {
        this.document.Aadhar = event.target.files[0];
      }
      onFileChange2(event) {
        this.document.PAN = event.target.files[0];
      }
      onFileChange3(event) {
        this.document.Certificate = event.target.files[0];
      }
      upload() {
        let formData: FormData = new FormData();
        formData.append('Aadhar', this.document.Aadhar);
        formData.append('PAN', this.document.PAN);
        formData.append('Certificate', this.document.Certificate);
        formData.append('emailId', this.document.emailId);
        this.service.docUpload(formData).subscribe(response => {
          alert(JSON.stringify(response));
        });
      }
}

