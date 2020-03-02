import { Component, OnInit } from "@angular/core";
import { UserService } from "../user.service";
import { QuestionsService } from "../questions.service";
import { Router } from "@angular/router";
import { throwError } from "rxjs";

@Component({
  selector: "app-create-question",
  templateUrl: "./create-question.component.html",
  styleUrls: ["./create-question.component.css"]
})
export class CreateQuestionComponent implements OnInit {
  constructor(
    private _questionsService: QuestionsService,
    private _userService: UserService,
    private router: Router
  ) {}

  public new_question: any;

  ngOnInit() {
    this.new_question = {
      question: "",
      title: "",
      tags: null,
      up_votes: 0,
      down_votes: 0,
      user: null
    };
  }

  createPost() {
    this.new_question.tags = this.new_question.tags[0];
    this.new_question.user = this._userService.user_id;
    console.log(this.new_question);
    //this.new_question.user = this._userService.;
    this._questionsService.create(this.new_question).subscribe(
      data => {
        // refresh the list
        this.router.navigate(["/questions"]);
      },
      error => {
        console.error("Error saving!");
        return throwError(error);
      }
    );
  }
}
