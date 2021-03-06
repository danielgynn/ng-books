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
    this.selectOptions = [
      {value: '0', label: 'A-Z'},
      {value: '1', label: 'Z-A'}
    ];
  }

  selectOptions: Array<any>;
  books: Book[];
  bookOrder: String;
  bookFilter: String;
  selectedBook: Book;
  totalBooks = 0;

  onSelect(book: Book): void {
    (this.selectedBook === book) ? (this.selectedBook = null) : (this.selectedBook = book);
  }

  selectOrder(order: String): void {
    this.bookOrder = order;
    this.bookService.sortBooks(this.bookOrder).then(books => {
      this.books = books
      this.totalBooks = books.length
    });
  }

  getBooks(): void {
    this.bookService.getBooks().then(books => {
      this.books = books
      this.totalBooks = books.length
    });
  }

  sortByRead(): void {
    this.bookFilter = 'read';
    this.bookService.getFilteredBooks(this.bookFilter).then(books => {
      this.books = books
      this.totalBooks = books.length
    });
  }

  sortByUnread(): void {
    this.bookFilter = 'unread';
    this.bookService.getFilteredBooks(this.bookFilter).then(books => {
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

  delete(book: Book): void {
    this.bookService
      .delete(book.id)
      .then(() => {
        this.books = this.books.filter(b => b !== book);
        if (this.selectedBook === book) { this.selectedBook = null; }
      });
  }
}
