import { Component } from '@angular/core';

import BOOKS from './mock-data';
import Book from './models/book';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Angular Books';
  books = BOOKS;
}
