import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import { ChampionsComponent } from './champions/champions.component';
import { ChampionDetailsComponent } from './champion-details/champion-details.component';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    NavbarComponent,
    ChampionsComponent,
    ChampionDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
