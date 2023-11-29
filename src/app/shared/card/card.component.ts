import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Card } from '../models/card.model';
import { DeckService } from './../../professor/service/deck.service';
import { EditCardComponent } from '../edit-card/edit-card.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() card: Card | undefined;
  @Input() addMode: boolean = false;
  @Input() deckId?: number;
  @Output() removeCard = new EventEmitter<number>();

  isOnDeck =  false;

  constructor(
    private deckService: DeckService,
    private dialogRef: MatDialog
  ) { }

  ngOnInit(): void {
  }

  removeCardFromDeck(){
    this.removeCard.emit(this.card!.id)
  }

  addToDeck(){
    this.deckService.addCardToDeck(this.deckId!, this.card!.id!).subscribe((res) => this.isOnDeck = true);
  }

  edit(){
    this.dialogRef.open(EditCardComponent, {
      data: this.card,
      width: '500px'
    })
  }
}
