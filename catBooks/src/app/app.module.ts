import { HttpClientModule }		from '@angular/common/http';
import { NgModule }				from '@angular/core';
import { BrowserModule }		from '@angular/platform-browser';

import { AppRoutingModule }		from './app-routing.module';
import { AppComponent }			from './app.component';
import { AuthenticationModule } from './authentication/authentication.module';

import { FooterTemplateModule } from './shared/footer-template/footer-template.module';
import { HeaderTemplateModule } from './shared/header-template/header-template.module';

@NgModule({
	declarations: [AppComponent],
	imports: [
		BrowserModule,
		AppRoutingModule,
		HttpClientModule,
		HeaderTemplateModule,
		FooterTemplateModule,
		AuthenticationModule
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
