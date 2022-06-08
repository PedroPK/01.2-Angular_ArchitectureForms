import { NgModule }				from '@angular/core';
import { CommonModule }			from '@angular/common';

import { ImageCardComponent }	from './image-card.component';

@NgModule({
	declarations:	[ImageCardComponent],
	imports:		[CommonModule],
	exports:		[ImageCardComponent]
})
export class ImageCardModule {}
