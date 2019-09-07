import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";

import { HomeRoutingModule } from "./home-routing.module";
import { LoginModule } from "./login/login.module";
import { AdminModule } from "../admin/admin.module";
import { HomeComponent } from "./home/home.component";
import { HeaderComponent } from "./home/header/header.component";
import { FooterComponent } from "./home/footer/footer.component";
import { HomeContentComponent } from "./home/home-content/home-content.component";

@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    HomeContentComponent
  ],
  imports: [
    CommonModule,

    ReactiveFormsModule,
    HomeRoutingModule,
    AdminModule,
    LoginModule
  ],
  exports: [
    ReactiveFormsModule,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    HomeContentComponent
  ]
})
export class HomeModule {}
