import { Component, Input, OnInit }		from '@angular/core';

import { Animals }						from 'src/app/animals/animals';

@Component({
	selector: 'app-image-grid',
	templateUrl: './image-grid.component.html',
	styleUrls: ['./image-grid.component.css'],
})
export class ImageGridComponent implements OnInit {

	@Input()
	animals!: Animals;

	constructor() {}

	ngOnInit(): void {}
}
