import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Book } from '../models/book';

@Injectable()
export class BookSearchService {

  constructor(private http: Http) {}

  getBooks(): Promise<Book[]> {
    return this.http.get(`api/books`)
     .toPromise()
     .then(response => response.json().data as Book[])
     .catch(err => console.log(err));
  }

  search(term: string): Observable<Book[]> {
    return this.http
     .get(`api/books/?title=${term}`)
     .map(response => response.json().data as Book[]);
  }
}
