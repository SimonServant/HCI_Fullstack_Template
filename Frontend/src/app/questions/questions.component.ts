import { Component, OnInit } from "@angular/core";
import { UserService } from "../user.service";
import { QuestionsService } from "../questions.service";
import { throwError } from "rxjs";

@Component({
  selector: "app-questions",
  templateUrl: "./questions.component.html",
  styleUrls: ["./questions.component.css"]
})
export class QuestionsComponent implements OnInit {
  constructor(
    private _questionsService: QuestionsService,
    private _userService: UserService
  ) {}

  /**
   * An array of all the BlogPost objects from the API
   */
  public questions;

  public test;

  ngOnInit() {
    this.getPosts();

    this.test = [1, 2, 3, 4];
  }

  getPosts() {
    this._questionsService.list().subscribe(
      // the first argument is a function which runs on success
      data => {
        console.log(data);
        this.questions = data;
        // convert the dates to a nice format
        // for (let question of this.questions) {
        //   post.date = new Date(post.date);
        // }
      },
      // the second argument is a function which runs on error
      err => console.error(err),
      // the third argument is a function which runs on completion
      () => console.log("done loading posts")
    );
  }
}
