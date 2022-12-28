import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GameRoutingModule } from './game-routing.module';
import { GameComponent } from './game.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { GameCardComponent } from './game-card/game-card.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    GameComponent,
    GameCardComponent
  ],
  imports: [
    CommonModule,
    GameRoutingModule,
    FlexLayoutModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule
  ]
})
export class GameModule { }
