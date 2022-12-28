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

  selectedCard: Card | undefined;

  constructor(
    private gameService: GameService,
    private activedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
  }

  shufleDeck(deck: Card[]){
    return deck.sort(() => Math.random() - 0.5)
  }

  selectCard(card: Card){
    this.selectedCard = card;
  }

  setCardOnTimeLine(index: number){
    console.log(index)
    if(index ===  -1){
      if(!this.gtDate(this.selectedCard!.date, this.timeline[0].date)){
        this.timeline.unshift(this.selectedCard!)
        this.hand = this.hand.filter((card) => card.id !== this.selectedCard!.id )
        this.selectedCard = undefined;
      }
    }else if(this.gtDate(this.selectedCard!.date, this.timeline[index].date)){
      this.timeline.splice(index +1, 0, this.selectedCard!)
      this.hand = this.hand.filter((card) => card.id !== this.selectedCard!.id )
      this.selectedCard = undefined;
    }
  }

  gtDate(date1: Date, date2: Date){
    return new Date(date1).getTime() > new Date(date2).getTime()
  }

}
