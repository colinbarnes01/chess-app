import { TestBed } from '@angular/core/testing';

import { PieceService } from './piece.service';
import { Piece } from '../types/piece';

describe('PieceService', () => {
let pieceService: PieceService;

beforeEach(() => {
    TestBed.configureTestingModule({});
    pieceService = TestBed.get(PieceService);
  });

it('should be created', () => {
    expect(pieceService).toBeTruthy();
  });

describe('when get pieces is called', () => {
    it('should return an array of pieces', () => {
      const pieces: Piece[] = pieceService.getPieces();
      expect(pieces).toBeDefined();
    });
});

describe('when get piece is called', () => {
  it('should return the first element with the selected name', () => {
    const piece: Piece = pieceService.getPiece('King');
    expect(piece).toBeDefined();
  });
});


});
