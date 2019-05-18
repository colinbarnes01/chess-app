import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PiecesComponent } from './pieces/pieces.component';
import { DetailComponent } from './detail/detail.component';
import { PuzzleComponent } from './puzzle/puzzle.component';

const routes: Routes = [
  {
    path: 'detail/:name',
    component: DetailComponent
  },
  {
    path: 'pieces',
    component: PiecesComponent
  },
  {
    path: 'puzzle',
    component: PuzzleComponent
  },
  { path: '**',
    redirectTo: '/pieces',
    pathMatch: 'full'
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
