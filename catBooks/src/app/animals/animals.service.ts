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
		return this.httpClient
			.get<Animals>(
				`${API}/${pUserName}/photos`
			);
	}

	searchById(pId: number): Observable<Animal> {
		return this.httpClient.get<Animal>(
					`${API}/photos/${pId}`
		);
	}

}
