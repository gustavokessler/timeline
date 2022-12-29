import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GameRoutingModule } from './game-routing.module';
import { GameComponent } from './game.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { GameCardComponent } from './game-card/game-card.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { HowToPlayComponent } from './how-to-play/how-to-play.component';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
  declarations: [
    GameComponent,
    GameCardComponent,
    HowToPlayComponent
  ],
  imports: [
    CommonModule,
    GameRoutingModule,
    FlexLayoutModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule
  ],
  entryComponents: [
    HowToPlayComponent
  ]
})
export class GameModule { }
