import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Champion } from '../interface/champion.interface';

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    backendUrl = 'http://localhost:3000'; // Remplacez cela par l'URL de votre backend

    constructor(private http: HttpClient) { }

    fetchData(): Observable<any> {
        return this.http.get<any>(`${this.backendUrl}/api/data`);
    }
    getChampion(name: string): Observable<Champion> {
        return this.http.get<any>(`${this.backendUrl}/api/data`).pipe(
            map(data => data.champions.find((champion: Champion) => champion.name === name))
        );
    }
}
