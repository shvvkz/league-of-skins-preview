// champions.component.ts

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Champion } from '../interface/champion.interface'; // Importez votre interface Champion ici
import { ApiService } from '../service/api.service'; // Importez votre service ici

@Component({
  selector: 'app-champions',
  templateUrl: './champions.component.html',
  styleUrls: ['./champions.component.css']
})
export class ChampionsComponent implements OnInit {

  champions: Champion[] = []; // Supposons que votre interface s'appelle Champion
  filteredChampions: Champion[] = []; // Tableau des champions filtrés

  constructor(private router: Router, private apiService: ApiService) { }

  ngOnInit(): void {
    // recuperer les champions depuis le backend
    this.apiService.fetchData().subscribe(data => {
      this.champions = data.champions;

      // Préchargement des images
      this.champions.forEach(champion => {
        this.preloadImage(champion.icon);
      });
      this.filteredChampions = this.champions; // Initialisez également les champions filtrés avec tous les champions au départ
    });
  }

  navigateToChampion(championName: string): void {
    this.router.navigate(['/champions', championName]);
  }

  searchChampion(event: any): void {

  const searchTermLowerCase: string = event.target.value.toLowerCase();;
  if (searchTermLowerCase.trim() === '') {
    // Si le terme de recherche est vide, afficher tous les champions
    this.filteredChampions = this.champions;
    }
  else {
    // Sinon, filtrer les champions en fonction du terme de recherche
    this.filteredChampions = this.champions.filter(champion =>
      champion.name.toLowerCase().includes(searchTermLowerCase) ||
      champion.tags.some(tag => tag.toLowerCase().includes(searchTermLowerCase))
    );
    }
  }
  preloadImage(url: string): void {
    const img = new Image();
    img.src = url;
  }
  detailsChampion(name: string): void {
    this.router.navigate(['/champions', name]);
  }

}
