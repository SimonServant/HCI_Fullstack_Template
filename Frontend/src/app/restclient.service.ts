import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestclientService {

  constructor(private httpClient: HttpClient ) { }

  public getBooks() {
    return this.httpClient.get('http://127.0.0.1:8000/book/');
  }
}
