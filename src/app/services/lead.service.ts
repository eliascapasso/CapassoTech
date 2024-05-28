import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Lead } from '../model/lead.model';

const baseURL = "";

@Injectable()
export class LeadService {

    constructor(private http: HttpClient, private angularFireDatabase: AngularFireDatabase) { }

    getLead(idLead: string) {
        return this.angularFireDatabase
            .object<Lead>(`leads/${idLead}`)
            .valueChanges();
    }

    getLeads() {
        return this.angularFireDatabase
            .object<Lead[]>(`leads`)
            .valueChanges();
    }

    saveLead(lead: Lead): Promise<string> {
        return this.angularFireDatabase
            .list(`leads`)
            .set(lead.id!, lead)
            .then(() => lead.id!); // Devuelve el ID después de guardar
    }

    private handleError<T>(operation = "operation", result?: T) {
        return (error: any): Observable<T> => {
            console.error(error); // log to console instead
            this.log(`${operation} failed: ${error.message}`);
            // Let the app keep running by returning an empty result.
            return of(result as T);
        };
    }

    private log(message: string) {
        console.log("LeadService: " + message);
    }
}
