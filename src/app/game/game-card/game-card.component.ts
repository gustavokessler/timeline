import { Component, Input, OnInit } from '@angular/core';
import { Card } from 'src/app/shared/models/card.model';

@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.scss']
})
export class GameCardComponent implements OnInit {

  @Input() card: Card | undefined
  @Input() hand: boolean = false;
  @Input() isSelected: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
