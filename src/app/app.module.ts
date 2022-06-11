import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './home/navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './home/register/register.component';
import { LoginComponent } from './home/login/login.component';
import { ProtectionComponent } from './policies/protection/protection.component';
import { ArogyaShieldComponent } from './policies/arogya-shield/arogya-shield.component';
import { FooterComponent } from './home/footer/footer.component';
import { DefaultNavbarComponent } from './home/default-navbar/default-navbar.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RegisterComponent,
    LoginComponent,
    ProtectionComponent,
    ArogyaShieldComponent,
    FooterComponent,
    DefaultNavbarComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
