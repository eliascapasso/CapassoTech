import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopBarRoutingModule } from './top-bar-routing.module';
import { TopBarComponent } from './top-bar.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
    imports: [
        CommonModule,
        TopBarRoutingModule,
        TranslateModule
    ],
    declarations: [TopBarComponent],
    exports: [TopBarComponent]
})
export class TopBarModule { }
