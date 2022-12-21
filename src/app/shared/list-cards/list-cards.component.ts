import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Deck } from '../models/deck.model';

@Component({
  selector: 'app-list-cards',
  templateUrl: './list-cards.component.html',
  styleUrls: ['./list-cards.component.scss']
})
export class AddCardsToDeckComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<AddCardsToDeckComponent>,
    @Inject(MAT_DIALOG_DATA) public deck: Deck,
  ) { }

  ngOnInit(): void {
    console.log(this.deck)
  }

}
