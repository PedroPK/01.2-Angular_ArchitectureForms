import { Injectable } from '@angular/core';
import { CanLoad, Route, Router, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserAuthService } from './user/user-auth.service';

@Injectable({
	providedIn: 'root',
})
export class AuthenticationGuard implements CanLoad {

	constructor(
		private userAuthService:	UserAuthService,
		private router:				Router
	) {
		//console.log("AuthenticationGuard >> Constructor()");
	}

	canLoad(
		route: Route,
		segments: UrlSegment[]
	):
		| Observable<boolean | UrlTree>
		| Promise<boolean | UrlTree>
		| boolean
		| UrlTree
	{
		if ( !this.userAuthService.isLoggedin() ) {
			this.router.navigate(['']);
			return false;
		} else {
			return true;
		}
	}
}
