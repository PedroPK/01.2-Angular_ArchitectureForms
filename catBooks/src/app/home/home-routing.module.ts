import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent }        from './home.component';
import { LoginComponent }       from './login/login.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';

const routes: Routes = [
    {
        path: '',
        component:    HomeComponent,
        children: [
            {
                path: '',
                component: LoginComponent
            },
            {
                path: 'newUser',
                component:  UserRegistrationComponent
            }
        ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
