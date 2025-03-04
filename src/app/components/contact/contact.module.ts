import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact.component';
import { ContactRoutingModule } from './contact-routing.module';
import { FooterModule } from '../footer/footer.module';
import { TopBarModule } from '../top-bar/top-bar.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
    imports: [
        CommonModule,
        ContactRoutingModule,
        TopBarModule,
        FooterModule,
        TranslateModule
    ],
    declarations: [ContactComponent],
    exports: [ContactComponent]
})
export class ContactModule { }
