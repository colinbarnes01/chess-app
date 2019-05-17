import { Component, OnInit } from '@angular/core';
import { Piece } from '../types/piece';

@Component({
  selector: 'app-pieces',
  templateUrl: './pieces.component.html',
  styleUrls: ['./pieces.component.css']
})

export class PiecesComponent implements OnInit {
  public queen: Piece;

  constructor() { }

  ngOnInit() {
    this.queen = new Piece('Queen', 9, 'url');
  }

}
