import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { User }					from './user';
import { CreateUserService }	from './services/create-user.service';
import { lowercaseValidator }	from './validators/lowercase-validator';
import { ExistingUserService } from './services/existing-user.service';

@Component({
	selector: 'app-user-registration',
	templateUrl: './user-registration.component.html',
	styleUrls: ['./user-registration.component.css'],
})
export class UserRegistrationComponent implements OnInit {

	newUserForm!:	FormGroup;

	constructor(
		private formBuilder:			FormBuilder,
		private createUserService:		CreateUserService,
		private existingUserService: 	ExistingUserService
	) {}

	// Will execute after Constructor and Injection of all attributes
	ngOnInit(): void {
		this.newUserForm	=	this.formBuilder.group({
			email:
				[
					'',
					[
						Validators.required,
						Validators.email
					]
				],
			fullName: [
				'',
				[
					Validators.required,
					Validators.minLength(6)
				]
			],
			userName: [
				'',
				[lowercaseValidator],
				[this.existingUserService.verifyExistingUser()],
			  ],
			password: [
				'',
				Validators.required,
				Validators.minLength(8)
			]
		});
	}

	register() {
		const newUser		=	this.newUserForm.getRawValue() as User;
		console.log(newUser);
	}

}
