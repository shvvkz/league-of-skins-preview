import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../service/api.service'; // Importez votre service champion ici
import { Champion } from '../interface/champion.interface'; // Importez votre interface champion ici

@Component({
  selector: 'app-champion-details',
  templateUrl: './champion-details.component.html',
  styleUrls: ['./champion-details.component.css']
})
export class ChampionDetailsComponent implements OnInit {

  championName: string;
  champion: Champion = {
    name: '',
    title: '',
    tags: [],
    icon: '',
    description: '',
    skins: []
  };

  constructor(private route: ActivatedRoute, private apiService: ApiService) {
    this.championName = '';
  }

  ngOnInit(): void {
    this.championName = this.route.snapshot.params['name'];
    console.log(this.championName)
    this.apiService.getChampion(this.championName).subscribe(champion => {
      this.champion = champion;
    });
  }

  getBaseSkinUrl(champion: Champion): string {
    // Vérifier si le champion a des skins et s'il y a au moins un skin
    if (champion.skins && champion.skins.length > 0) {
      // Obtenir le premier skin (le skin de base)
      const baseSkin = champion.skins[0];
      // Récupérer la clé (le nom du skin) et la valeur (l'URL du skin)
      const baseSkinName = Object.keys(baseSkin)[0];
      const baseSkinUrl = baseSkin[baseSkinName];
      return baseSkinUrl;
    }
    // Si aucun skin de base n'est trouvé, retourner une chaîne vide
    return '';
  }
  
}