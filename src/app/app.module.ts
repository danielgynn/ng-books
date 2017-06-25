import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms'

import { AppComponent } from './app.component';
import { BookService } from './services/book.service';
import { BookDetailComponent } from './components/book-detail/book-detail.component';
import { BooksComponent } from './components/books/books.component';

@NgModule({
  declarations: [
    AppComponent,
    BookDetailComponent,
    BooksComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [BookService],
  bootstrap: [AppComponent]
})

export class AppModule { }
