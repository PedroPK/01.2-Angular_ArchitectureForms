import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-messages',
    templateUrl: './messages.component.html',
    styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

    @Input()
    message   =   'Mensagem de Alerta padrão!';

    constructor() {
		//console.log("MessagesComponent >> Constructor()");
	}

    ngOnInit(): void {
		//console.log("MessagesComponent >> ngOnInit()");
    }

}
