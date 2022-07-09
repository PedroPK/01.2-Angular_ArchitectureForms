import { Injectable } from '@angular/core';
import {
	HttpRequest,
	HttpHandler,
	HttpEvent,
	HttpInterceptor,
	HttpHeaders,
} from '@angular/common/http';
import { Observable } from 'rxjs';

import { TokenService } from './token.service';

@Injectable()
export class AuthenticationInterceptor implements HttpInterceptor {

	constructor(
		private tokenService:	TokenService
	) {}

	intercept(
		request:	HttpRequest<unknown>,
		next:		HttpHandler
	): Observable<HttpEvent<unknown>> {
		if ( this.tokenService.hasToken() ) {
			const token				=	this.tokenService.retrieveToken();

			const X_ACCESS_TOKEN	= 'x-access-token';
			const headers			=	new  HttpHeaders().append(X_ACCESS_TOKEN, token);

			request					=	request.clone({headers});
		}

		return next.handle(request);
	}
}
