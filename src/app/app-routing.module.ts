import { RouterModule, Routes } from '@angular/router';

import { CanActiveProfessor } from './shared/auth.guard';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {path: "", loadChildren: ()=> import('./home/home.module').then(m => m.HomeModule)},
  {path: "professor", loadChildren: ()=> import('./professor/professor.module').then(m => m.ProfessorModule), canActivate: [CanActiveProfessor]},
  {path: "game", loadChildren: ()=> import('./game/game.module').then(m => m.GameModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
