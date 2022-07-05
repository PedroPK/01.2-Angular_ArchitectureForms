import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Comment, Comments } from './comments';

const API_URL = environment.apiUrl;

@Injectable({
	providedIn: 'root',
})
export class CommentsService {

	constructor(
		private httpClient:		HttpClient
	) {}

	searchComment(pId: number): Observable<Comments> {
		return this.httpClient.get<Comments>(
			`${API_URL}/photos/${pId}/comments`);
	}

	insertComment(pId: number, pCommentText: string): Observable<Comment> {
		return this.httpClient.post<Comment>(
			`${API_URL}/photos/${pId}/comments`,
			{pCommentText}
		);
	}

}
