import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AccueilService {

    backendUrl = 'http://localhost:3000'; // Remplacez cela par l'URL de votre backend

    constructor(private http: HttpClient) { }

    fetchData(): Observable<any> {
        return this.http.get<any>(`${this.backendUrl}/api/data`);
    }
}
