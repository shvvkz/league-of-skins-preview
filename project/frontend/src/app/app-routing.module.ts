import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { ChampionsComponent } from './champions/champions.component';
import { ChampionDetailsComponent } from './champion-details/champion-details.component';

const routes: Routes = [
  { path: '', component: AccueilComponent },
  { path: 'champions', component: ChampionsComponent},
  { path: 'champions/:name', component: ChampionDetailsComponent } // Route pour la page de détails du champion

  // Autres routes de votre application
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
