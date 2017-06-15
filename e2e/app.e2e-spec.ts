import { LianxiPage } from './app.po';

describe('lianxi App', () => {
  let page: LianxiPage;

  beforeEach(() => {
    page = new LianxiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
