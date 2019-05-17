import { Injectable } from '@angular/core';

import { PIECES } from '../mock-data/pieces';
import { Piece } from '../types/piece';

@Injectable({
  providedIn: 'root'
})
export class PieceService {

  constructor() { }

  getPieces(): Piece[] {
    return PIECES;
  }

  getPiece(name: string): Piece {
    return PIECES.find((piece => piece.name === name));
  }
}
