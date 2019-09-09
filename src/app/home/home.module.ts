import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";

import { HomeRoutingModule } from "./home-routing.module";

import { AdminModule } from "../admin/admin.module";
import { SharedComponentsModule } from "../shared-components/shared-components.module";
import { HomeComponent } from "./home/home.component";
import { HomeContentComponent } from "./home/home-content/home-content.component";

@NgModule({
  declarations: [HomeComponent, HomeContentComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedComponentsModule,
    HomeRoutingModule,
    AdminModule
  ],
  exports: [ReactiveFormsModule, HomeComponent, HomeContentComponent]
})
export class HomeModule {}
