import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TokenService } from '../authentication/token.service';
import { Animals } from './animals';

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
		const token = this.tokenService.retrieveToken();

		const headers = new HttpHeaders().append('x-access-token', token);

		return this.httpClient
			.get<Animals>(
				`${API}/${pUserName}/photos`,
				{ headers: headers}
			);
	}

}
