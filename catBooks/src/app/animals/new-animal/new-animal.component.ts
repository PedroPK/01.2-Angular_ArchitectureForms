import { HttpEvent, HttpEventType } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { finalize } from 'rxjs';
import { AnimalsService } from '../animals.service';

@Component({
	selector: 'app-new-animal',
	templateUrl: './new-animal.component.html',
	styleUrls: ['./new-animal.component.css'],
})
export class NewAnimalComponent implements OnInit {

	animalForm!:		FormGroup;
	file!:				File;
	photoPreview!:		string;
	completedPercent:	number	=	0;

	constructor(
		private animalsService:		AnimalsService,
		private formBuilder:		FormBuilder,
		private router:				Router
	) {
		console.log("NewAnimalComponent >> Constructor()");
	}

	ngOnInit(): void {
		console.log("NewAnimalComponent >> ngOnInit()");

		this.animalForm		=	this.formBuilder.group({
			file:			['',	Validators.required],
			description:	['',	Validators.maxLength(300)],
			allowComments:	[true]
		});
	}

	uploadPhoto() {
		console.log("NewAnimalComponent >> uploadPhoto()");
		const allowComments		=	this.animalForm.get('allowComments')?.value ?? false;
		const description		=	this.animalForm.get('description')	?.value ?? '';

		this.animalsService
			.uploadPhoto(description, allowComments, this.file)
			.pipe(
				finalize(
					() => {
						return this.router.navigate(['animals'])
					}
				)
			)
			.subscribe(
				{
					next:
						(event:HttpEvent<any>) => {
						if ( event.type ===	HttpEventType.UploadProgress ) {
							const total				=	event.total ?? 1;
							this.completedPercent	=	Math.round(100 * (event.loaded / total));
						}
					},
					error:
						(error) => {
							console.log(error);
						}
				}
			);
	}

	saveFile(pFile: any): void {
		console.log("NewAnimalComponent >> saveFile()");
		const [file]	= pFile?.file;
		this.file		=	file;

		const reader	=	new FileReader();
		reader.onload	=	(event: any) => {
			this.photoPreview	=	event.target.result;
		}
		reader.readAsDataURL(file);
	}
}
