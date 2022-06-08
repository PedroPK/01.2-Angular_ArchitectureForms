import { NgModule }			from '@angular/core';
import { CommonModule }		from '@angular/common';
import { RouterModule } 	from '@angular/router';

import { ImageCardModule }		from '../image-card/image-card.module';
import { ImageGridComponent }	from './image-grid.component';
import { AnimalsModule }		from 'src/app/animals/animals.module';

@NgModule({
	declarations: [ImageGridComponent],
	imports: [
		CommonModule,
		ImageCardModule,
		RouterModule,
		AnimalsModule
	],
	exports: [ImageGridComponent]
})
export class ImageGridModule {}
