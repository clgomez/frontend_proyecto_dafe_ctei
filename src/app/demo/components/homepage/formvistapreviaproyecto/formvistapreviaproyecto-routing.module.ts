import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormVistaPreviaProyectoComponent } from './formvistapreviaproyecto.component';

@NgModule({
	imports: [RouterModule.forChild([
		{ path: '', component: FormVistaPreviaProyectoComponent }

	])],
	exports: [RouterModule]
})
export class FormVistaPreviaProyectoRoutingModule { }
