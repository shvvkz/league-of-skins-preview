import { Component, HostListener, ElementRef } from '@angular/core';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent {
  isScrolled: boolean = false;
  scrolledPosition: number = 0;
  previousScrollPosition: number = 0;
  scrollOffset: number = 200; // Décalage pour commencer l'animation avant que l'élément soit pleinement visible
  scrollDirection: number = 1; // 1 pour défilement vers la droite, -1 pour défilement vers la gauche

  constructor(private elRef: ElementRef) {}

  @HostListener("window:scroll", [])
  onWindowScroll() {
    this.checkScroll();
  }

  checkScroll() {
    const startBand = this.elRef.nativeElement.querySelector('.StartBand');
    const rect = startBand.getBoundingClientRect();
    const currentScrollPosition = window.scrollY;

    if (rect.top < window.innerHeight - this.scrollOffset) {
      this.isScrolled = true;

      // Vérifie si l'utilisateur est en train de faire défiler vers le bas
      if (currentScrollPosition > this.previousScrollPosition) {
        // Mise à jour de la position de défilement
        this.scrolledPosition += 10 * this.scrollDirection;

        // Changement de direction si la limite est atteinte
        if (this.scrolledPosition >= 700 || this.scrolledPosition <= 0) {
          this.scrollDirection *= -1;
        }

        // Correction pour éviter que la position de défilement dépasse les limites
        if (this.scrolledPosition > 700) {
          this.scrolledPosition = 700;
        } else if (this.scrolledPosition < 0) {
          this.scrolledPosition = 0;
        }
      }

      this.previousScrollPosition = currentScrollPosition;
    } else {
      this.isScrolled = false;
    }
  }
}
