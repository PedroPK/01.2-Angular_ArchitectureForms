import { Component, Input, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

const API = environment.apiUrl;

@Component({
	selector: 'app-animal-thumbnail',
	templateUrl: './animal-thumbnail.component.html',
	styleUrls: ['./animal-thumbnail.component.css'],
})
export class AnimalThumbnailComponent implements OnInit {

	private originalUrl: string = '';

	@Input()
	imageDescription: string = '';

	@Input()
	set url(pUrl: string) {
		if ( pUrl.startsWith('data') ) {
			this.originalUrl = pUrl;
		} else {
			this.originalUrl = `${API}/imgs/${pUrl}`;
		}
	}

	get imageUrl(): string {
		return this.originalUrl;
	}

	constructor() {
		//console.log("AnimalThumbnailComponent >> Constructor()");
	}

	ngOnInit(): void {
		//console.log("AnimalThumbnailComponent >> ngOnInit()");
	}

}
