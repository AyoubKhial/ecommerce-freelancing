import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const API_URL = `${environment.server}api/users/`;

export interface IUser {
	firstName?: string;
	lastName?: string;
	username?: string;
	email?: string;
	password?: string;
	createdAt?: Date;
	updatedAt?: Date;
}
@Injectable({
	providedIn: 'root'
})
export class AuthService {

	constructor(private http: HttpClient) { }

	register(user: IUser): Observable<IUser> {
		return this.http.post<IUser>(API_URL + 'register', user);
	}

	login(user: IUser): Observable<any> {
		return this.http.post<any>(API_URL + 'login', user);
	}
}