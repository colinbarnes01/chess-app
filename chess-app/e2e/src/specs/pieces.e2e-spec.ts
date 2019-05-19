import { browser, logging } from 'protractor';
import { PiecesPage } from '../pageobjects/pieces.po';

describe('when detail page loads', () => {
  let page: PiecesPage;

  beforeEach(() => {
    page = new PiecesPage();
  });

  it('should display the title', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('The Pieces');
  });

  it('should display a list of pieces', () => {
    const pieces = page.getPiecesList();
    expect(pieces).toBeTruthy();
    expect(pieces.count()).toEqual(6);
  });

  it('should display the king piece first and the others in order', () => {
    const expected = [ 'The King', 'The Queen', 'The Rook', 'The Bishop', 'The Knight', 'The Pawn'];
    const pieces = page.getPiecesList();
    expect(pieces.getText()).toEqual(expected);
  });

  it('should display a citation for the images', () => {
    expect(page.getImageCitation()).toBeTruthy();
  });



  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
