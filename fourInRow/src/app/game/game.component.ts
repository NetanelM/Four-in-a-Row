import { Component, OnInit } from '@angular/core';
import {MetaDateService} from "../meta-date.service";

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {


  constructor(public metaDateService:MetaDateService) {

  }

  ngOnInit() {

  }

  checkLine(a, b, c, d) {
    // Check first cell non-zero and all cells match
    return ((a != 0) && (a == b) && (a == c) && (a == d));
  }


  checkWinner(dataGame, columnNumber) {
    this.metaDateService.player = this.metaDateService.player === 1 ? 2 : 1;

    //selecting a point according to the player
    this.placePoint(columnNumber);

    // Check down
    for (let r = 0; r < 3; r++)
      for (let c = 0; c < 7; c++)
        if (this.checkLine(dataGame[r][c], dataGame[r + 1][c], dataGame[r + 2][c], dataGame[r + 3][c]))
          return this.winnerIs(dataGame[r][c]);

    // Check right
    for (let r = 0; r < 6; r++)
      for (let c = 0; c < 4; c++)
        if (this.checkLine(dataGame[r][c], dataGame[r][c + 1], dataGame[r][c + 2], dataGame[r][c + 3]))
          return this.winnerIs(dataGame[r][c]);

    // Check down-right
    for (let r = 0; r < 3; r++)
      for (let c = 0; c < 4; c++)
        if (this.checkLine(dataGame[r][c], dataGame[r + 1][c + 1], dataGame[r + 2][c + 2], dataGame[r + 3][c + 3]))
          return this.winnerIs(dataGame[r][c]);

    // Check down-left
    for (let r = 3; r < 6; r++)
      for (let c = 0; c < 4; c++)
        if (this.checkLine(dataGame[r][c], dataGame[r - 1][c + 1], dataGame[r - 2][c + 2], dataGame[r - 3][c + 3]))
          return this.winnerIs(dataGame[r][c]);

    return 0;
  }

  winnerIs(playerNumber) {
    this.metaDateService.player = playerNumber;
    this.metaDateService.popupToggle = true;
  }

  placePoint(index) {
    for (let r = 5; r >= 0; r--)
      for (let c = 0; c < 7; c++)
        if (c === index && this.metaDateService.dataGame[r][c] === 0) {
          this.metaDateService.dataGame[r][c] = this.metaDateService.player;
          return;
        }
  }


}
