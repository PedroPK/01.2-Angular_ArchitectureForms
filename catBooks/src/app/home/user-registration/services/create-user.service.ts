import { HttpClient }	from '@angular/common/http';
import { Injectable }	from '@angular/core';
import { Observable }	from 'rxjs';
import { User } from '../user';

export const URL_BASE = 'http://localhost:3000';

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
				URL_BASE + '/user/signup',
				newUser
		);
	}

	verifyExistingUser(pUserName: string): Observable<any> {
		//console.log( 'CreateUserService >> verifyExistingUser()'  );

		const url = URL_BASE + `/user/exists/${pUserName}`;
		//console.log('URL: ' + url);

		return this.httpClient.get(url);
	}

}
