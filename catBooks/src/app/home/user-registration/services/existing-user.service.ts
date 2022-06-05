import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { first, map, switchMap } from 'rxjs';

import { CreateUserService, URL_BASE } from './create-user.service';

@Injectable({
	providedIn: 'root',
})
export class ExistingUserService {
	constructor(
		private httpClient: HttpClient,
		private createUserService: CreateUserService
	) {}

	verifyExistingUser() {
		console.log('ExistingUserService >> verifyExistingUser()');

		// Angular can trace each keyboard typing through Observable's
		// We may have two Observables. One looking the the keyboard typing, and another to look for the Server request
		// So we need to convert typing to requests.

		// Replace the Keyboard typing by Service Requests.

		return (control: AbstractControl) => {
			return control.valueChanges.pipe(
				switchMap((nomeUsuario) =>
					this.createUserService.verifyExistingUser(nomeUsuario)
				),
				map((isUserNameTaken) =>
					isUserNameTaken ? { isUserNameTaken: true } : null
				),
				first()
			);
		};

		/*
		return (control: AbstractControl) => {
			// Angular can trace each keyboard typing through Observable's
			// We may have two Observables. One looking the the keyboard typing, and another to look for the Server request
			// So we need to convert typing to requests.

			// Replace the Keyboard typing by Service Requests.
			control.valueChanges.pipe(
				// 1st Operator. Its going ro return True or False
				switchMap(
					(pUserName) => 	// Keyboard type
						this.createUserService.verifyExistingUser(pUserName)	// Service Request

				),
				// 2nd Operator
				map(
					// True or False
					(isUserNameTaken) =>
						isUserNameTaken ? {isUserNameTaken: true} : null
				),
				// Angular will only fill the Errors object if the Observable has done its request, and the Observable's flow is closed
				first()
			);
		}
		*/
	}
}
