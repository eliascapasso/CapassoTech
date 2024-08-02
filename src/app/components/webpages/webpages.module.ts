import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebPagesComponent } from './webpages.component';
import { WebPagesRoutingModule } from './webpages-routing.module';
import { FooterModule } from '../footer/footer.module';
import { TopBarModule } from '../top-bar/top-bar.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
    imports: [
        CommonModule,
        WebPagesRoutingModule,
        TopBarModule,
        FooterModule,
        TranslateModule
    ],
    declarations: [WebPagesComponent],
    exports: [WebPagesComponent]
})
export class WebPagesModule { }
