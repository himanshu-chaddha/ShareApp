import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeRoutingModule } from "./home/home-routing.module";
import { DashboardRoutingModule } from "./dashboard/dashboard-routing.module";
const routes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    HomeRoutingModule,
    DashboardRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
