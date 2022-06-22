import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TokenService } from '../authentication/token.service';
import { Animal, Animals } from './animals';

const API = environment.apiUrl;

@Injectable({
	providedIn: 'root',
})
export class AnimalsService {
	constructor(
		private httpClient:		HttpClient,
		private tokenService:	TokenService
	) {}

	listUser(pUserName: string): Observable<Animals> {
		const token = this.getToken();

		const headers = this.getHeaders(token);

		return this.httpClient
			.get<Animals>(
				`${API}/${pUserName}/photos`,
				{ headers: headers}
			);
	}

	private getToken() {
		return this.tokenService.retrieveToken();
	}

	private getHeaders(token: string) {
		const X_ACCESS_TOKEN = 'x-access-token';
		return new HttpHeaders().append(X_ACCESS_TOKEN, token);
	}

	searchById(pId: number): Observable<Animal> {
		const token = this.getToken();
		const headers = this.getHeaders(token);

		return this.httpClient.get<Animal>(
					`${API}/photos/${pId}`,
					{headers}
		);
	}

}
