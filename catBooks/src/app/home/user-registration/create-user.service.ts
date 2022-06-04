import { HttpClient }	from '@angular/common/http';
import { Injectable }	from '@angular/core';
import { Observable }	from 'rxjs';

import { User }			from './user';

@Injectable({
	providedIn: 'root',
})
export class CreateUserService {
	constructor(
		private httpClient:		HttpClient
	) {}

	createUser(newUser:		User): Observable<any> {
		return this.httpClient
			.post(
				'http://localhost:3000/user/signup',
				newUser
		);
	}
}
