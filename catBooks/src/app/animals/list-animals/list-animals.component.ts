import { Component, OnInit } from '@angular/core';

import { Animals }			from '../animals';
import { AnimalsService }	from '../animals.service';
import { UserAuthService }	from 'src/app/authentication/user/user-auth.service';

@Component({
	selector: 'app-list-animals',
	templateUrl: './list-animals.component.html',
	styleUrls: ['./list-animals.component.css'],
})
export class ListAnimalsComponent implements OnInit {

	animals!: Animals;

	constructor(
		private animalsService:		AnimalsService,
		private userAuthService:	UserAuthService
	) {}

	ngOnInit(): void {
		this.userAuthService.retrieveUserAuth().subscribe(
			(userAuth) => {
										// Nullish Coalescing operator (Double Question Mark [??]) is used to check if the userAuth is null/undefined or not, returning the right-hand side of the expression if it is null/undefined.
				const userName = userAuth.name ?? '';
				this.animalsService.listUser(userName).subscribe(
					(animals) => {
						this.animals = animals;
					}
				);
			}
		);
	}
}
