import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { AddInsuranceComponent } from './add-insurance/add-insurance.component';
import { ViewInsrunaceComponent } from './view-insrunace/view-insrunace.component';
import { AddInsuranceSchemeComponent } from './add-insurance-scheme/add-insurance-scheme.component';
import { ViewInsuranceSchemeComponent } from './view-insurance-scheme/view-insurance-scheme.component';
import { AddInsurancePlanComponent } from './add-insurance-plan/add-insurance-plan.component';
import { ViewInsurancePlanComponent } from './view-insurance-plan/view-insurance-plan.component';
import { TaxSettingComponent } from './tax-setting/tax-setting.component';
import { InsuranceSettingComponent } from './insurance-setting/insurance-setting.component';
import { AddCityComponent } from './add-city/add-city.component';
import { ViewCityComponent } from './view-city/view-city.component';
import { ViewStateComponent } from './view-state/view-state.component';
import { AddStateComponent } from './add-state/add-state.component';



@NgModule({
  declarations: [
    DashboardComponent,
    FeedbackComponent,
    AddInsuranceComponent,
    ViewInsrunaceComponent,
    AddInsuranceSchemeComponent,
    ViewInsuranceSchemeComponent,
    AddInsurancePlanComponent,
    ViewInsurancePlanComponent,
    TaxSettingComponent,
    InsuranceSettingComponent,
    AddCityComponent,
    ViewCityComponent,
    ViewStateComponent,
    AddStateComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AdminModule { }
