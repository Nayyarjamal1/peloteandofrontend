import { PeloteandoPage } from './app.po';

describe('peloteando App', function() {
  let page: PeloteandoPage;

  beforeEach(() => {
    page = new PeloteandoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
