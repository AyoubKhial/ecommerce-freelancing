import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

export interface IVariant {
    id: number;
    name: string;
    values: string[];
    createdAt: Date;
    updatedAt: Date;
};

const API_URL = `${environment.server}api/variants/`;

@Injectable({
    providedIn: 'root'
})
export class VariantService {

    constructor(private http: HttpClient) { }

    find(): Observable<IVariant[]> {
        return this.http.get<IVariant[]>(API_URL);
    }

    create(data: Partial<IVariant>): Observable<IVariant> {
        return this.http.post<IVariant>(API_URL, data);
    }

    update(id: number, data: Partial<IVariant>): Observable<{ message: string }> {
        return this.http.put<{ message: string }>(`${API_URL}${id}`, data);
    }

    delete(id: number): Observable<{ message: string }> {
        return this.http.delete<{ message: string }>(`${API_URL}${id}`);
    }
}
