import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { LandingComponent } from './home/landing/landing.component';
import { LoginComponent } from './home/login/login.component';
import { NavbarComponent } from './home/navbar/navbar.component';
import { RegisterComponent } from './home/register/register.component';
import { ArogyaShieldComponent } from './policies/arogya-shield/arogya-shield.component';
import { ProtectionComponent } from './policies/protection/protection.component';

const routes: Routes = [{path:'navbar',component:NavbarComponent},
                        {path:'',component:LandingComponent},
                        {path:'login',component:LoginComponent},
                      {path:'register',component:RegisterComponent},
                    {path:'protection',component:ProtectionComponent},
                    {path:'arogyashield',component:ArogyaShieldComponent},
                    {path:'admin/dashoard',component:DashboardComponent}
                  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
