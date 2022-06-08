import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { UserAuthService } from './user/user-auth.service';
import { environment } from 'src/environments/environment';

const API_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

    constructor(
        private httpClient:   		HttpClient,
		private userAuthService:	UserAuthService
    ) { }

    authenticate(pUser: string, pPassword: string): Observable<HttpResponse<any>> {

        return this.httpClient
            .post(
                `${API_URL}/user/login`,
                {
                    userName:   pUser,
                    password:   pPassword
                },
				{observe: 'response'}
          	).pipe(		// Once the Post of UserName and Password was done sucessfully
				tap(	// Performs side-effects for notifications from the source observable
					(response) => {
						// Gets JWT Token from Headers Response
						const JWT_Token = 'x-access-token';
						const authenticationToken = response.headers.get(JWT_Token) ?? '';

						this.userAuthService.saveToken(authenticationToken);
					}
				)
			);
    }

}
