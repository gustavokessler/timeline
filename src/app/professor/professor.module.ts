import { CommonModule } from '@angular/common';
import { DecksComponent } from './decks/decks.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgModule } from '@angular/core';
import { ProfessorComponent } from './professor.component';
import { ProfessorRoutingModule } from './professor-routing.module';
import { SharedModule } from '../shared/shared.module';
import { GameManagementComponent } from './game-management/game-management.component';

@NgModule({
  declarations: [
    ProfessorComponent,
    DecksComponent,
    GameManagementComponent
  ],
  imports: [
    CommonModule,
    ProfessorRoutingModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    MatDividerModule,
    MatCardModule,
    FlexLayoutModule,
    MatIconModule,
    MatButtonModule,
    SharedModule,
    MatDialogModule
  ]
})
export class ProfessorModule { }
