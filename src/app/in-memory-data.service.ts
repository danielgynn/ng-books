import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const books = [
      {
        id: 1,
        title: 'Norwegian Wood',
        author: 'Haruki Murakami',
        cover: 'https://images.gr-assets.com/books/1386924361l/11297.jpg',
        publishDate: 1987,
        blurb: `Toru, a quiet and preternaturally serious young college student in Tokyo, is devoted to Naoko, a beautiful and introspective young woman, but their mutual passion is marked by the tragic death of their best friend years before. Toru begins to adapt to campus life and the loneliness and isolation he faces there, but Naoko finds the pressures and responsibilities of life unbearable. As she retreats further into her own world, Toru finds himself reaching out to others and drawn to a fiercely independent and sexually liberated young woman.`
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
      },
      {
        id: 4,
        title: '1Q84',
        author: 'Haruki Murakami',
        cover: 'https://images.gr-assets.com/books/1483103331l/10357575.jpg',
        publishDate: 2009,
        blurb: `
          A young woman named Aomame follows a taxi driver’s enigmatic suggestion and
          begins to notice puzzling discrepancies in the world around her. She has entered,
          she realizes, a parallel existence, which she calls 1Q84 —“Q is for ‘question mark.’
          A world that bears a question.” Meanwhile, an aspiring writer named Tengo takes on a
          suspect ghostwriting project. He becomes so wrapped up with the work and its unusual
          author that, soon, his previously placid life begins to come unraveled.
        `
      },
      {
        id: 5,
        title: 'Sputnik Sweetheart',
        author: 'Haruki Murakami',
        cover: 'https://images.gr-assets.com/books/1403184551l/397165.jpg',
        publishDate: 1999,
        blurb: `
          A college student, identified only as “K,” falls in love with his classmate, Sumire.
          But devotion to an untidy writerly life precludes her from any personal commitments–until
          she meets Miu, an older and much more sophisticated businesswoman. When Sumire disappears
          from an island off the coast of Greece, “K” is solicited to join the search party and
          finds himself drawn back into her world and beset by ominous, haunting visions. A
          love story combined with a detective story, Sputnik Sweetheart ultimately lingers in
          the mind as a profound meditation on human longing.
        `
      },
      {
        id: 6,
        title: 'The Fellowship of the Ring',
        author: 'J.R.R. Tolkien',
        cover: 'https://images.gr-assets.com/books/1307111070l/727798.jpg',
        publishDate: 1954,
        blurb: `
          In a sleepy village in the Shire, a young hobbit is entrusted with an immense task.
          He must make a perilous journey across Middle-earth to the Cracks of Doom, there
          to destroy the Ruling Ring of Power - the only thing that prevents the Dark
          Lord's evil dominion.
        `
      },
      {
        id: 7,
        title: 'A Tale for the Time Being',
        author: 'Ruth Ozeki',
        cover: 'https://images.gr-assets.com/books/1463767452l/15811545.jpg',
        publishDate: 2013,
        blurb: `
          In Tokyo, sixteen-year-old Nao has decided there’s only one escape from her aching
          loneliness and her classmates’ bullying, but before she ends it all, Nao plans to
          document the life of her great-grandmother, a Buddhist nun who’s lived more than a
          century. A diary is Nao’s only solace—and will touch lives in a ways she can
          scarcely imagine.
        `
      },
      {
        id: 8,
        title: 'If on a Winter\'s Night a Traveler',
        author: 'Italo Calvino',
        cover: 'https://images.gr-assets.com/books/1355316130l/374233.jpg',
        publishDate: 1979,
        blurb: `
          If on a Winter's Night a Traveler is a marvel of ingenuity, an experimental
          text that looks longingly back to the great age of narration--"when time no
          longer seemed stopped and did not yet seem to have exploded." Italo Calvino's
          novel is in one sense a comedy in which the two protagonists, the Reader and
          the Other Reader, ultimately end up married, having almost finished If on a
          Winter's Night a Traveler.
        `
      }
    ];
    return { books };
  }
}
