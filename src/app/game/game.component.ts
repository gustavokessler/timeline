import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { catchError, filter, map, switchMap, tap } from 'rxjs/operators';
import { Card } from '../shared/models/card.model';
import { Game } from '../shared/models/game.model';
import { GameService } from './game.service';
import { HowToPlayComponent } from './how-to-play/how-to-play.component';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  game$ = this.activedRoute.queryParamMap.pipe(
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
    catchError((err) => of(false))
  )

  hand: Card[] = []
  deck: Card[] = []
  timeline: Card[] = []

  errosCount = 0;
  points = 0;
  multplex = 1;

  selectedCard: Card | undefined;

  play = {
    text: '',
    isCorrect: false
  }

  constructor(
    private gameService: GameService,
    private activedRoute: ActivatedRoute,
    private matDialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  openHowToPlay(){
    this.matDialog.open(HowToPlayComponent, {
      width: '600px'
    })
  }

  shufleDeck(deck: Card[]) {
    return deck.sort(() => Math.random() - 0.5)
  }

  selectCard(card: Card) {
    this.selectedCard = card;
  }



  // TODO fix logic of positioning
  setCardOnTimeLine(index: number) {
    console.log(index);
    if (index === -1) {
      if (!this.gtDate(this.selectedCard!.date, this.timeline[0].date)) {
        this.succesPut(-1)
      }else{
        this.errorPut()
      }
    } else if (this.timeline[index + 1]) {
      if (this.gtDate(this.selectedCard!.date, this.timeline[index].date) && this.gtDate(this.timeline[index + 1].date, this.selectedCard!.date)) {
        this.succesPut(index)
      }else{
        this.errorPut()
      }
    } else if (this.gtDate(this.selectedCard!.date, this.timeline[index].date)) {
      this.succesPut(index)
    } else {
      console.log('erro')
      this.errorPut()
    }

  }

  succesPut(index: number) {
    if (index === -1) {
      this.timeline.unshift(this.selectedCard!)
    } else {
      this.timeline.splice(index + 1, 0, this.selectedCard!)
    }
    this.hand = this.hand.filter((card) => card.id !== this.selectedCard!.id)
    this.selectedCard = undefined;
    this.play = {
      isCorrect: true,
      text: "Parabéns, você acertou!"
    }
    this.points += 100 * this.multplex;
    this.multplex += 0.25;

    if (this.hand.length < 3 && this.deck.length > 0) {
      this.drawCard()
    }

  }

  errorPut() {
    this.play = {
      isCorrect: false,
      text: "Você errou! A carta foi removida da sua mão."
    }
    this.multplex = 1;
    this.errosCount++;
    this.hand = this.hand.filter((card) => card.id !== this.selectedCard!.id)
    this.selectedCard = undefined;
    if (this.hand.length < 3 && this.deck.length > 1) {
      this.drawCard()
    }
  }

  gtDate(date1: number, date2: number) {
    return +date1 > +date2;
    return new Date(date1).getTime() > new Date(date2).getTime()
  }

  drawCard() {
    if (this.deck.length > 0) {
      this.hand.push(this.deck.pop()!)
    }
  }

  gameOver(){
    return this.errosCount === 3;
  }

  winner(){
    return this.deck.length + this.hand.length === 0;
  }

  restartGame(){
    location.reload()
  }
}
