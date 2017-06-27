import { PdgPage } from './app.po';

describe('pdg App', () => {
  let page: PdgPage;

  beforeEach(() => {
    page = new PdgPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
