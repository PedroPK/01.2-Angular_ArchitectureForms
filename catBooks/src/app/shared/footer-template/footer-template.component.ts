import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-footer-template',
	templateUrl: './footer-template.component.html',
	styleUrls: ['./footer-template.component.css'],
})
export class FooterTemplateComponent implements OnInit {

	constructor() {
		//console.log("FooterTemplateComponent >> Constructor()");
	}

	ngOnInit(): void {
		//console.log("FooterTemplateComponent >> ngOnInit()");
	}

}
