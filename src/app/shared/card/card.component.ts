import { Component, Input, OnInit } from '@angular/core';

import { Card } from '../models/card.model';
import { DeckService } from './../../professor/service/deck.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() card: Card | undefined;
  @Input() addMode: boolean = false;
  @Input() deckId?: number;

  isOnDeck =  false;

  constructor(
    private deckService: DeckService
  ) { }

  ngOnInit(): void {
  }


  addToDeck(){
    this.deckService.addCardToDeck(this.deckId!, this.card!.id).subscribe((res) => this.isOnDeck = true);
  }
}
