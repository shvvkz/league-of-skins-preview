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

  constructor(private dataService: AccueilService) { }

  ngOnInit(): void {
    this.dataService.fetchData().subscribe(data => {
      this.champions = data.champions;
    });
  }

  showSkins(champion: any) {
    this.selectedChampion = champion;
  }

  getSkinUrl(skin: String): string {
    return Object.values(skin)[0];
  }
}
