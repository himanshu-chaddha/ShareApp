import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { UsersRoutingModule } from "./users-routing.module";
import { FriendsComponent } from "./friends/friends.component";
import { FriendListComponent } from "./friends/friend-list/friend-list.component";
import { FriendAddComponent } from "./friends/friend-add/friend-add.component";
import { NotificationComponent } from "./notification/notification.component";
import { MyProfileComponent } from "./my-profile/my-profile.component";

@NgModule({
  declarations: [
    FriendsComponent,
    FriendListComponent,
    FriendAddComponent,
    NotificationComponent,
    MyProfileComponent
  ],
  imports: [CommonModule, UsersRoutingModule],
  exports: [
    FriendAddComponent,
    FriendListComponent,
    FriendsComponent,
    NotificationComponent,
    MyProfileComponent
  ]
})
export class UsersModule {}
