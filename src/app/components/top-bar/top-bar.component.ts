import { Component, OnInit, AfterViewInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { getLang } from 'src/app/helpers/helper';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit, AfterViewInit {
  constructor(private translate: TranslateService) {
    translate.setDefaultLang(getLang(translate.getBrowserLang()!));
    translate.use(getLang(translate.getBrowserLang()));
  }

  ngOnInit(): void {
    // Aquí puedes colocar cualquier lógica que necesite ejecutarse al inicializar el componente
  }

  ngAfterViewInit(): void {
    // Ejecutar el código después de que la vista se haya inicializado
    this.initScripts();
  }

  private initScripts(): void {
    const select = (el: string, all: boolean = false) => {
      el = el.trim();
      if (all) {
        return Array.from(document.querySelectorAll(el)) as HTMLElement[];
      } else {
        return document.querySelector(el) as HTMLElement;
      }
    };

    const on = (type: string, el: string, listener: EventListenerOrEventListenerObject, all: boolean = false) => {
      let selectEl = select(el, all);
      if (selectEl) {
        if (all) {
          (selectEl as HTMLElement[]).forEach(e => e.addEventListener(type, listener));
        } else {
          (selectEl as HTMLElement).addEventListener(type, listener);
        }
      }
    };

    /**
     * Mobile nav toggle
     */
    on('click', '.mobile-nav-toggle', function (e) {
      const navbar: any = select('#navbar');
      if (navbar) {
        navbar.classList.toggle('navbar-mobile');
      }
    });

    /**
     * Mobile nav dropdowns activate
     */
    on('click', '.navbar .dropdown > a', function (e) {
      const navbar: any = select('#navbar');
      if (navbar && navbar.classList.contains('navbar-mobile')) {
        e.preventDefault();
        const dropdownMenu = (e.target as HTMLElement).nextElementSibling as HTMLElement;
        if (dropdownMenu) {
          dropdownMenu.classList.toggle('dropdown-active');
        }
      }
    }, true);

    /**
     * Scroll with offset on links with a class name .scrollto
     */
    on('click', '.scrollto', function (this: HTMLAnchorElement, e) {
      const target: any = select(this.hash);
      if (target) {
        e.preventDefault();
        const navbar: any = select('#navbar');
        if (navbar && navbar.classList.contains('navbar-mobile')) {
          navbar.classList.remove('navbar-mobile');
        }
        // Obtener la posición del elemento
        const elementPos: any = target.offsetTop;
        // Desplazar al elemento
        window.scrollTo({
          top: elementPos,
          behavior: 'smooth' // Opcional: hacer el desplazamiento suave
        });
      }
    }, true);

    /**
     * Scroll with offset on page load with hash links in the url
     */
    window.addEventListener('load', () => {
      if (window.location.hash) {
        const target: any = select(window.location.hash);
        if (target) {
          const elementPos = target.offsetTop;
          window.scrollTo({
            top: elementPos,
            behavior: 'smooth'
          });
        }
      }
    });
  }
}