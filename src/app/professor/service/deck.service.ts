import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { AuthService } from './../../shared/auth.service';
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

}
