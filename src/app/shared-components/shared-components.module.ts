import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SharedComponentsRoutingModule } from "./shared-components-routing.module";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";

@NgModule({
  declarations: [HeaderComponent, FooterComponent],
  imports: [CommonModule, SharedComponentsRoutingModule],
  exports: [HeaderComponent, FooterComponent]
})
export class SharedComponentsModule {}
