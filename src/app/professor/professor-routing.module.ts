import { RouterModule, Routes } from '@angular/router';

import { DecksComponent } from './decks/decks.component';
import { NgModule } from '@angular/core';
import { ProfessorComponent } from './professor.component';

const routes: Routes = [
  {
    path: '', component: ProfessorComponent,
    children: [
      { path: 'decks', component: DecksComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfessorRoutingModule { }
