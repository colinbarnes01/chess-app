import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Piece } from '../types/piece';
import { PieceService } from '../services/piece.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  piece: Piece;
  private sub: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private pieceService: PieceService
    ) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.piece = this.pieceService.getPiece(params.name);
    });
  }

  goBack() {
    this.router.navigate(['/pieces']);
  }

}
