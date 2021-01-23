import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

export interface IBrand {
    id: number;
    name: string;
    sequenceNumber: number;
    keywords: string[];
    label: string;
    url: string;
    logo: string;
    explanation: string;
    createdAt: Date;
    updatedAt: Date;
};

const API_URL = `${environment.server}api/brands/`;

@Injectable({
    providedIn: 'root'
})
export class BrandService {

    constructor(private http: HttpClient) { }

    create(brand: Partial<IBrand>, file: File): Observable<any> {
        const formData = new FormData();
        formData.append('file', file);
        formData.append('data', JSON.stringify(brand));
        const header = new HttpHeaders();
        const params = new HttpParams();
        const options = {
            params,
            reportProgress: true,
            headers: header
        };
        const req = new HttpRequest('POST', API_URL, formData, options);
        return this.http.request(req);
    }

    find(): Observable<IBrand[]> {
        return this.http.get<IBrand[]>(API_URL);
    }
}
