import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CreateUserService } from './create-user.service';
import { User } from './user';

@Component({
	selector: 'app-user-registration',
	templateUrl: './user-registration.component.html',
	styleUrls: ['./user-registration.component.css'],
})
export class UserRegistrationComponent implements OnInit {

	newUserForm!:	FormGroup;

	constructor(
		private formBuilder:	FormBuilder,
		private service:		CreateUserService
	) {}

	// Will execute after Constructor and Injection of all attributes
	ngOnInit(): void {
		this.newUserForm	=	this.formBuilder.group({
			email: [''],
			fullName: [''],
			userName: [''],
			password: ['']
		});
	}

	register() {
		const newUser		=	this.newUserForm.getRawValue() as User;
		console.log(newUser);
	}
}
