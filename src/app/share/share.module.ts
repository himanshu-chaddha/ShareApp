import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ShareRoutingModule } from "./share-routing.module";
import { MyDriveComponent } from "./my-drive/my-drive.component";
import { UploadComponent } from "./my-drive/upload/upload.component";
import { ShareFilesComponent } from "./my-drive/share-files/share-files.component";
import { SharedFilesComponent } from "./shared-files/shared-files.component";

@NgModule({
  declarations: [
    MyDriveComponent,
    UploadComponent,
    ShareFilesComponent,
    SharedFilesComponent
  ],
  imports: [CommonModule, ShareRoutingModule],
  exports: [
    MyDriveComponent,
    UploadComponent,
    ShareFilesComponent,
    SharedFilesComponent
  ]
})
export class ShareModule {}
