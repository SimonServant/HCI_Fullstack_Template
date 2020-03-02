import { Component, OnInit } from "@angular/core";
import { throwError } from "rxjs";
import { UserService } from "../user.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  public user: any;

  constructor(private _userService: UserService) {}

  ngOnInit() {
    this.user = {
      username: "",
      password: ""
    };
  }

  login() {
    console.log("Hallo");
    console.log("Username:" + this.user.username);
    console.log("Password:" + this.user.password);
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
}
