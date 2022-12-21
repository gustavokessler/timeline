import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

import { AddCardsToDeckComponent } from 'src/app/shared/list-cards/list-cards.component';
import { AuthService } from 'src/app/shared/auth.service';
import { Deck } from 'src/app/shared/models/deck.model';
import { DeckService } from '../service/deck.service';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-decks',
  templateUrl: './decks.component.html',
  styleUrls: ['./decks.component.scss']
})
export class DecksComponent implements OnInit {


  decks$ = this.deckService.getProfessorDecks().pipe(
    tap((deck) => this.selectedDeck = deck[0])
  );
  selectedDeck: Deck | undefined;

  constructor(
    private autService: AuthService,
    private deckService: DeckService,
    private dialogRef: MatDialog
  ) { }

  ngOnInit(): void {
  }

  openCardsModal(){
    this.dialogRef.open(AddCardsToDeckComponent, {
      width: '80%',
      minHeight: 600,
      maxHeight: '90%',
      data: this.selectedDeck
    });
  }


}
