import { Component, OnInit } from '@angular/core';

import { DeckService } from 'src/app/professor/service/deck.service';

@Component({
  selector: 'app-game-management',
  templateUrl: './game-management.component.html',
  styleUrls: ['./game-management.component.scss']
})
export class GameManagementComponent implements OnInit {

  games$ = this.deckService.getProfessorGames();

  displayedColumns: string[] = ['id', 'name', 'deck', 'uid'];

  constructor(
    private deckService: DeckService
  ) { }

  ngOnInit(): void {
  }

}
