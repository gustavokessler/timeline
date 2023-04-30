import { Component, EventEmitter, Input, OnInit, Output, Inject } from '@angular/core';

import { Card } from '../models/card.model';
import { DeckService } from 'src/app/professor/service/deck.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-card',
  templateUrl: './add-card.component.html',
  styleUrls: ['./add-card.component.scss']
})
export class AddCardComponent implements OnInit {
  card: Card = {
    date: '',
    name: '',
    description: '',
    image: ''
  }

  response = {
    text: '',
    error: false
  }

  constructor(
    public dialogRef: MatDialogRef<AddCardComponent>,
    @Inject(MAT_DIALOG_DATA) public deckId: number,
    private deckSerivce: DeckService
  ) { }

  ngOnInit(): void {
  }

  addNewCardToDeck() {
    this.deckSerivce.addNewCardToDeck(this.card, this.deckId).subscribe((res) => {
      this.dialogRef.close()
    }, (err) => this.response = {
      error: true,
      text: 'Houve algum problema ao adicionar a nova carta'
    })
  }

  saveNewCard() {
    this.deckSerivce.addNewCard(this.card).subscribe((res) => {
      this.card = {
        date: '',
        name: '',
        description: '',
        image: ''
      }
    }, (err) => this.response = {
      error: true,
      text: 'Houve algum problema ao adicionar a nova carta'
    })
  }

}
