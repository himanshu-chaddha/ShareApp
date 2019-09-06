import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {}
  aboutUs() {
    this.router.navigate(["/about-us"], { relativeTo: this.route });
  }
  termsAndConditions() {
    this.router.navigate(["/terms-and-conditions"], { relativeTo: this.route });
  }
}
