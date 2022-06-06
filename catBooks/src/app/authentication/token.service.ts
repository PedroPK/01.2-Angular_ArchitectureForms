import { Injectable } from '@angular/core';

const KEY = 'token';

@Injectable({
	providedIn: 'root',
})
export class TokenService {
	constructor() {}

	retrieveToken(): string {
		return localStorage.getItem(KEY) ?? '';
	}

	saveToken( pToken: string ): void {
		localStorage.setItem(KEY, pToken);
	}

	deleteToken(): void {
		localStorage.removeItem(KEY);
	}

	thereIsToken(): boolean {
				// Converts the token into a Boolean
		return !! this.retrieveToken();
	}

}
