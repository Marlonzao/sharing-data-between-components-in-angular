import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataViaInputComponent } from './data-via-input/data-via-input.component';

const routes: Routes = [
	{ 
		path: '', 
		redirectTo: 'data-via-input', 
		pathMatch: 'full' 
	},
	{
		path: 'data-via-input',
		component: DataViaInputComponent,
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
