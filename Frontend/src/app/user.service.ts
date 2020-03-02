import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Router } from "@angular/router";

@Injectable()
export class UserService {
  // http options used for making API calls
  private httpOptions: any;

  // the actual JWT token
  public token: string;

  // the token expiration date
  public token_expires: Date;

  // the username of the logged in user
  public username: string;

  public user_id: number;

  // error messages received from the login attempt
  public errors: any = [];

  constructor(private http: HttpClient, private router: Router) {
    this.httpOptions = {
      headers: new HttpHeaders({ "Content-Type": "application/json" })
      // 'Authorization': 'JWT ' + this._userService.token
    };
  }

  // loginUser(user): Observable<any> {
  //   return this.http.post("http://127.0.0.1:8000/api-token-auth/", user);
  // }

  public isLoggedIn() {
    return this.token != null;
  }

  public register(user) {
    console.log(user);
    this.http
      .post(
        "http://127.0.0.1:8000/api/users/",
        JSON.stringify(user),
        this.httpOptions
      )
      .subscribe(
        data => {
          //this.updateData(data["token"]);
          this.router.navigate(["/login"]);
          console.log(data["token"]);
        },
        err => {
          this.errors = err["error"];
          console.log(this.errors);
          alert(err["error"]);
        }
      );
  }

  // Uses http.post() to get an auth token from djangorestframework-jwt endpoint
  public login(user) {
    console.log("starting");
    this.http
      .post(
        "http://127.0.0.1:8000/api/api-token-auth/",
        JSON.stringify(user),
        this.httpOptions
      )
      .subscribe(
        data => {
          this.updateData(data["token"]);
          console.log(data["token"]);
        },
        err => {
          this.errors = err["error"];
          console.log(this.errors);
        }
      );
  }

  // Refreshes the JWT token, to extend the time the user is logged in
  public refreshToken() {
    this.http
      .post(
        "http://127.0.0.1:8000/api/api-token-refresh/",
        JSON.stringify({ token: this.token }),
        this.httpOptions
      )
      .subscribe(
        data => {
          this.updateData(data["token"]);
        },
        err => {
          this.errors = err["error"];
        }
      );
  }

  public logout() {
    this.token = null;
    this.token_expires = null;
    this.username = null;
  }

  private updateData(token) {
    this.token = token;
    this.errors = [];

    // decode the token to read the username and expiration timestamp
    const token_parts = this.token.split(/\./);
    const token_decoded = JSON.parse(window.atob(token_parts[1]));
    console.log(token_decoded);
    this.token_expires = new Date(token_decoded.exp * 1000);
    this.username = token_decoded.username;
    this.user_id = token_decoded.user_id;
    console.log(token_decoded.user_id);
  }
}
