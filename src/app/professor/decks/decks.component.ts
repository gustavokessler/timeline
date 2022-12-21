import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

import { AddCardsToDeckComponent } from 'src/app/shared/list-cards/list-cards.component';
import { AddDeckComponent } from 'src/app/shared/add-deck/add-deck.component';
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

  openCardsModal() {
    this.dialogRef.open(AddCardsToDeckComponent, {
      width: '80%',
      minHeight: 600,
      maxHeight: '90%',
      data: this.selectedDeck
    }).afterClosed().subscribe(() => this.updateDecks());
  }

  openEditDeckModal(){
    this.dialogRef.open(AddDeckComponent, {
      width: '50%',
      minHeight: 600,
      maxHeight: '90%',
      data: this.selectedDeck
    }).afterClosed().subscribe(() => this.updateDecks());
  }

  removeCardFromDeck(cardId: number) {
    this.deckService.removeCardFromDeck(this.selectedDeck!.id, cardId).pipe(
      tap(() => this.updateDecks())
    ).subscribe()
  }

  updateDecks() {
    this.decks$ = this.deckService.getProfessorDecks().pipe(
      tap((decks) => this.selectedDeck = decks.find((deck) => deck.id === this.selectedDeck!.id))
    )
  }

}
