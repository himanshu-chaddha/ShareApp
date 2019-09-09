import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { AuthRoutingModule } from "./auth-routing.module";
import { SharedComponentsModule } from "../shared-components/shared-components.module";

import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { ForgotPasswordComponent } from "./forgot-password/forgot-password.component";

@NgModule({
  declarations: [LoginComponent, RegisterComponent, ForgotPasswordComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedComponentsModule,
    AuthRoutingModule
  ],
  exports: [LoginComponent, RegisterComponent, ForgotPasswordComponent]
})
export class AuthModule {}
