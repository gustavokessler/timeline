import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import { NgModule } from '@angular/core';
import { ProfessorComponent } from './professor.component';
import { ProfessorRoutingModule } from './professor-routing.module';

@NgModule({
  declarations: [
    ProfessorComponent
  ],
  imports: [
    CommonModule,
    ProfessorRoutingModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule
  ]
})
export class ProfessorModule { }
