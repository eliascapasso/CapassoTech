import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EjemplosComponent } from './ejemplos.component';

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: EjemplosComponent }
    ])],
    exports: [RouterModule]
})
export class EjemplosRoutingModule { }
