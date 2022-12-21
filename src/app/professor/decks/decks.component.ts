import { Component, OnInit } from '@angular/core';

import { AuthService } from 'src/app/shared/auth.service';
import { Deck } from 'src/app/shared/models/deck.model';
import { DeckService } from '../service/deck.service';

@Component({
  selector: 'app-decks',
  templateUrl: './decks.component.html',
  styleUrls: ['./decks.component.scss']
})
export class DecksComponent implements OnInit {


  decks$ = this.deckService.getProfessorDecks();
  selectedDeck: Deck | undefined;

  constructor(
    private autService: AuthService,
    private deckService: DeckService
  ) { }

  ngOnInit(): void {
  }


}
