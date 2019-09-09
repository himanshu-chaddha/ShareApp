import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { AboutUsComponent } from "./static-content/about-us/about-us.component";
import { TermsAndConditionsComponent } from "./static-content/terms-and-conditions/terms-and-conditions.component";
import { BlockUnblockUserComponent } from "./block-unblock-user/block-unblock-user.component";
import { UsersComponent } from "./users/users.component";

const routes: Routes = [
  { path: "about-us", component: AboutUsComponent },
  { path: "terms-and-conditions", component: TermsAndConditionsComponent },
  { path: "block-unblock", component: BlockUnblockUserComponent },
  { path: "users", component: UsersComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {}
