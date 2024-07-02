import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { WebPagesComponent } from './webpages.component';

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: WebPagesComponent }
    ])],
    exports: [RouterModule]
})
export class WebPagesRoutingModule { }
