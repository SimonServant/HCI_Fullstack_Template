import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-answers',
  templateUrl: './answers.component.html',
  styleUrls: ['./answers.component.css']
})
export class AnswersComponent implements OnInit {
  public Answers
  constructor() { }

  ngOnInit() {
    var foo:string[] = ['a','b'];
    this.Answers = {foo}
  }

}
