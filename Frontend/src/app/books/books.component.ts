import { Component, OnInit } from '@angular/core';
import { RestclientService } from '../restclient.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  books: any;

  constructor(private restClientService: RestclientService) { }

  ngOnInit() {
    this.restClientService.getBooks().subscribe((data) => {
      console.log(data);
      this.books = data;
    });
  }

}
