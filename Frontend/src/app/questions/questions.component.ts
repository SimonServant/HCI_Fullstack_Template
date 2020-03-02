import { Component, OnInit, Input } from "@angular/core";
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
    public _questionsService: QuestionsService,
    public _userService: UserService
  ) {}

  /**
   * An array of all the BlogPost objects from the API
   */
  public questions;

  public unfilteredQuestions;

  public test;

  ngOnInit() {
    this.getPosts();

    this.test = [1, 2, 3, 4];
  }

  searchQuestion() {
    this.filter();
  }

  getPosts() {
    this._questionsService.list().subscribe(
      // the first argument is a function which runs on success
      data => {
        console.log(data);
        this.unfilteredQuestions = data;
        this.questions = data;
        if (this._questionsService.search != "") {
          this.filter();
        }

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

  filter() {
    var splittedsearch = this._questionsService.search.split(" ");
    var list = new Array();
    this.questions.forEach(element => {
      if (splittedsearch.some(word => element.question.includes(word))) {
        list.push(element);
      }
    });
    console.log(list);
    this.questions = list;
  }
}
