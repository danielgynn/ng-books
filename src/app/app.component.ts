import { Component } from '@angular/core';

export class Book {
  id: number;
  title: string;
  author: string;
  cover?: string;
  publishDate?: number;
  blurb?: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Angular Books';
  book: Book = {
    id: 1,
    title: 'Norwegian Wood',
    author: 'Haruki Murakami',
    cover: 'https://images.gr-assets.com/books/1386924361l/11297.jpg',
    publishDate: 1987,
    blurb: `
      Toru, a quiet and preternaturally serious young college student in Tokyo,
      is devoted to Naoko, a beautiful and introspective young woman, but their
      mutual passion is marked by the tragic death of their best friend years before.
      Toru begins to adapt to campus life and the loneliness and isolation he faces there,
      but Naoko finds the pressures and responsibilities of life unbearable. As she
      retreats further into her own world, Toru finds himself reaching out to others
      and drawn to a fiercely independent and sexually liberated young woman.
    `
  };
}
