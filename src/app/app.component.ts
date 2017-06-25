import { Component, OnInit } from '@angular/core';

import { Book } from './models/book';
import { BookService } from './services/book.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [BookService]
})

export class AppComponent implements OnInit {
  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.getBooks();
  }

  title = 'Angular Books';
  books: Book[];
  selectedBook: Book;
  totalBooks = 0;

  onSelect(book: Book): void {
    (this.selectedBook === book) ? (this.selectedBook = null) : (this.selectedBook = book);
  }

  getBooks(): void {
    this.bookService.getBooks().then(books => {
      this.books = books
      this.totalBooks = books.length
    });
  }
}
