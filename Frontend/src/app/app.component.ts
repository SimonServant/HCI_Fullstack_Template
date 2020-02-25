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

  ngOnInit() {
    this.register_user = {
      username: "",
      password: "",
      email: ""
    };

    this.user = {
      username: "",
      password: ""
    };
  }

  register() {
    this._userService.register({
      username: this.register_user.username,
      password: this.register_user.password,
      email: this.register_user.email
    });
  }

  login() {
    this._userService.login({
      username: this.user.username,
      password: this.user.password
    });
  }

  refreshToken() {
    this._userService.refreshToken();
  }

  logout() {
    this._userService.logout();
  }

  title = "angular-bootstrap-demo";
}
