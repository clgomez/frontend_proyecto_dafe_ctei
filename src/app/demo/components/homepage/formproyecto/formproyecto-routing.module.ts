import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormProyectoComponent } from './formproyecto.component';

@NgModule({
	imports: [RouterModule.forChild([
		{ path: '', component: FormProyectoComponent }

	])],
	exports: [RouterModule]
})
export class FormProyectoRoutingModule { }
