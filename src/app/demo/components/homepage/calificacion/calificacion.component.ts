import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import swal from 'sweetalert2';


@Component({
  selector: 'app-calificacion',
  templateUrl: './calificacion.component.html',
  styleUrls: ['./calificacion.component.css']
})

export class CalificacionComponent {


//constructor(private messageService: MessageService){}


fields = [
    { label: 'Título', value: '', calificacion: '' },
    { label: 'Descripción', value: '', calificacion: '' },
    { label: 'Población Objetivo', value: '', calificacion: '' },
    { label: 'Justificación', value: '', calificacion: '' },
    { label: 'Presupuesto', value: '', calificacion: '' },
    { label: 'Resultados Esperados', value: '', calificacion: '' },
    { label: 'Observaciones', value: '', calificacion: '' }
  ];




  // Función que retorna la clase CSS según la calificación
  getCalificacionClass(calificacion: string): string {
    return calificacion;
  }

  // Función que retorna la clase CSS del ícono según la calificación
  getCalificacionIcon(calificacion: string): string {
    return calificacion;
  }

  // Manejar el cambio de la calificación
  onCalificacionChange(field: any) {
    // Aquí podrías añadir lógica adicional si lo necesitas


    console.log(field.label);
    console.log(field.calificacion);



  }

  submitForm(){
    //this.messageService.add({severity: 'success', summary: 'Success', detail: 'Proyecto Calificado'});
    swal.fire('Calificación Finalizada', `Proyecto calificado con éxito!`, 'success');
  }

  show()
  {
    //this.messageService.add({severity: 'success', summary: 'Success', detail: 'Proyecto Calificado'});
  }


}
