import { FormGroup } from '@angular/forms';

export function userNamePasswordEqualsValidator(pFormGroup: FormGroup) {
	// Nulish coalescing operator (??) => Returns its right-hand side operand when its left-hand side operand is Null ou Undefined
	const userName: string	=	pFormGroup.get('userName')?.value ?? '';
	const password: string	=	pFormGroup.get('password')?.value ?? '';

		// If both userName and Password are filled
	if (	userName.trim() + password.trim() &&
			// If both are equals and condition above is True
			userName.trim() == password.trim()
	) {
		//console.log('userNamePasswordEqualsValidator: True');
		return  {
			userNameEqualsPassword: true
		};
	} else  {
		//console.log('userNamePasswordEqualsValidator: False');
		return null;
	}
}
