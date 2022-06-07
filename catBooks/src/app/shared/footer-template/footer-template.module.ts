import { NgModule }		from '@angular/core';
import { CommonModule }	from '@angular/common';
import { RouterModule }	from '@angular/router';

import { FooterTemplateComponent } from './footer-template.component';

@NgModule({
	declarations: [FooterTemplateComponent],
	imports: [
		CommonModule,
		RouterModule
	],
	exports: [FooterTemplateComponent]
})
export class FooterTemplateModule {}
