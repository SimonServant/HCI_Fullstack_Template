import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { QuestionsService } from "../questions.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  constructor(
    private router: Router,
    private questionService: QuestionsService
  ) {}

  search: string = "";

  ngOnInit() {}

  searchQuestion() {
    this.questionService.search = this.search;
    this.router.navigate(["/questions"]);
    console.log(this.search);
  }
}
