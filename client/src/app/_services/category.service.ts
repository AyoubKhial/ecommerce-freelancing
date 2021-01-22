import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface ICategory {
    id: number;
    name: string;
    priceRatio: number;
    sequenceNumber: number;
    keywords: string[];
    label: string;
    url: string;
    isCombine: number;
    explanation: string;
    createdAt: Date;
    updatedAt: Date;
};

const API_URL = "http://localhost:3000/api/categories/";

@Injectable({
    providedIn: 'root'
})
export class CategoryService {

    constructor(private http: HttpClient) { }

    find(): Observable<ICategory[]> {
        return this.http.get<ICategory[]>(API_URL);
    }

    create(data: Partial<ICategory>): Observable<ICategory> {
        return this.http.post<ICategory>(API_URL, data);
    }

    update(id: number, data: Partial<ICategory>): Observable<{ message: string }> {
        return this.http.put<{ message: string }>(`${API_URL}${id}`, data);
    }

    delete(id: number): Observable<{ message: string }> {
        return this.http.delete<{ message: string }>(`${API_URL}${id}`);
    }
}
