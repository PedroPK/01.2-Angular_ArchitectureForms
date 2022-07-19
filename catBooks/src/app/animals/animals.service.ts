import { HttpClient }									from '@angular/common/http';
import { Injectable }									from '@angular/core';
import { catchError, map, Observable, of, throwError }	from 'rxjs';

import { environment }		from 'src/environments/environment';
import { Animal, Animals }	from './animals';

const API = environment.apiUrl;
const NOT_MODIFIED_HTTP_CODE = '304';

@Injectable({
	providedIn: 'root',
})
export class AnimalsService {

	constructor(
		private httpClient:		HttpClient
	) {
		console.log("AnimalsService >> Constructor()");
	}

	listUser(pUserName: string): Observable<Animals> {
		//console.log("AnimalsService >> listUser()");
		return this.httpClient
		.get<Animals>(
			`${API}/${pUserName}/photos`
			);
		}

	searchById(pId: number): Observable<Animal> {
		console.log("AnimalsService >> searchById()");

		const url =  `${API}/photos/${pId}`;
		console.log(`AnimalsService >> searchById() >> url = ${url}`);

		return this.httpClient.get<Animal>(url);
		}

	deleteAnimal(pId: number): Observable<Animal> {
		//console.log("AnimalsService >> deleteAnimal()");
		return this.httpClient.delete<Animal>(
			`${API}/photos/${pId}`
		);
	}

	like(pId: number) {
		//console.log("AnimalsService >> like()");
		return this.httpClient
			.post(`${API}/photos/${pId}/like`,		{},		{observe: 'response'})
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

	uploadPhoto(
		pDescription:	string,
		pAllowsComment:	boolean,
		pImageFile:			File
	) {
		//console.log("AnimalsService >> uploadPhoto()");

		const API_DESCRIPTION		=	'description';
		const API_ALLOW_COMMENTS	=	'allowComments';
		const API_IMAGE_FILE		=	'imageFile';
		const API_EVENTS			=	'events';

		const formData	=	new FormData();
		formData.append(API_DESCRIPTION,	pDescription);
		formData.append(API_ALLOW_COMMENTS, pAllowsComment	?	'true'	:	'false');
		formData.append(API_IMAGE_FILE,		pImageFile);

		return this.httpClient.post(
			`${API}/photos/upload`,
			formData,
			{
				observe:			API_EVENTS,
				reportProgress:		true
			}
		);
	}

}
