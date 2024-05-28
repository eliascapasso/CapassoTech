import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TopBarComponent } from './top-bar.component';

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: TopBarComponent }
    ])],
    exports: [RouterModule]
})
export class TopBarRoutingModule { }
