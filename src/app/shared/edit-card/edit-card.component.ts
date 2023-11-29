import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Card } from '../models/card.model';
import { DeckService } from 'src/app/professor/service/deck.service';

@Component({
  selector: 'app-edit-card',
  templateUrl: './edit-card.component.html',
  styleUrls: ['./edit-card.component.scss']
})
export class EditCardComponent implements OnInit {

  response = {
    text: '',
    error: false
  }

  constructor(@Inject(MAT_DIALOG_DATA) public card: Card, private cardService: DeckService) { }

  ngOnInit(): void {
  }

  save(){
    this.cardService.updateCard(this.card).subscribe((res) => {
      this.response.text = 'Carta editada com sucesso.'
    }, (err) => {
      this.response.text = 'Erro ao editar carta.'
      this.response.error = true
    })
  }

}
