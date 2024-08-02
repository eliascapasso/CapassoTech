import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { getLang } from 'src/app/helpers/helper';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(private translate: TranslateService) {
    translate.setDefaultLang(getLang(translate.getBrowserLang()!));
    translate.use(getLang(translate.getBrowserLang()));
  }
}
