import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  employee=new FormGroup({
    employeetype:new FormControl('',Validators.required),
    employeename:new FormControl('',Validators.required),
    loginid:new FormControl('',Validators.required),
    password:new FormControl('',Validators.required),
    confirmpassword:new FormControl('',Validators.required),
    status:new FormControl('',Validators.required)
  })
  constructor() { }

  ngOnInit(): void {
  }
  get EmployeeType(){
    return this.employee.get('employeetype');
  }
  get EmployeeName(){
    return this.employee.get('employeename');
  }
  get LoginId(){
    return this.employee.get('loginid');
  }
  get Password(){
    return this.employee.get('password');
  }
  get ConfirmPassword(){
    return this.employee.get('confirmpassword');
  }
  get Status(){
    return this.employee.get('status');
  }
  

}
