import { AddCardsToDeckComponent } from './list-cards/list-cards.component';
import { CardComponent } from './card/card.component';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    CardComponent,
    AddCardsToDeckComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    FlexLayoutModule,
    MatInputModule
  ],
  exports: [CardComponent, AddCardsToDeckComponent],
  entryComponents: [AddCardsToDeckComponent]
})
export class SharedModule { }
