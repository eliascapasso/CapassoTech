import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { TopBarModule } from '../top-bar/top-bar.module';
import { FooterModule } from '../footer/footer.module';

@NgModule({
    imports: [
        CommonModule,
        HomeRoutingModule,
        TopBarModule,
        FooterModule
    ],
    declarations: [HomeComponent],
    exports: [HomeComponent]
})
export class HomeModule { }
