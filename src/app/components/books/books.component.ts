import { Component, OnInit } from '@angular/core';

import { Book } from '../../models/book';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
  providers: [BookService]
})

export class BooksComponent implements OnInit {
  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.getBooks();
  }

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
