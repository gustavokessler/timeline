import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-game-login',
  templateUrl: './game-login.component.html',
  styleUrls: ['./game-login.component.scss']
})
export class GameLoginComponent implements OnInit {

  gameID: string = '';

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  enterGame(){
    this.router.navigateByUrl('/game?code=' + this.gameID);
  }
}
