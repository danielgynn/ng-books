import { Component, OnInit } from '@angular/core';

import { Book } from '../../models/book';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {
  books: Book[] = [];

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.bookService.getBooks()
      .then(books => {
        this.books = books.slice(Math.max(books.length - 3, 0))
        this.reverseBooks()
      });
  }

  reverseBooks(): void {
    this.books.reverse();
  }
}
