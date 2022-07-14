import { NgModule }						from '@angular/core';
import { CommonModule }					from '@angular/common';
import { ReactiveFormsModule }			from '@angular/forms';

import { AnimalsRoutingModule }			from './animals-routing.module';
import { AnimalThumbnailComponent }		from './animal-thumbnail/animal-thumbnail.component';
import { ListAnimalsComponent }			from './list-animals/list-animals.component';
import { ImageGridComponent }			from './image-grid/image-grid.component';
import { ImageCardComponent }			from './image-card/image-card.component';
import { DetailsComponent }				from './details/details.component';
import { CommentsComponent }			from './details/comments/comments.component';
import { MessagesModule }				from '../shared/messages/messages.module';
import { SharedModule }					from '../shared/shared.module';

@NgModule({
	declarations: [
		ListAnimalsComponent,
		AnimalThumbnailComponent,
		ImageCardComponent,
		ImageGridComponent,
  		DetailsComponent,
		CommentsComponent
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
