import { ComprafacilPage } from './app.po';

describe('comprafacil App', function() {
  let page: ComprafacilPage;

  beforeEach(() => {
    page = new ComprafacilPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
