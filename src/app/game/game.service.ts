import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Game } from "src/app/shared/models/game.model"
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(
    private http: HttpClient
  ) { }

  getGame(uid: string){
    return this.http.get<Game>(environment.endPointHost + 'game/' + uid);
  }

}
