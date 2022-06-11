import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingComponent } from './landing/landing.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { DefaultNavbarComponent } from './default-navbar/default-navbar.component';



@NgModule({
  declarations: [
    LandingComponent,
    FooterComponent,
    DefaultNavbarComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class HomeModule { }
