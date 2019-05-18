import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PuzzleService {
  dailyPuzzleUrl = 'https://api.chess.com/pub/puzzle';

  constructor(private http: HttpClient) { }

  getDailyPuzzle() {
    return this.http.get<any>(this.dailyPuzzleUrl);
  }

}
