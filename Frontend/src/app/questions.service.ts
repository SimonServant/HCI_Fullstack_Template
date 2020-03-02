import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { UserService } from "./user.service";

@Injectable()
export class QuestionsService {
  constructor(private http: HttpClient, private _userService: UserService) {}

  ngOnInit() {}

  public search: string = "";

  // Uses http.get() to load data from a single API endpoint
  list() {
    return this.http.get("http://127.0.0.1:8000/api/questions/");
  }

  // send a POST request to the API to create a new data object
  create(question) {
    console.log("Token" + this._userService.token);
    var httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
        //Authorization: "Token " + this._userService.token // this is our token from the UserService (see Part 1)
      })
    };
    return this.http.post(
      "http://127.0.0.1:8000/api/questions/",
      JSON.stringify(question),
      httpOptions
    );
  }
}
