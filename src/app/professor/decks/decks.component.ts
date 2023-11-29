import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

import { AddCardComponent } from './../../shared/add-card/add-card.component';
import { AddCardsToDeckComponent } from 'src/app/shared/list-cards/list-cards.component';
import { AddDeckComponent } from 'src/app/shared/add-deck/add-deck.component';
import { AuthService } from 'src/app/shared/auth.service';
import { Deck } from 'src/app/shared/models/deck.model';
import { DeckService } from '../service/deck.service';
import { EditDeckComponent } from 'src/app/shared/edit-deck/edit-deck.component';
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

  openNewCardModal() {
    this.dialogRef.open(AddCardComponent, {
      width: '600px',
      maxHeight: '90%',
      data: this.selectedDeck!.id
    }).afterClosed().subscribe(() => this.updateDecks());
  }

  openCardsModal() {
    this.dialogRef.open(AddCardsToDeckComponent, {
      width: '80%',
      minHeight: 600,
      maxHeight: '600px',
      data: this.selectedDeck
    }).afterClosed().subscribe(() => this.updateDecks());
  }

  openEditDeckModal(isNew?: boolean) {
    this.dialogRef.open(AddDeckComponent, {
      width: '400px',
      maxHeight: '90%',
      data: isNew ? {} : this.selectedDeck
    }).afterClosed().subscribe(() => this.updateDecks());
  }

  removeCardFromDeck(cardId: number) {
    this.deckService.removeCardFromDeck(this.selectedDeck!.id, cardId).pipe(
      tap(() => this.updateDecks())
    ).subscribe()
  }

  updateDeck(deck: Deck){
    this.dialogRef.open(EditDeckComponent, {
      data: deck,
      width: '480px'
    })
  }

  updateDecks() {
    console.log('teste');
    this.decks$ = this.deckService.getProfessorDecks().pipe(
      tap((decks) => {
        if (this.selectedDeck) {
          this.selectedDeck = decks.find((deck) => deck.id === this.selectedDeck!.id)
        } else if(decks.length > 0) {
          this.selectedDeck = decks[0]
        }
      })
    )
  }

}
