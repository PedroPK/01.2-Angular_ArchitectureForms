import { Component, OnInit }					from '@angular/core';
import { FormBuilder, FormGroup, Validators }	from '@angular/forms';
import { Router }								from '@angular/router';

import { User }								from './user';
import { lowercaseValidator }				from './validators/lowercase-validator';
import { ExistingUserService }				from './services/existing-user.service';
import { userNamePasswordEqualsValidator }	from './validators/username-password-equals-validator';
import { CreateUserService } from './services/create-user.service';

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
		private existingUserService: 	ExistingUserService,
		private router:					Router
	) {
		//console.log("UserRegistrationComponent >> Constructor()");
	}

	// Will execute after Constructor and Injection of all attributes
	ngOnInit(): void {
		//console.log("UserRegistrationComponent >> ngOnInit()");

		this.newUserForm	=	this.formBuilder.group(
			{
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
					[
						Validators.required,
						lowercaseValidator
					],
					[
							this.existingUserService.verifyExistingUser()
					],
				],
				password: [
					'',
					[
						Validators.required,
						Validators.minLength(8)
					]
				]
			},
			{
				validators: [
					userNamePasswordEqualsValidator
				]
			}
		);
	}

	register() {
		//console.log('UserRegistrationComponent >> register() executed');

		//console.log('this.newUserForm.valid = ' + this.newUserForm.valid);

		if ( this.newUserForm.valid ) {
			const newUser		=	this.newUserForm.getRawValue() as User;

			//console.log(newUser);

			this.createUserService.createUser(newUser).subscribe({
				next: () => {
					//console.log('UserRegistrationComponent: next() executed')
					this.router.navigate(['']);
				},
				error: (e) => {
					//console.log('UserRegistrationComponent: error() executed')
					console.log(e);
				}
			});
		} else {
			// Find which field are not Valid
			const invalid	= [];
			const fields	=	this.newUserForm.controls;
			for ( const field in fields ) {
				if ( fields[field].invalid ) {
					invalid.push(field);
				}
			}

			//console.log('Invalid Form Fields: ' + invalid);
		}
	}

}
