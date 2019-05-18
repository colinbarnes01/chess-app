import { Component, OnInit } from '@angular/core';
import { PuzzleService } from '../services/puzzle.service';


@Component({
  selector: 'app-puzzle',
  templateUrl: './puzzle.component.html',
  styleUrls: ['./puzzle.component.css']
})
export class PuzzleComponent implements OnInit {
  puzzle: any;

  constructor(private puzzleService: PuzzleService) { }

  ngOnInit() {
    this.puzzleService.getDailyPuzzle()
      .subscribe((data: any) => this.puzzle = data);
  }

  isPuzzleDefined() {
    return this.puzzle != null;
  }

}
