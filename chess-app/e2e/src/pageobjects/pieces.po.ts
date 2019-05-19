import { browser, by, element } from 'protractor';

export class PiecesPage {
  navigateTo() {
    return browser.get('/pieces') as Promise<any>;
  }

  getTitleText() {
    return element(by.id('pieces-header')).getText() as Promise<string>;
  }

  getPiecesList() {
    return element.all(by.css('mat-card'));
  }

  getImageCitation() {
    return element(by.id('img_cite')).getText() as Promise<string>;
  }
}
