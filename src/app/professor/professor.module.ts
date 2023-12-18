import { CommonModule } from '@angular/common';
import { DecksComponent } from './decks/decks.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { GameLoginComponent } from './game-login/game-login.component';
import { GameManagementComponent } from './game-management/game-management.component';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgModule } from '@angular/core';
import { ProfessorComponent } from './professor.component';
import { ProfessorRoutingModule } from './professor-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ProfessorComponent,
    DecksComponent,
    GameManagementComponent,
    GameLoginComponent
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
    MatDialogModule,
    MatTableModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
  ]
})
export class ProfessorModule { }
