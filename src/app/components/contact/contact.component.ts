import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { getLang } from 'src/app/helpers/helper';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  constructor(private translate: TranslateService) {
    translate.setDefaultLang(getLang(translate.getBrowserLang()!));
    translate.use(getLang(translate.getBrowserLang()));
  }
}
