import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms'

import { AppComponent } from './app.component';
import { BookDetailComponent } from './components/book-detail/book-detail.component';
import { BookService } from './services/book.service';

@NgModule({
  declarations: [
    AppComponent,
    BookDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [BookService],
  bootstrap: [AppComponent]
})

export class AppModule { }
