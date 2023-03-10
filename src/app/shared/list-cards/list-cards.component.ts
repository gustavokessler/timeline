import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DeckService } from 'src/app/professor/service/deck.service';
import { Card } from '../models/card.model';
import { Deck } from '../models/deck.model';

@Component({
  selector: 'app-list-cards',
  templateUrl: './list-cards.component.html',
  styleUrls: ['./list-cards.component.scss']
})
export class AddCardsToDeckComponent implements OnInit {


  unfilteredArray: Card[] = [];
  cardsToAdd: Card[] = []
  filterText = '';

  constructor(
    public dialogRef: MatDialogRef<AddCardsToDeckComponent>,
    @Inject(MAT_DIALOG_DATA) public deck: Deck,
    private deckService: DeckService
  ) { }

  ngOnInit(): void {
    this.deckService.getAvailableCardsToDeck(this.deck.id).subscribe((res) => {
      this.cardsToAdd = res;
      this.unfilteredArray = res;
    })
  }

  filter() {
    if (this.filterText === '') {
      this.cardsToAdd = this.unfilteredArray;
      return;
    }

    this.cardsToAdd = this.unfilteredArray.filter((card) => card.name.toLocaleLowerCase().includes(this.filterText.toLocaleLowerCase()));
  }

}
