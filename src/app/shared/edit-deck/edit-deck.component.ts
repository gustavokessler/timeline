import { DeckService } from 'src/app/professor/service/deck.service';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Deck } from '../models/deck.model';

@Component({
  selector: 'app-edit-deck',
  templateUrl: './edit-deck.component.html',
  styleUrls: ['./edit-deck.component.scss']
})
export class EditDeckComponent implements OnInit {
  response = {
    text: '',
    error: false
  }

  constructor(@Inject(MAT_DIALOG_DATA) public deck: Deck, private DeckService: DeckService) { }

  ngOnInit(): void {
  }

  save() {
    this.DeckService.updateDeck(this.deck).subscribe((res) => {
      this.response.text = 'Carta editada com sucesso.'
    }, (err) => {
      this.response.text = 'Erro ao editar carta.'
      this.response.error = true
    })
  }

}
