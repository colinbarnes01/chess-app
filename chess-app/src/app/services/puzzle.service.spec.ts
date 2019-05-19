import { TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs/internal/observable/of';

import { PuzzleService } from './puzzle.service';

describe('PuzzleService', () => {
  let puzzleService: PuzzleService;
  const puzzleMock = 'daily puzzle';
  const httpSpy = jasmine.createSpyObj('HttpClient', ['get']);
  httpSpy.get.and.returnValue(of(puzzleMock));

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {provide: HttpClient, useValue: httpSpy}
      ]
    });
    puzzleService = TestBed.get(PuzzleService);

  });

  it('should be created', () => {
    expect(puzzleService).toBeTruthy();
  });

  describe('when get daily puzzle is called', () => {

    it('should make the http request to get the puzzle', () => {
      puzzleService.getDailyPuzzle()
        .subscribe(puzzle => expect(puzzle).toEqual(puzzleMock));
    });

  });
});
