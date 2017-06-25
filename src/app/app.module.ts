import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppRoutingModule }     from './app-routing.module';

import { AppComponent } from './app.component';
import { BookService } from './services/book.service';

import { BookDetailComponent } from './components/book-detail/book-detail.component';
import { BooksComponent } from './components/books/books.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    BookDetailComponent,
    BooksComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [BookService],
  bootstrap: [AppComponent]
})

export class AppModule { }
