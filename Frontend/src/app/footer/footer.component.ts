import { Component, OnInit } from "@angular/core";
import { UserService } from "../user.service";

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.css"]
})
export class FooterComponent implements OnInit {
  text: string = "Hallo";

  show: boolean = true;
  constructor(public _userService: UserService) {
    this.show = _userService.username != null;
    this.text = _userService.username;
  }

  ngOnInit() {}
}
