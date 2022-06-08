import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
	providedIn: 'root',
})
export class ApiServiceService {
	constructor() {}

	static getApiUrl(): string {
		return environment.apiUrl;
	}
}
