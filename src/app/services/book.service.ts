import { Injectable } from '@angular/core';

import { Book } from '../models/book';
import { BOOKS } from '../mock-data';

@Injectable()

export class BookService {
  getBooks(): Promise<Book[]> {
    return Promise.resolve(BOOKS);
  }
}
