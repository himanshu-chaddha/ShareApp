import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeRoutingModule } from "./home/home-routing.module";
import { DashboardRoutingModule } from "./dashboard/dashboard-routing.module";
import { SharedComponentsRoutingModule } from "./shared-components/shared-components-routing.module";
import { AuthRoutingModule } from "./auth/auth-routing.module";
import { AdminRoutingModule } from "./admin/admin-routing.module";
const routes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    HomeRoutingModule,
    DashboardRoutingModule,
    SharedComponentsRoutingModule,
    AuthRoutingModule,
    AdminRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
