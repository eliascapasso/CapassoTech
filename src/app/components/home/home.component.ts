import { Component, ElementRef, HostListener, Renderer2 } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { getLang } from 'src/app/helpers/helper';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(private translate: TranslateService, public router: Router, private el: ElementRef, private renderer: Renderer2) {
    translate.setDefaultLang(getLang(translate.getBrowserLang()!));
    translate.use(getLang(translate.getBrowserLang()));
  }

  goToPage(url: string) {
    this.router.navigateByUrl(url);
  }

  // Método para comprobar si un elemento está en el viewport
  private isElementInViewport(element: HTMLElement): boolean {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  // Método para mostrar las tarjetas visibles
  private showVisibleCards(): void {
    const cards = this.el.nativeElement.querySelectorAll('.card-timeline.timeline-inner');
    cards.forEach((card: HTMLElement) => {
      if (this.isElementInViewport(card) && !card.classList.contains('visible')) {
        this.renderer.addClass(card, 'visible');
      }
    });
  }

  // Detectar eventos de scroll y resize
  @HostListener('window:scroll')
  @HostListener('window:resize')
  onWindowEvent(): void {
    this.showVisibleCards();
  }

  // Inicialización
  ngAfterViewInit(): void {
    this.showVisibleCards();
  }
}
