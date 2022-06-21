import { Component, OnInit } from '@angular/core';

import { Animals }			from '../animals';
import { AnimalsService }	from '../animals.service';
import { UserAuthService }	from 'src/app/authentication/user/user-auth.service';
import { Observable, switchMap } from 'rxjs';

@Component({
	selector: 'app-list-animals',
	templateUrl: './list-animals.component.html',
	styleUrls: ['./list-animals.component.css'],
})
export class ListAnimalsComponent implements OnInit {

	animals$!: Observable<Animals>;

	constructor(
		private animalsService:		AnimalsService,
		private userAuthService:	UserAuthService
	) {}

	ngOnInit(): void {
		this.animals$ = this.userAuthService.retrieveUserAuth().pipe(
			switchMap(
				(user) => {
					const userName = user.name ?? '';
					return this.animalsService.listUser(userName);
				}
			)
		);



	}
}
