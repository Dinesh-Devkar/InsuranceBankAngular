import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  
  loginForm=new FormGroup({
    userName:new FormControl('',Validators.required),
    password:new FormControl('',Validators.required)
  })
  constructor() { }

  ngOnInit(): void {
  }

  noLogin=false;
  verifyRole(){
   
    this.noLogin=true; 
    console.log(this.noLogin)
    
  }
}
