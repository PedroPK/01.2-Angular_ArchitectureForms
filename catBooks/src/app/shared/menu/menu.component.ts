import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-menu',
	templateUrl: './menu.component.html',
	styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {

	shouldShowMenu = false;

	constructor() {}

	ngOnInit(): void {}

	pressMenu() {
		this.shouldShowMenu = !this.shouldShowMenu;
	}

}
