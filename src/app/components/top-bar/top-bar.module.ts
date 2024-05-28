import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopBarRoutingModule } from './top-bar-routing.module';
import { TopBarComponent } from './top-bar.component';

@NgModule({
    imports: [
        CommonModule,
        TopBarRoutingModule
    ],
    declarations: [TopBarComponent],
    exports: [TopBarComponent]
})
export class TopBarModule { }
