import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { AuthService } from './../../shared/auth.service';
import { Card } from './../../shared/models/card.model';
import { Deck } from 'src/app/shared/models/deck.model';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import {tap} from "rxjs/operators"

@Injectable({
  providedIn: 'root'
})
export class DeckService {

  professor = this.authService.professor;

  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) { }

  getProfessorDecks(){
    const params = new HttpParams()
      .append('professorId', this.professor!.id);
    return this.http.get<Deck[]>(environment.endPointHost + 'deck', {params: params});
  }

  addDeck(deck: Deck){
    const params = new HttpParams()
      .append('professorId', this.professor!.id);
    return this.http.post(environment.endPointHost + 'deck', deck,  {params: params});
  }

  getAvailableCardsToDeck(deckId: number){
    const params = new HttpParams()
      .append('professorId', this.professor!.id);
    return this.http.get<Card[]>(environment.endPointHost + 'deck/card/available/' + deckId, {params: params})
  }

  addCardToDeck(deckId: number, cardId: number){
    const params = new HttpParams()
      .append('professorId', this.professor!.id);
    return this.http.post<any>(environment.endPointHost + 'deck/card/' + deckId, { card: cardId}, {params: params})
  }

  removeCardFromDeck(deckId: number, cardId: number){
    const params = new HttpParams()
      .append('professorId', this.professor!.id)
      .append('cardId', cardId)
    return this.http.delete<any>(environment.endPointHost + 'deck/card/' + deckId, {params: params})
  }

}
