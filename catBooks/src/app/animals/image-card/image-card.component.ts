import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'app-image-card',
	templateUrl: './image-card.component.html',
	styleUrls: ['./image-card.component.css'],
})
export class ImageCardComponent implements OnInit {

	@Input()
	title: string = '';

	constructor() {
		//console.log("ImageCardComponent >> Constructor()");
	}

	ngOnInit(): void {
		//console.log("ImageCardComponent >> ngOnInit()");
	}
}
