import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of, throwError } from 'rxjs';


import { environment } from 'src/environments/environment';
import { TokenService } from '../authentication/token.service';
import { Animal, Animals } from './animals';

const API = environment.apiUrl;
const NOT_MODIFIED_HTTP_CODE = '304';

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

	deleteAnimal(pId: number): Observable<Animal> {
		return this.httpClient.delete<Animal>(
					`${API}/photos/${pId}`
		);
	}

	like(pId: number) {
		return this.httpClient
			.post(`${API}/photos/${pId}/likes`,		{},		{observe: 'response'})
			.pipe(
				map(() => true),
				catchError(
					(error) => {
						return error.status === NOT_MODIFIED_HTTP_CODE
							? of(false)
							: throwError(
								() => new Error(JSON.stringify(error))
							)
					}
				)
			)
		;
	}

}
