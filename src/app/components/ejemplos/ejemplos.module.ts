import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EjemplosComponent } from './ejemplos.component';
import { EjemplosRoutingModule } from './ejemplos-routing.module';
import { FooterModule } from '../footer/footer.module';
import { TopBarModule } from '../top-bar/top-bar.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
    imports: [
        CommonModule,
        EjemplosRoutingModule,
        TopBarModule,
        FooterModule,
        TranslateModule
    ],
    declarations: [EjemplosComponent],
    exports: [EjemplosComponent]
})
export class EjemplosModule { }
