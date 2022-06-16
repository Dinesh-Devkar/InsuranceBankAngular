import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewPaymentComponent } from './view-payment/view-payment.component';
import { AgentProfileComponent } from './agent-profile/agent-profile.component';
import { MarketingComponent } from './marketing/marketing.component';
import { AgentDashboardComponent } from './agent-dashboard/agent-dashboard.component';



@NgModule({
  declarations: [
    ViewPaymentComponent,
    AgentProfileComponent,
    MarketingComponent,
    AgentDashboardComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AgentModule { }
