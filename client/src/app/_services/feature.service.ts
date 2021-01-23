import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

export interface IFeature {
    id: number;
    name: string;
    sequenceNumber: number;
    createdAt: Date;
    updatedAt: Date;
};

const API_URL = `${environment.server}api/features/`;

@Injectable({
    providedIn: 'root'
})
export class FeatureService {

    constructor(private http: HttpClient) { }

    find(): Observable<IFeature[]> {
        return this.http.get<IFeature[]>(API_URL);
    }

    create(data: Partial<IFeature>): Observable<IFeature> {
        return this.http.post<IFeature>(API_URL, data);
    }

    update(id: number, data: Partial<IFeature>): Observable<{ message: string }> {
        return this.http.put<{ message: string }>(`${API_URL}${id}`, data);
    }

    delete(id: number): Observable<{ message: string }> {
        return this.http.delete<{ message: string }>(`${API_URL}${id}`);
    }
}
