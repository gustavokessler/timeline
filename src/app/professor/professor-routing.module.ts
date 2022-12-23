import { RouterModule, Routes } from '@angular/router';

import { DecksComponent } from './decks/decks.component';
import { GameManagementComponent } from './game-management/game-management.component';
import { NgModule } from '@angular/core';
import { ProfessorComponent } from './professor.component';

const routes: Routes = [
  {
    path: '', component: ProfessorComponent,
    children: [
      { path: 'decks', component: DecksComponent },
      { path: 'game', component: GameManagementComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfessorRoutingModule { }
