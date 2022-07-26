import { Injectable } from '@angular/core';
import {
	Router,
	Resolve,
	RouterStateSnapshot,
	ActivatedRouteSnapshot,
} from '@angular/router';
import { Observable, of, switchMap, take } from 'rxjs';
import { UserAuthService } from 'src/app/authentication/user/user-auth.service';
import { Animals } from '../animals';
import { AnimalsService } from '../animals.service';

// Execute an Action/Loading/Operation, before a Route to be Resolved
// We can gain some response time to Users.

@Injectable({
	providedIn: 'root',
})
export class ListAnimalsResolver implements Resolve<Animals> {

	constructor(
		private animalsService:		AnimalsService,
		private userAuthService:	UserAuthService
	)
	{}

	resolve(
		route: ActivatedRouteSnapshot,
		state: RouterStateSnapshot
	): Observable<Animals> {
		return this.userAuthService.retrieveUserAuth().pipe(
			switchMap((user) => {
				const userName = user.name ?? '';
				return this.animalsService.listUser(userName);
			}),
			take(1) // Will execute only once and finalize it after
		);
	}
}
