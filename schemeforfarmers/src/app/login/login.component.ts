import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from '../appmodel/login';
import { LoginService } from '../Service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login: Login = new Login();
  message: string;
  step:any=0;
  constructor(private router: Router,private service:LoginService) { }

  ngOnInit() {
  }
  loginCheck() {
    console.log(this.login);
    this.service.login(this.login).subscribe(response => {
      alert(JSON.stringify(response));
      console.log(response);
      if(response.status == 'SUCCESS') {
        let userId = response.customerId;
        let userName = response.customerName;
        let role=response.role;
        sessionStorage.setItem('userId', String(userId));
        sessionStorage.setItem('username', userName);
        
        if(role="Farmer")
        this.router.navigate(['/dashboard']);
        else if(role="Bidder")
        this.router.navigate(['/bidderdb']);
        else 
        this.router.navigate(['/admindb']);
      }
      else
        this.message = response.message;
    })
  }
onPress(){
  this.step=this.step+1;
}
     
      
      
  
}
