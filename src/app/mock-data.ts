import Book from './models/book';

const BOOKS: Book[] = [
  {
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
  },
  {
    id: 2,
    title: 'Kafka on the Shore',
    author: 'Haruki Murakami',
    cover: 'https://images.gr-assets.com/books/1429638085l/4929.jpg',
    publishDate: 2002,
    blurb: `
      Kafka on the Shore is powered by two remarkable characters: a teenage boy,
      Kafka Tamura, who runs away from home either to escape a gruesome oedipal
      prophecy or to search for his long-missing mother and sister; and an aging
      simpleton called Nakata, who never recovered from a wartime affliction and
      now is drawn toward Kafka for reasons that, like the most basic activities
      of daily life, he cannot fathom.
    `
  },
  {
    id: 3,
    title: 'The Wind-Up Bird Chronicle',
    author: 'Haruki Murakami',
    cover: 'https://images.gr-assets.com/books/1322148274l/284066.jpg',
    publishDate: 1994,
    blurb: `
      In a Tokyo suburb a young man named Toru Okada searches for his wife's missing
      cat. Soon he finds himself looking for his wife as well in a netherworld that
      lies beneath the placid surface of Tokyo. As these searches intersect, Okada
      encounters a bizarre group of allies and antagonists: a psychic prostitute; a
      malevolent yet mediagenic politician; a cheerfully morbid sixteen-year-old-girl;
      and an aging war veteran who has been permanently changed by the hideous things
      he witnessed during Japan's forgotten campaign in Manchuria.
    `
  }
];

export default BOOKS;
