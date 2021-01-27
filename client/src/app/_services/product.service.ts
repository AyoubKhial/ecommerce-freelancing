import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const API_URL = `${environment.server}api/products/`;

@Injectable({
    providedIn: 'root'
})
export class ProductService {

    constructor(private http: HttpClient) { }

    find(): Observable<any[]> {
        return this.http.get<any[]>(API_URL);
    }

    create(product: any, file?: File, index?: number): Observable<any> {
        if (file) {
            const formData = new FormData();
            formData.append('file', file);
            formData.append('data', JSON.stringify({ ...product, index }));
            return this.http.post<any>(API_URL, formData);
        } else {
            return this.http.post<any>(API_URL, product);
        }
        
    }

    update(id: number, data: Partial<any>): Observable<{ message: string }> {
        return this.http.put<{ message: string }>(`${API_URL}${id}`, data);
    }

    delete(id: number): Observable<{ message: string }> {
        return this.http.delete<{ message: string }>(`${API_URL}${id}`);
    }
}
