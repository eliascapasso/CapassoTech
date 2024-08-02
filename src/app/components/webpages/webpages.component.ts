import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { getLang } from 'src/app/helpers/helper';

@Component({
  selector: 'app-webpages',
  templateUrl: './webpages.component.html',
  styleUrls: ['./webpages.component.scss']
})
export class WebPagesComponent {
  constructor(private translate: TranslateService) {
    translate.setDefaultLang(getLang(translate.getBrowserLang()!));
    translate.use(getLang(translate.getBrowserLang()));
  }
}
