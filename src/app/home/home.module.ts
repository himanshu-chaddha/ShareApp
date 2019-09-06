import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { HomeRoutingModule } from "./home-routing.module";
import { LoginModule } from "./login/login.module";
import { AdminModule } from "../admin/admin.module";
import { HomeComponent } from "./home/home.component";
import { HeaderComponent } from "./home/header/header.component";
import { FooterComponent } from "./home/footer/footer.component";

@NgModule({
  declarations: [HomeComponent, HeaderComponent, FooterComponent],
  imports: [CommonModule, HomeRoutingModule, AdminModule, LoginModule],
  exports: [HomeComponent, HeaderComponent, FooterComponent]
})
export class HomeModule {}
