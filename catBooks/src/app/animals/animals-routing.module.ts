import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { ListAnimalsComponent } from './list-animals/list-animals.component';

const routes: Routes = [
    {
        path: '',
        component: ListAnimalsComponent
    },
	{
		path:':animalId',
		component: DetailsComponent
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnimalsRoutingModule { }
