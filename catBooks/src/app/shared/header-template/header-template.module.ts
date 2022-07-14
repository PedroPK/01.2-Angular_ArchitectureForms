import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HeaderTemplateComponent } from './header-template.component';
import { MenuModule } from 'src/app/components/menu/menu.module';

@NgModule({
	declarations: [HeaderTemplateComponent],
	imports: [
		CommonModule,
		RouterModule,
		MenuModule
	],
	exports: [HeaderTemplateComponent],
})
export class HeaderTemplateModule {}
