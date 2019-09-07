import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AdminModule } from "./admin/admin.module";
import { DashboardModule } from "./dashboard/dashboard.module";
import { HomeModule } from "./home/home.module";
import { LoginModule } from "./home/login/login.module";
import { ShareModule } from "./share/share.module";
import { UsersModule } from "./users/users.module";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AdminModule,
    DashboardModule,
    HomeModule,
    LoginModule,
    ShareModule,
    UsersModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
