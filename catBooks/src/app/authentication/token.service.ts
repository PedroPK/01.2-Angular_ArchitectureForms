import { Injectable } from '@angular/core';

const KEY = 'token';

@Injectable({
	providedIn: 'root',
})
export class TokenService {
	constructor() {}

	// If there is a Token into LocalStorage API of Chrome Browser. Otherwise, an empty String is returned
	retrieveToken(): string {
		return localStorage.getItem(KEY) ?? '';
	}

	// Saves a Token into LocalStorage
	saveToken( pToken: string ): void {
		localStorage.setItem(KEY, pToken);
	}

	// Removes the Token stored into LocalStorage
	deleteToken(): void {
		localStorage.removeItem(KEY);
	}

	// Returns a Boolean it there is a Token stored into LocalStorage
	hasToken(): boolean {
				// Converts the token into a Boolean
		return !! this.retrieveToken();
	}

}
