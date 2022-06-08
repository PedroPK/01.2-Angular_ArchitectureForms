import { HttpClient }	from '@angular/common/http';
import { Injectable }	from '@angular/core';
import { Observable }	from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../user';

const API_URL = environment.apiUrl;

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
				`${API_URL}/user/signup`,
				newUser
		);
	}

	verifyExistingUser(pUserName: string): Observable<any> {
		//console.log( 'CreateUserService >> verifyExistingUser()'  );

		const url = `${API_URL}/user/exists/${pUserName}`;
		//console.log('URL: ' + url);

		return this.httpClient.get(url);
	}

}
