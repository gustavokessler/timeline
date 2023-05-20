import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { map } from 'rxjs/operators';
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

  decks$ = this.deckService.getProfessorDecks().pipe(
    map((decks) => decks.filter((d) => d.cards.length > 5))
  );

  game: Game = {}

  constructor(
    private deckService: DeckService,
    private dialogRef: MatDialogRef<AddGameComponent>
  ) { }

  ngOnInit(): void {
  }

  saveGame(){
    this.deckService.saveGame(this.game).subscribe((res) => {
      this.response.text = "Sucesso ao salvar jogo."
      this.dialogRef.close()
    }, () => {
      this.response.error = true;
      this.response.text = "Houve um erro ao salvar o jogo."
    })
  }

}

