import { Injectable }		from '@angular/core';
import { BehaviorSubject, Observable }	from 'rxjs';
import jwt_decode			from "jwt-decode"

import { TokenService }		from '../token.service';
import { UserAuth }			from './user-auth';


@Injectable({
	providedIn: 'root',
})
export class UserAuthService {

	// Statefull Observer that stores the last state of object. Receives in its constructor the initial state, an empty object.
	private userAuthSubject		=	new BehaviorSubject<UserAuth>({});

	constructor(
		private tokenService:	TokenService
	) {
		//console.log("UserAuthService >> Constructor()");

		if ( this.tokenService.hasToken() ) {
			this.decofifyJWT();
		}
	}

	// Converts the Encoded JWT Token into a JSON Object and put it into a Behavior (Stateful) Subject
	private	decofifyJWT(): void {
		// Get the Encoded Token
		const token		=	this.tokenService.retrieveToken();

		// Decode the Token into a JSON object
		const userAut	=	jwt_decode(token) as UserAuth;

		// Whom has subscribed to this Subject are going to receive the UserAuth
		this.userAuthSubject.next(userAut);
	}

	// Gets an Observable to UserAuth
	retrieveUserAuth(): Observable<UserAuth> {
		return this.userAuthSubject.asObservable();
	}

	// Receives a Token, Saves it on LocalStorage through TokenService, Decodes it and put it into the UserAuthSubject
	saveToken(pToken: string): void {
		this.tokenService.saveToken(pToken);
		this.decofifyJWT();
	}

	// Deletes the Token and notify the Observers
	logOut(): void {
		this.tokenService.deleteToken();
		this.userAuthSubject.next({});
	}

	// Returns a Boolean to indicate if there is a Token
	isLoggedin(): boolean {
		return this.tokenService.hasToken();
	}

}
