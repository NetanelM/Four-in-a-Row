import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameComponent } from './game/game.component';
import { PlayersComponent } from './players/players.component';
import { MetaDateService } from "./meta-date.service";
import { PopupWinsComponent } from './popup-wins/popup-wins.component';
@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    PlayersComponent,
    PopupWinsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [MetaDateService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
