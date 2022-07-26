import { Component, OnInit } from '@angular/core';

import { Animals }			from '../animals';
import { AnimalsService }	from '../animals.service';
import { UserAuthService }	from 'src/app/authentication/user/user-auth.service';
import { Observable, switchMap } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-list-animals',
	templateUrl: './list-animals.component.html',
	styleUrls: ['./list-animals.component.css'],
})
export class ListAnimalsComponent implements OnInit {

	animals!: Animals;

	constructor(
		private activateRoute:		ActivatedRoute
	) {
		//console.log("ListAnimalsComponent >> Constructor()");
	}

	ngOnInit(): void {
		//console.log("ListAnimalsComponent >> ngOnInit()");

		this.activateRoute.params.subscribe(
			(param) => {
				this.animals = this.activateRoute.snapshot.data['animals'];
			}
		);



	}
}
