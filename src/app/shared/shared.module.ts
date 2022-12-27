import { AddCardComponent } from './add-card/add-card.component';
import { AddCardsToDeckComponent } from './list-cards/list-cards.component';
import { AddDeckComponent } from './add-deck/add-deck.component';
import { CardComponent } from './card/card.component';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { NgModule } from '@angular/core';
import { AddGameComponent } from './add-game/add-game.component';
import { MatSelectModule } from '@angular/material/select';
@NgModule({
  declarations: [
    CardComponent,
    AddCardsToDeckComponent,
    AddDeckComponent,
    AddCardComponent,
    AddGameComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    FlexLayoutModule,
    MatInputModule,
    FormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule
  ],
  providers: [
    MatDatepickerModule,
    MatNativeDateModule
  ],
  exports: [CardComponent, AddCardsToDeckComponent, AddGameComponent],
  entryComponents: [AddCardsToDeckComponent, AddDeckComponent, AddCardComponent, AddGameComponent]
})
export class SharedModule { }
