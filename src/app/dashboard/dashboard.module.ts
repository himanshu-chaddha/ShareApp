import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { DashboardRoutingModule } from "./dashboard-routing.module";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { DashboardHeaderComponent } from "./dashboard/dashboard-header/dashboard-header.component";
import { DashboardFooterComponent } from "./dashboard/dashboard-footer/dashboard-footer.component";
import { DashboardSidebarComponent } from "./dashboard/dashboard-sidebar/dashboard-sidebar.component";

@NgModule({
  declarations: [
    DashboardComponent,
    DashboardHeaderComponent,
    DashboardFooterComponent,
    DashboardSidebarComponent
  ],
  imports: [CommonModule, DashboardRoutingModule],
  exports: [
    DashboardComponent,
    DashboardHeaderComponent,
    DashboardFooterComponent,
    DashboardSidebarComponent
  ]
})
export class DashboardModule {}
