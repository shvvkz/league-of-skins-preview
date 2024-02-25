import { Component, OnInit } from '@angular/core';
import { AccueilService } from './accueil.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  champions: any[] = [];
  selectedChampion: any = null;
  championImages: string[] = [];

  constructor(private dataService: AccueilService) { }

  ngOnInit(): void {
    this.dataService.fetchData().subscribe(data => {
      this.champions = data.champions;

      // Préchargement des images
      this.champions.forEach(champion => {
        this.preloadImage(champion.icon);
      });
    });
  }

  preloadImage(url: string): void {
    const img = new Image();
    img.src = url;
    this.championImages.push(url); // Stockage de l'URL dans le tableau pour référence ultérieure
  }

  showSkins(champion: any) {
    this.selectedChampion = champion;
  }

  getSkinUrl(skin: String): string {
    return Object.values(skin)[0];
  }
}
