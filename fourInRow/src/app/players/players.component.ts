import { Component, OnInit } from '@angular/core';
import {MetaDateService} from "../meta-date.service";

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {

  constructor(public metaDateService : MetaDateService ) { }

  ngOnInit() {
  }

}
