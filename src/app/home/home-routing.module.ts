import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./login/login/login.component";
import { RegisterComponent } from "./login/register/register.component";
import { AboutUsComponent } from "../admin/static-content/about-us/about-us.component";
import { TermsAndConditionsComponent } from "../admin/static-content/terms-and-conditions/terms-and-conditions.component";
import { HomeContentComponent } from "./home/home-content/home-content.component";
import { HomeComponent } from "./home/home.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "home", component: HomeComponent },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: "about-us", component: AboutUsComponent },
  { path: "terms-and-conditions", component: TermsAndConditionsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {}
