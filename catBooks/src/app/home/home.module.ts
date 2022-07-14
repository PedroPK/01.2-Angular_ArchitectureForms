import { NgModule }							from '@angular/core';
import { CommonModule }						from '@angular/common';
import { FormsModule, ReactiveFormsModule }	from '@angular/forms';

import { HomeRoutingModule }			from './home-routing.module';
import { HomeComponent }				from './home.component';
import { LoginComponent }				from './login/login.component';
import { MessagesModule }				from '../shared/messages/messages.module';
import { UserRegistrationComponent }	from './user-registration/user-registration.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
	declarations: [
		HomeComponent,
		LoginComponent,
		UserRegistrationComponent],
	imports: [
		CommonModule,
		HomeRoutingModule,
		FormsModule,
		SharedModule
	],
	exports: [HomeComponent],
})
export class HomeModule {}
