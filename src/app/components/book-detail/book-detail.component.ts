import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { Book } from '../../models/book';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})

export class BookDetailComponent implements OnInit {
  book: Book;
  editingBook = false;

  constructor(
    private bookService: BookService,
    private route: ActivatedRoute,
    private location: Location
  ) {}


  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.bookService.getBook(+params['id']))
      .subscribe(book => this.book = book);
  }

  save(): void {
    this.bookService.update(this.book)
      .then(() => this.editingBook = false);
  }

  markAsRead(): void {
    (this.book.read === true) ? this.book.read = false : this.book.read = true;
    this.bookService.update(this.book);
  }

  goBack(): void {
    this.location.back();
  }

  editBook(): void {
    this.editingBook = true;
  }
}
