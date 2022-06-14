import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAgentComponent } from './admin/add-agent/add-agent.component';
import { AddCityComponent } from './admin/add-city/add-city.component';
import { AddEmployeeComponent } from './admin/add-employee/add-employee.component';
import { AddInsurancePlanComponent } from './admin/add-insurance-plan/add-insurance-plan.component';
import { AddInsuranceSchemeComponent } from './admin/add-insurance-scheme/add-insurance-scheme.component';
import { AddInsuranceComponent } from './admin/add-insurance/add-insurance.component';
import { AddStateComponent } from './admin/add-state/add-state.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { FeedbackComponent } from './admin/feedback/feedback.component';
import { InsuranceSettingComponent } from './admin/insurance-setting/insurance-setting.component';
import { TaxSettingComponent } from './admin/tax-setting/tax-setting.component';
import { ViewCityComponent } from './admin/view-city/view-city.component';
import { ViewEmployeeComponent } from './admin/view-employee/view-employee.component';
import { ViewInsrunaceComponent } from './admin/view-insrunace/view-insrunace.component';
import { ViewInsurancePlanComponent } from './admin/view-insurance-plan/view-insurance-plan.component';
import { ViewInsuranceSchemeComponent } from './admin/view-insurance-scheme/view-insurance-scheme.component';
import { ViewStateComponent } from './admin/view-state/view-state.component';
import { LandingComponent } from './home/landing/landing.component';
import { LoginComponent } from './home/login/login.component';
import { NavbarComponent } from './home/navbar/navbar.component';
import { RegisterComponent } from './home/register/register.component';
import { ArogyaShieldComponent } from './policies/arogya-shield/arogya-shield.component';
import { ProtectionComponent } from './policies/protection/protection.component';

const routes: Routes = [{ path: 'navbar', component: NavbarComponent },
                      { path: '', component: LandingComponent },
                      { path: 'login', component: LoginComponent },
                      { path: 'register', component: RegisterComponent },
                      { path: 'protection', component: ProtectionComponent },
                      { path: 'arogyashield', component: ArogyaShieldComponent },
                      { path: 'admin/dashboard', component: DashboardComponent },
                      { path: 'admin/viewfeedback', component: FeedbackComponent },
                      { path: 'admin/addinsurance', component: AddInsuranceComponent },
                      { path: 'admin/viewinsurance', component: ViewInsrunaceComponent },
                      { path: 'admin/addinsurancescheme', component: AddInsuranceSchemeComponent },
                      {path:'admin/viewinsurancescheme',component:ViewInsuranceSchemeComponent},
                      {path:'admin/addinsuranceplan',component:AddInsurancePlanComponent},
                      {path:'admin/viewinsuranceplan',component:ViewInsurancePlanComponent},
                      {path:'admin/tax',component:TaxSettingComponent},
                      {path:'admin/insurancesetting',component:InsuranceSettingComponent},
                      {path:'admin/addcity',component:AddCityComponent},
                      {path:'admin/viewcity',component:ViewCityComponent},
                      {path:'admin/addstate',component:AddStateComponent},
                      {path:'admin/viewstate',component:ViewStateComponent},
                      {path:'admin/addemployee',component:AddEmployeeComponent},
                      {path:'admin/viewemployee',component:ViewEmployeeComponent},
                      {path:'admin/addagent',component:AddAgentComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
