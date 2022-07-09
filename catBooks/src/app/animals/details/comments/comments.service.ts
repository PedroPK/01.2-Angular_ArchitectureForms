import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TokenService } from 'src/app/authentication/token.service';
import { environment } from 'src/environments/environment';
import { Comment, Comments } from './comments';

const API_URL = environment.apiUrl;

@Injectable({
	providedIn: 'root',
})
export class CommentsService {

	useTokenService		= false;

	constructor(
		private httpClient:		HttpClient,
		private tokenService:	TokenService
	) {}


	searchComment(pId: number): Observable<Comments> {
		console.log(`Comment Service >> searchComment(): pID = ${pId}`);

		const httpHeadersWithToken = this.setupToken();

		return this.httpClient.get<Comments>(
			`${API_URL}/photos/${pId}/comments`,
			{headers: httpHeadersWithToken});
	}

	insertComment(pId: number, text: string): Observable<Comment> {
		//console.log(`Comment Service >> insertComment(): pID = ${pId}, pComment = ${text}`);

		const url = `${API_URL}/photos/${pId}/comments`;
		//console.log(`url = ${url}`);

		//console.log(`Using Token Interceptor`);
		return this.httpClient.post<Comment>(
			url,
			{text}
		);
	}

	setupToken(): HttpHeaders {
		const token = this.tokenService.retrieveToken();
		const header = new HttpHeaders().append('x-access-token', token);
		return header;
	}


}
