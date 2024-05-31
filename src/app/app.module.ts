import { NgModule } from '@angular/core';
import { CommonModule, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { LeadService } from './services/lead.service';
import { AngularFireModule } from '@angular/fire/compat';
import { provideDatabase, getDatabase } from '@angular/fire/database';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        AppRoutingModule,
        BrowserModule.withServerTransition({ appId: 'serverApp' }),
        CommonModule,
        FormsModule,
        HttpClientModule,
        AngularFireModule.initializeApp(environment.firebaseConfig),
        provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
        provideDatabase(() => getDatabase()),
    ],
    providers: [
        { provide: LocationStrategy, useClass: PathLocationStrategy },
        LeadService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
