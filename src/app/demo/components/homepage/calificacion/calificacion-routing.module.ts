import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CalificacionComponent } from './calificacion.component';

@NgModule({
	imports: [RouterModule.forChild([
		{ path: '', component: CalificacionComponent }

	])],
	exports: [RouterModule]
})
export class CalificacionRoutingModule { }
