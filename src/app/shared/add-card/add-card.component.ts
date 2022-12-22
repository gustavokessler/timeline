import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Card } from '../models/card.model';
import { DeckService } from 'src/app/professor/service/deck.service';

@Component({
  selector: 'app-add-card',
  templateUrl: './add-card.component.html',
  styleUrls: ['./add-card.component.scss']
})
export class AddCardComponent implements OnInit {
  @Input() deckId?: number;
  card: Card = {
    date: new Date(),
    name: '',
    description: '',
    image: ''
  }



  constructor(
    private deckService: DeckService
  ) { }

  ngOnInit(): void {
  }

}
