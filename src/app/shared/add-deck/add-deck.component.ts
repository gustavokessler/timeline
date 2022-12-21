import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DeckService } from 'src/app/professor/service/deck.service';
import { Deck } from '../models/deck.model';

@Component({
  selector: 'app-add-deck',
  templateUrl: './add-deck.component.html',
  styleUrls: ['./add-deck.component.scss']
})
export class AddDeckComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<AddDeckComponent>,
    @Inject(MAT_DIALOG_DATA) public deck: Deck,
    private deckSerivce: DeckService
  ) { }

  ngOnInit(): void {
  }

}
