import { NgBooksPage } from './app.po';

describe('ng-books App', () => {
  let page: NgBooksPage;

  beforeEach(() => {
    page = new NgBooksPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
