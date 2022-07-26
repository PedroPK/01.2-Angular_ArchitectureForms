import { Injectable } from '@angular/core';
import { CanLoad, Route, Router, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserAuthService } from './user/user-auth.service';

@Injectable({
	providedIn: 'root',
})
export class LoginGuard implements CanLoad {

	constructor(
		private userAuthService:	UserAuthService,
		private router:				Router
	) {
		//console.log("LoginGuard >> Constructor()");
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
		//console.log("LoginGuard >> canLoad()");
		if ( this.userAuthService.isLoggedin() ) {
			this.router.navigate(['animals']);
			return false;
		} else {
			return true;
		}
	}
}
