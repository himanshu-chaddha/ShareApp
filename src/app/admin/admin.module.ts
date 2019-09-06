import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { AdminRoutingModule } from "./admin-routing.module";
import { BlockUnblockUserComponent } from "./block-unblock-user/block-unblock-user.component";
import { UsersComponent } from "./users/users.component";
import { UserStatisticsComponent } from "./user-statistics/user-statistics.component";
import { StaticContentComponent } from "./static-content/static-content.component";
import { AboutUsComponent } from "./static-content/about-us/about-us.component";
import { TermsAndConditionsComponent } from "./static-content/terms-and-conditions/terms-and-conditions.component";
import { UserListComponent } from "./users/user-list/user-list.component";

@NgModule({
  declarations: [
    BlockUnblockUserComponent,
    UsersComponent,
    UserStatisticsComponent,
    StaticContentComponent,
    AboutUsComponent,
    TermsAndConditionsComponent,
    UserListComponent
  ],
  imports: [CommonModule, AdminRoutingModule],
  exports: [
    BlockUnblockUserComponent,
    UserStatisticsComponent,
    UsersComponent,
    StaticContentComponent,
    AboutUsComponent,
    TermsAndConditionsComponent,
    UserListComponent
  ]
})
export class AdminModule {}
