import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { LoginRoutingModule } from "./login-routing.module";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { Router } from "@angular/router";

@NgModule({
  declarations: [LoginComponent, RegisterComponent],
  imports: [CommonModule, ReactiveFormsModule, LoginRoutingModule],
  exports: [ReactiveFormsModule, LoginComponent, RegisterComponent]
})
export class LoginModule {}
