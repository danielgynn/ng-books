import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Book } from '../../models/book';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
  providers: [BookService]
})

export class BooksComponent implements OnInit {
  constructor(
    private router: Router,
    private bookService: BookService
  ) { }

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

  gotoDetail(): void {
    this.router.navigate(['/book', this.selectedBook.id]);
  }

  add(title: string): void {
    title = title.trim();
    if (!title) { return; }
    this.bookService.create(title)
      .then(book => {
        this.books.push(book);
        this.selectedBook = null;
      });
  }
}
