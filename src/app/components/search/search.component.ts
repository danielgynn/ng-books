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
   private searchTerms = new Subject<string>();

   constructor(
     private bookSearchService: BookSearchService,
     private router: Router) {}

   // Push a search term into the observable stream.
   search(term: string): void {
     this.searchTerms.next(term);
   }

   ngOnInit(): void {
     this.books = this.searchTerms
       .debounceTime(300)
       .distinctUntilChanged()
       .switchMap(term => term
         ? this.bookSearchService.search(term)
         : Observable.of<Book[]>([]))
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
