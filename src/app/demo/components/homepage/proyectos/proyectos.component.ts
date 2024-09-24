import { Component, OnInit } from '@angular/core';
import { Proyecto } from 'src/app/demo/api/proyecto';
import { ProyectoService } from 'src/app/demo/service/proyecto.service';
import { MessageService, ConfirmationService } from 'primeng/api';
import { ExportService } from 'src/app/demo/service/export.service';
import { MenuItem } from 'primeng/api';
import * as moment from 'moment';
import swal from 'sweetalert2';

@Component({
    templateUrl: './proyectos.component.html',
    providers: [MessageService, ConfirmationService]
})
export class ProyectosComponent implements OnInit {

items: MenuItem[] = [];

/*data: any[] = [
    { ID: 1, Name: 'John Doe', Age: 30 },
    { ID: 2, Name: 'Jane Doe', Age: 25 }
  ];
*/

data: any =[];

public visibleDetalleProyecto: boolean = false;

proyectos: Proyecto[];

proyectoSeleccionado: Proyecto | null = null;

constructor(private proyectoService: ProyectoService, private exportService: ExportService, private messageService: MessageService){}

    ngOnInit(): void {

        /*this.items = [
            { label: 'PDF', icon: 'pi-file-pdf', command: () =>  this.exportarProyecto('PDF') },
            { label: 'Excel', icon: 'pi-file-excel', command: () => this.exportarProyecto('Excel')}
        ];
        */

      this.proyectoService.getProyectos().subscribe({
        next: (respose) =>
        { this.proyectos = respose.proyectos;
          if(this.proyectos.length == 0)
             swal.fire('lista vacia', `${respose.mensaje}:`, 'success')

        },
        //error: err => {
          //console.log(err.error.mensaje)
          //swal.fire("error al consultar productos en la bd", err.error.mensaje,"error");
        //}
        });
    }

    exportarProyecto(proyecto: Proyecto, formatoArchivo: string):void
    {

        this.proyectoSeleccionado = proyecto;

        this.messageService.add({severity: 'success', summary: 'Success', detail: 'Proyecto listo para exportar'});

        this.data  = [
            { Id: this.proyectoSeleccionado.id,
              Titulo: this.proyectoSeleccionado.titulo,
              Descripcion: this.proyectoSeleccionado.descripcion,
              //poblacionObjetivo: this.proyectoSeleccionado.poblacionObjetivo,
              //justificacion: this.proyectoSeleccionado.justificacion,
              //presupuesto: this.proyectoSeleccionado.presupuesto,
              //cronograma: this.proyectoSeleccionado.cronograma,
              //resultadosEsperados: this.proyectoSeleccionado.resultadosEsperados,
              //observaciones: this.proyectoSeleccionado.observaciones,
              fechaCreacion: this.proyectoSeleccionado.fechaCreacion,
              fechaActualizacion: this.proyectoSeleccionado.fechaActualizacion,
              Estado: this.proyectoSeleccionado.estado}
          ];

          if(formatoArchivo == 'PDF')
            this.exportService.exportToPdf(this.data);
          if(formatoArchivo == 'Excel')
            this.exportService.exportToExcel(this.data);


    }


    eliminarProyecto(proyecto: Proyecto): void {
    swal.fire({
      title: 'Está seguro?',
      text: `¿Seguro que desea eliminar al proyecto ${proyecto.titulo}?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar!',
      cancelButtonText: 'No, cancelar!',
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger',

      },
      buttonsStyling: false,
      reverseButtons: true
    } as any).then((result) => {
      if (result.value) {

        this.proyectoService.deleteProyecto(proyecto.id).subscribe(
          response => {
            this.proyectos = this.proyectos.filter(proy => proy !== proyecto)
            /*swal.fire(
              'Proyecto Eliminado!',
              `Proyecto ${proyecto.titulo} eliminado con éxito.`,
              'success'
            )*/
              this.messageService.add({severity: 'success', summary: 'Success', detail: 'Proyecto Eliminado'});
          }
        )

      }
    })
  }

  get formattedFechaCreacion(): string {
    return this.proyectoSeleccionado.fechaCreacion;
  }


  formatDate(date: Date | null): string {
    if (!date) return '';

    return moment(date).format('DD/MM/YYYY');
  }


   mostrarDetalleProyecto(proyecto: Proyecto):void
   {
    this.proyectoSeleccionado = proyecto;
    this.visibleDetalleProyecto = true;
   }


}








