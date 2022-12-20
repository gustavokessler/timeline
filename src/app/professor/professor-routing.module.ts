import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';
import { ProfessorComponent } from './professor.component';

const routes: Routes = [
  {path: '', component: ProfessorComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfessorRoutingModule { }
