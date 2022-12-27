import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { DeckService } from 'src/app/professor/service/deck.service';
import { AddGameComponent } from 'src/app/shared/add-game/add-game.component';

@Component({
  selector: 'app-game-management',
  templateUrl: './game-management.component.html',
  styleUrls: ['./game-management.component.scss']
})
export class GameManagementComponent implements OnInit {

  games$ = this.deckService.getProfessorGames();

  displayedColumns: string[] = ['id', 'name', 'deck', 'uid'];

  constructor(
    private deckService: DeckService,
    private dialogRef: MatDialog
  ) { }

  ngOnInit(): void {
  }

  openNewGameModal() {
    this.dialogRef.open(AddGameComponent, {
      width: '400px',
      maxHeight: '90%',
    }).afterClosed().subscribe(() => this.updateGames());
  }

  updateGames(){
    this.games$ = this.deckService.getProfessorGames(); 
  }

}
