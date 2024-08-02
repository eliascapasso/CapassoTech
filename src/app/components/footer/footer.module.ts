import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterRoutingModule } from './footer-routing.module';
import { FooterComponent } from './footer.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
    imports: [
        CommonModule,
        FooterRoutingModule,
        TranslateModule
    ],
    declarations: [FooterComponent],
    exports: [FooterComponent]
})
export class FooterModule { }