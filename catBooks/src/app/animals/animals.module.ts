import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnimalsRoutingModule } from './animals-routing.module';
import { ListAnimalsComponent } from './list-animals/list-animals.component';
import { AnimalThumbnailComponent } from './animal-thumbnail/animal-thumbnail.component';
import { SharedModule } from '../shared/shared.module';
import { ImageGridComponent } from './image-grid/image-grid.component';
import { ImageCardComponent } from './image-card/image-card.component';
import { DetailsComponent } from './details/details.component';

@NgModule({
	declarations: [
		ListAnimalsComponent,
		AnimalThumbnailComponent,
		ImageCardComponent,
		ImageGridComponent,
  		DetailsComponent
	],
	imports: [
		CommonModule,
		AnimalsRoutingModule,
		SharedModule,
	],
	exports: [
		AnimalThumbnailComponent,
		ImageGridComponent,
		ImageCardComponent
	]
})
export class AnimalsModule {}
