import { Component, OnInit } from '@angular/core';
import { DeckService } from 'src/app/professor/service/deck.service';
import { Game } from 'src/app/shared/models/game.model'

@Component({
  selector: 'app-add-game',
  templateUrl: './add-game.component.html',
  styleUrls: ['./add-game.component.scss']
})
export class AddGameComponent implements OnInit {

  response = {
    text: '',
    error: false
  }

  decks$ = this.deckService.getProfessorDecks();

  game: Game = {}

  constructor(
    private deckService: DeckService
  ) { }

  ngOnInit(): void {
  }

  saveGame(){
    this.deckService.saveGame(this.game).subscribe((res) => {
      this.response.text = "Sucesso ao salvar jogo."
    }, () => {
      this.response.error = true;
      this.response.text = "Houve um erro ao salvar o jogo."
    })
  }

}

