import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/authentication/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    aUser       =   '';
    aPassword   =   '';

    constructor(
        private   authService:    AuthenticationService,
        private   router:         Router
    ) { }

    ngOnInit(): void {
    }

    login() {
        this.authService
            .authenticate(this.aUser, this.aPassword)
            .subscribe(
                () => {
                    console.log("Usuário autenticado com sucesso!");
                    this.router.navigate(
                        ['animals'])
                },
                (error) => {
                  alert("Usuário ou Senha inválidos!");
                  console.log(error);
                }
            )
        ;
    }

}
