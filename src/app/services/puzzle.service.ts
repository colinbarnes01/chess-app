import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PuzzleService {
  dailyPuzzleUrl = 'https://api.chess.com/pub/puzzle';

  constructor(private http: HttpClient) { }

  getDailyPuzzle() {
    return this.http.get<any>(this.dailyPuzzleUrl)
      .pipe(
        catchError(this.handleError)
      );
  }

  handleError(error: HttpErrorResponse) {
    console.error(error);
    return throwError(
      'Error getting the daily puzzle.  Please try again later.'
    );
  }

}
