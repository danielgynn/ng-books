import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Book } from '../models/book';

@Injectable()

export class BookService {
  private booksUrl = 'api/books';

  constructor(private http: Http) { }

  getBooks(): Promise<Book[]> {
    return this.http.get(this.booksUrl)
     .toPromise()
     .then(response => response.json().data as Book[])
     .catch(this.handleError);
  }

  getBook(id: number): Promise<Book> {
    const url = `${this.booksUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as Book)
      .catch(this.handleError);
  }

  private headers = new Headers({'Content-Type': 'application/json'});

  update(book: Book): Promise<Book> {
    const url = `${this.booksUrl}/${book.id}`;
    return this.http
      .put(url, JSON.stringify(book), {headers: this.headers})
      .toPromise()
      .then(() => book)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
