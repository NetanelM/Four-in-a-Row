import { Component, OnInit } from '@angular/core';
import {MetaDateService} from "../meta-date.service";

@Component({
  selector: 'app-popup-wins',
  templateUrl: './popup-wins.component.html',
  styleUrls: ['./popup-wins.component.css']
})
export class PopupWinsComponent implements OnInit {

  constructor(public metaDateService : MetaDateService) { }

  ngOnInit() {
  }


  playAgain() {
    this.metaDateService.popupToggle = false;
    this.metaDateService.newGame();
  }

}
