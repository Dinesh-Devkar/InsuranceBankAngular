import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { ViewInsrunaceComponent } from './view-insrunace/view-insrunace.component';
import { AddInsuranceSchemeComponent } from './add-insurance-scheme/add-insurance-scheme.component';
import { ViewInsuranceSchemeComponent } from './view-insurance-scheme/view-insurance-scheme.component';
import { AddInsurancePlanComponent } from './add-insurance-plan/add-insurance-plan.component';
import { ViewInsurancePlanComponent } from './view-insurance-plan/view-insurance-plan.component';
import { TaxSettingComponent } from './tax-setting/tax-setting.component';
import { InsuranceSettingComponent } from './insurance-setting/insurance-setting.component';
import { ViewCityComponent } from './view-city/view-city.component';
import { ViewStateComponent } from './view-state/view-state.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { ViewEmployeeComponent } from './view-employee/view-employee.component';
import { AddAgentComponent } from './add-agent/add-agent.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ViewCommisionComponent } from './view-commision/view-commision.component';
import { CommisionWithdrwalComponent } from './commision-withdrwal/commision-withdrwal.component';
import { ViewAgentComponent } from './view-agent/view-agent.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { ProfileComponent } from './profile/profile.component';
import { CommisionClaimComponent } from './commision-claim/commision-claim.component';
import { InsuranceAccountComponent } from './insurance-account/insurance-account.component';
import { ViewCustomersComponent } from './view-customers/view-customers.component';
import { ViewPolicyPaymentComponent } from './view-policy-payment/view-policy-payment.component';
import { EditFeedbackComponent } from './edit-feedback/edit-feedback.component';

@NgModule({
  declarations: [
    DashboardComponent,
    FeedbackComponent,
    ViewInsrunaceComponent,
    ViewInsuranceSchemeComponent,
    ViewInsurancePlanComponent,
    TaxSettingComponent,
    InsuranceSettingComponent,
    ViewCityComponent,
    ViewStateComponent,
    AddEmployeeComponent,
    ViewEmployeeComponent,
    AddAgentComponent,
    ViewCommisionComponent,
    CommisionWithdrwalComponent,
    ViewAgentComponent,
    ChangePasswordComponent,
    ProfileComponent,
    CommisionClaimComponent,
    InsuranceAccountComponent,
    ViewCustomersComponent,
    ViewPolicyPaymentComponent,
    EditFeedbackComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
