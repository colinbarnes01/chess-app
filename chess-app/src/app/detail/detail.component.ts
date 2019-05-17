import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';

import { Piece } from '../types/piece';
import { PieceService } from '../services/piece.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  piece: any;
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

}
