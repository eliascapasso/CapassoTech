import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { getLang } from 'src/app/helpers/helper';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  constructor(private translate: TranslateService) {
    translate.setDefaultLang(getLang(translate.getBrowserLang()!));
    translate.use(getLang(translate.getBrowserLang()));
  }
}
