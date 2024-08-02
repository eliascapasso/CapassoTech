import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { getLang } from 'src/app/helpers/helper';

@Component({
  selector: 'app-ejemplos',
  templateUrl: './ejemplos.component.html',
  styleUrls: ['./ejemplos.component.scss']
})
export class EjemplosComponent {
  constructor(private translate: TranslateService) {
    translate.setDefaultLang(getLang(translate.getBrowserLang()!));
    translate.use(getLang(translate.getBrowserLang()));
  }
}
