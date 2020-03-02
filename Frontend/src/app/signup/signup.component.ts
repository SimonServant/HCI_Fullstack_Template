import { Component, OnInit } from "@angular/core";
import { UserService } from "../user.service";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.css"]
})
export class SignupComponent implements OnInit {
  public register_user: any;

  constructor(private _userService: UserService) {}

  ngOnInit() {
    this.register_user = {
      username: "",
      password: "",
      email: ""
    };
  }

  register() {
    this._userService.register({
      username: this.register_user.username,
      password: this.register_user.password,
      email: this.register_user.email
    });
  }
}
