import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable, switchMap, tap } from 'rxjs';
import { Comments } from './comments';
import { CommentsService } from './comments.service';

@Component({
	selector: 'app-comments',
	templateUrl: './comments.component.html',
	styleUrls: ['./comments.component.css'],
})
export class CommentsComponent implements OnInit {

	@Input()
	id!:			number;
	comments$!:		Observable<Comments>;
	commentForm!:	FormGroup;

	constructor(
		private commentService:			CommentsService,
		private formBuilder:			FormBuilder
	) {}

	ngOnInit(): void {
		this.comments$		=		this.commentService.searchComment(this.id);
		this.commentForm	=		this.formBuilder.group({
			comment:['', Validators.maxLength(300)]
		})
	}

	insert(): void {
		//console.log("Comment Component >> insert()");

		const comment = this.commentForm.get('comment')?.value ?? '';
		//console.log("Comment = " + comment);

		this.comments$ = this.commentService.insertComment(
			this.id,
			comment
		).pipe(
			// Change from Insert Flow to Search flow
			switchMap(
				() => {
					//console.log(`switchMap() invoked`);

					return this.commentService.searchComment(this.id)
				}
			),

			// Does not affect RXJS flow. Used to do side-effects notifications
			tap(
				() => {
					//console.log(`tap() invoked`);

					this.commentForm.reset();
					//alert('O Comentário foi salvo com sucesso!');
				}
			)
		);
	}

}
