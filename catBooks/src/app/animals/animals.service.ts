import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, mapTo, Observable, of, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TokenService } from '../authentication/token.service';
import { Animal, Animals } from './animals';

const API = environment.apiUrl;
const NOT_MODIFIED_HTTP_CODE	=	'304';

@Injectable({
	providedIn: 'root',
})
export class AnimalsService {

	baseUrl_ApiPhotos:	string		=	`${API}/photos/`;

	constructor(
		private httpClient:		HttpClient
	) {}

	listUser(pUserName: string): Observable<Animals> {
		return this.httpClient
			.get<Animals>(
				`${API}/${pUserName}/photos`
			);
	}

	searchById(pId: number): Observable<Animal> {
		return this.httpClient.get<Animal>(
					`${this.baseUrl_ApiPhotos}${pId}`
		);
	}

	deleteAnimal(pId: number): Observable<Animal> {
		return this.httpClient.delete<Animal>(
			`${this.baseUrl_ApiPhotos}${pId}`
		);
	}

	likeAnimal(pId: number): Observable<boolean> {
		return this.httpClient.post(
			`${this.baseUrl_ApiPhotos}${pId}/like`,
			{},
			{
				observe: 'response'
			}
		).pipe(
			mapTo(true),
			catchError((error) => {
				return error.status === NOT_MODIFIED_HTTP_CODE
					? of(false)
					: throwError(() => new Error(error))
			})
		);
	}

}
