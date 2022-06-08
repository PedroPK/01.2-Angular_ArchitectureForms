import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnimalsRoutingModule } from './animals-routing.module';
import { ListAnimalsComponent } from './list-animals/list-animals.component';
import { AnimalThumbnailComponent } from './animal-thumbnail/animal-thumbnail.component';
import { ImageCardModule } from '../shared/image-card/image-card.module';
import { ImageGridModule } from '../shared/image-grid/image-grid.module';

@NgModule({
	declarations: [
		ListAnimalsComponent,
		AnimalThumbnailComponent],
	imports: [
		CommonModule,
		AnimalsRoutingModule,
	],
	exports: [
		AnimalThumbnailComponent
	]
})
export class AnimalsModule {}
