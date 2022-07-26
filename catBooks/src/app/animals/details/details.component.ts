import { Component, OnInit }		from '@angular/core';
import { ActivatedRoute, Router } 	from '@angular/router';
import { Observable }				from 'rxjs';

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
		private activatedRoute:		ActivatedRoute,
		private router:				Router
	) {
		 //console.log("DetailsComponent >> Constructor()");
	}

	ngOnInit(): void {
		console.log("DetailsComponent >> ngOnInit()");

		console.log(`DetailsComponent >> ngOnInit() >> this.activatedRoute.snapshot.params = ${JSON.stringify(this.activatedRoute.snapshot.params)}`);
		this.animalId	=	this.activatedRoute.snapshot.params['animalId'];
		console.log(`DetailsComponent >> ngOnInit() >> this.animalId = ${this.animalId}`);

		this.animal$	=	this.animalsService.searchById(this.animalId);
	}

	like() {
		//console.log("DetailsComponent >> like()");
		this.animalsService.like(this.animalId).subscribe(
			{
				next: (liked) => {
					if ( liked ) {
						this.animal$ = this.animalsService.searchById(this.animalId)
					}
				},
			}
		);
	}

	delete() {
		//console.log("DetailsComponent >> delete()");
		this.animalsService.deleteAnimal(this.animalId).subscribe(
			{
				next: () => {
					this.router.navigate(['/animals/'])
				},
				error: (error) => {
					console.log(error);
				}
			}
		);
	}
}
