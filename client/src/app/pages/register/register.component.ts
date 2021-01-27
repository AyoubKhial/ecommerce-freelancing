import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService, IUser } from '../../_services/auth.service';

@Component({
	selector: 'app-register',
	templateUrl: './register.component.html',
	styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

	public user: IUser = {};
	public errorMessage: string;

	constructor(private authService: AuthService, private router: Router) { }

	ngOnInit(): void {
	}

	onSubmit(): void {
		if (!this.user.firstName) this.errorMessage = 'The first name field is required';
		if (!this.user.lastName) this.errorMessage = 'The last name field is required';
		if (!this.user.username) this.errorMessage = 'The user name field is required';
		if (!this.user.email) this.errorMessage = 'The email field is required';
		if (!this.user.password) this.errorMessage = 'The password field is required';
		this.authService.register(this.user).subscribe(
			res => this.router.navigateByUrl('login'),
			err => this.errorMessage = 'username or email already exists.'
		);
	}
}