import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { EjemplosComponent } from './components/ejemplos/ejemplos.component';
import { WebPagesComponent } from './components/webpages/webpages.component';

@NgModule({
    imports: [
        RouterModule.forRoot([
    {
        path: '', component: HomeComponent,
        children: [
            { path: '', loadChildren: () => import('./components/home/home.module').then(m => m.HomeModule) }
        ]
    },
    {
        path: 'contact', component: ContactComponent,
        children: [
            { path: '', loadChildren: () => import('./components/contact/contact.module').then(m => m.ContactModule) }
        ]
    },
    {
        path: 'web-pages', component: WebPagesComponent,
        children: [
            { path: '', loadChildren: () => import('./components/webpages/webpages.module').then(m => m.WebPagesModule) }
        ]
    },
    {
        path: 'examples', component: EjemplosComponent,
        children: [
            { path: '', loadChildren: () => import('./components/ejemplos/ejemplos.module').then(m => m.EjemplosModule) }
        ]
    },
    { path: '**', redirectTo: '' },
], { useHash: false, initialNavigation: 'enabledBlocking' })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
