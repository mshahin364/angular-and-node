import { AngularAndNodePage } from './app.po';

describe('angular-and-node App', () => {
  let page: AngularAndNodePage;

  beforeEach(() => {
    page = new AngularAndNodePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
