import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-default-navbar',
  templateUrl: './default-navbar.component.html',
  styleUrls: ['./default-navbar.component.css']
})
export class DefaultNavbarComponent implements OnInit {

  user:string='';

  constructor() {
    this.checkUser();
   }

  ngOnInit(): void {
  }

  checkUser(){
    this.user='admin';
  }
}
