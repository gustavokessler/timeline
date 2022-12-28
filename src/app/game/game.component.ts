import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { catchError, filter, map, switchMap, tap } from 'rxjs/operators';
import { Card } from '../shared/models/card.model';
import { Game } from '../shared/models/game.model';
import { GameService } from './game.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  game$ =  this.activedRoute.queryParamMap.pipe(
    map((params) => {
      return params.get('code')
    }),
    filter((gameCode) => !!gameCode),
    switchMap((gameCode) => this.gameService.getGame(gameCode!)),
    tap((game) => this.deck = this.shufleDeck([...game.deck!.cards])),
    tap((game) => {
      for (let index = 0; index < 5; index++) {
        this.hand.push(this.deck.pop()!)        
      }
    }),
    tap((game) => this.timeline.push(this.deck.pop()!)),
    tap((game) => {
      console.log(this.deck)
      console.log(this.hand)
    }),
    catchError((err) => of(false))
  )

  hand: Card[] = []
  deck: Card[] = []
  timeline: Card[] = []

  constructor(
    private gameService: GameService,
    private activedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
  }

  shufleDeck(deck: Card[]){
    return deck.sort(() => Math.random() - 0.5)
  }

}
