import { Component, Input, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/shared/api-service.service';

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
			this.originalUrl = `${ApiServiceService.getApiUrl()}/imgs/${pUrl}`;
		}
	}

	get imageUrl(): string {
		return this.originalUrl;
	}

	constructor() {}

	ngOnInit(): void {}

}
