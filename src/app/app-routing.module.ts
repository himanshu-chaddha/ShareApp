import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home/home.component";
import { AboutUsComponent } from "./admin/static-content/about-us/about-us.component";
import { TermsAndConditionsComponent } from "./admin/static-content/terms-and-conditions/terms-and-conditions.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    children: [
      { path: "about-us", component: AboutUsComponent },
      { path: "terms-and-conditions", component: TermsAndConditionsComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
