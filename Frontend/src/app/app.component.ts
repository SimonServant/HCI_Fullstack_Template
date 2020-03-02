import { Component, OnInit } from "@angular/core";
import { UserService } from "./user.service";
import { throwError } from "rxjs";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  /**
   * An object representing the user for the login form
   */
  public user: any;

  public register_user: any;

  constructor(private _userService: UserService) {}

  ngOnInit() {}

  refreshToken() {
    this._userService.refreshToken();
  }

  logout() {
    this._userService.logout();
  }

  title = "Stackoverflow cognitive walkthrough";
}
