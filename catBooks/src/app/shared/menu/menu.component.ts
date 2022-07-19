import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-menu',
	templateUrl: './menu.component.html',
	styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {

	shouldShowMenu = false;

	constructor() {
		//console.log("MenuComponent >> Constructor()");
	}

	ngOnInit(): void {
		//console.log("MenuComponent >> ngOnInit()");
	}

	pressMenu() {
		//console.log("MenuComponent >> pressMenu()");
		this.shouldShowMenu = !this.shouldShowMenu;
	}

}
