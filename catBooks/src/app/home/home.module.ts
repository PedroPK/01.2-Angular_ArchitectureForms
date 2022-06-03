import { NgModule }           from '@angular/core';
import { CommonModule }       from '@angular/common';
import { FormsModule }        from '@angular/forms';

import { HomeRoutingModule }  from './home-routing.module';
import { HomeComponent }      from './home.component';
import { LoginComponent }     from './login/login.component';
import { MessagesModule }     from '../shared/messages/messages.module';
import { UserRegistrationComponent } from './user-registration/user-registration.component';


@NgModule({
  declarations: [
      HomeComponent,
      LoginComponent,
      UserRegistrationComponent
  ],
  imports: [
      CommonModule,
      HomeRoutingModule,
      FormsModule,
      MessagesModule
  ],
  exports: [
      HomeComponent
  ]
})
export class HomeModule { }
