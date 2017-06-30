import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

import { Book } from '../../models/book';
import { BookSearchService } from '../../services/book-search.service';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [BookSearchService]
})

export class SearchComponent implements OnInit {
  books: Observable<Book[]>;
  error = '';
  searchByFilter: string = 'title';
  private searchTerms = new Subject<string>();

   constructor(
     private bookSearchService: BookSearchService,
     private router: Router) {}

   search(term: string): void {
     this.searchTerms.next(term);
   }

   searchBy(filter: string): void {
     this.searchByFilter = filter;
     this.searchTerms.next('');
   }

   ngOnInit(): void {
     this.books = this.searchTerms
       .debounceTime(300)
       .distinctUntilChanged()
       .switchMap(term => term
         ? this.bookSearchService.search(term, this.searchByFilter)
         : Observable.of<Book[]>([])
       )
       .catch(error => {
         console.log(error);
         return Observable.of<Book[]>([]);
       });
     }

   gotoDetail(book: Book): void {
     let link = ['/book', book.id];
     this.router.navigate(link);
   }
}
