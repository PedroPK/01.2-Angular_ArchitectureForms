import { Injectable } from '@angular/core';

const KEY = 'token';

@Injectable({
	providedIn: 'root',
})
export class TokenService {

	constructor() {
		//console.log("TokenService >> Constructor()");
	}

	// If there is a Token into LocalStorage API of Chrome Browser. Otherwise, an empty String is returned
	retrieveToken(): string {
		//console.log("TokenService >> retrieveToken()");
		return localStorage.getItem(KEY) ?? '';
	}

	// Saves a Token into LocalStorage
	saveToken( pToken: string ): void {
		//console.log("TokenService >> saveToken()");
		localStorage.setItem(KEY, pToken);
	}

	// Removes the Token stored into LocalStorage
	deleteToken(): void {
		//console.log("TokenService >> deleteToken()");
		localStorage.removeItem(KEY);
	}

	// Returns a Boolean it there is a Token stored into LocalStorage
	hasToken(): boolean {
		//console.log("TokenService >> hasToken()");
				// Converts the token into a Boolean
		return !! this.retrieveToken();
	}

}
