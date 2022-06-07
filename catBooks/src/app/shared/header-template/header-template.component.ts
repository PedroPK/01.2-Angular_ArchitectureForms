import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserAuthService } from 'src/app/authentication/user/user-auth.service';

@Component({
	selector: 'app-header-template',
	templateUrl: './header-template.component.html',
	styleUrls: ['./header-template.component.css'],
})
export class HeaderTemplateComponent {

	userAuth$ = this.userAuthService.retrieveUserAuth();

	constructor(
		private		userAuthService:	UserAuthService,
		private		router:				Router
	) {}

	logout() {
		this.userAuthService.logOut();
		this.router.navigate(['']);
	}

}
