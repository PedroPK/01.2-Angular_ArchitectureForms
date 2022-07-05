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
		const comment = this.commentForm.get('comment')?.value ?? '';

		this.commentService.insertComment(
			this.id,
			comment
		).pipe(
			// Change from Insert Flow to Search flow
			switchMap(() => this.commentService.searchComment(this.id)),

			// Does not affect RXJS flow. Used to do side-effects notifications
			tap(
				() => {
					this.commentForm.reset();
					alert('O Comentário foi salvo com sucesso!');
				}
			)
		);
	}

}
