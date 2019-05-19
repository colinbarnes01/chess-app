import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Piece } from '../types/piece';
import { PieceService } from '../services/piece.service';

@Component({
  selector: 'app-pieces',
  templateUrl: './pieces.component.html',
  styleUrls: ['./pieces.component.css']
})

export class PiecesComponent implements OnInit {
  public pieces: Piece[];

  constructor(private router: Router, private pieceService: PieceService) { }

  ngOnInit() {
    this.pieces = this.pieceService.getPieces();
  }

  onClick(name: string) {
    this.router.navigate(['/detail', name]);
  }

}
