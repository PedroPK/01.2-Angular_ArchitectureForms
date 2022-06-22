import { Component, OnInit }	from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable }			from 'rxjs';

import { Animal }				from '../animals';
import { AnimalsService }		from '../animals.service';

@Component({
	selector: 'app-details',
	templateUrl: './details.component.html',
	styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {

	animalId!:	number;
	animal$!:	Observable<Animal>

	constructor(
		private animalsService:		AnimalsService,
		private activatedRoute:		ActivatedRoute
	) {}

	ngOnInit(): void {
		this.animalId	=	this.activatedRoute.snapshot.params['animalId'];

		this.animal$	=	this.animalsService.searchById(this.animalId);
	}

}
