import { Component, OnDestroy, OnInit } from '@angular/core';
import { Proyecto } from 'src/app/demo/api/proyecto';
import { ProyectoService } from 'src/app/demo/service/proyecto.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NotificationService } from 'src/app/demo/service/notificacion.service';
import { CalendarModule } from 'primeng/calendar';
import { format } from 'date-fns';
import * as moment from 'moment';
import swal from 'sweetalert2';
import { timestamp } from 'rxjs';


@Component({
  selector: 'app-formvistapreviaproyecto',
  templateUrl: './formvistapreviaproyecto.component.html',
  styleUrls: ['./formvistapreviaproyecto.component.css']
})
export class FormVistaPreviaProyectoComponent implements OnInit, OnDestroy {

  public proyecto: Proyecto = new Proyecto();

  public titulo: string = 'Vista Previa del Proyecto';

  public pulsoSalirVistaPrevia: boolean = false;




  constructor(private proyectoService: ProyectoService, private router: Router){}

  ngOnInit(): void {


    const datos = localStorage.getItem('proyecto');
    this.proyecto = datos ? JSON.parse(datos) : null;


  }

  public crearProyecto(): void{

    /*if (this.proyecto.fechaCreacion instanceof Date) {
        console.log('es fecha date')
    }else {
        this.proyecto.fechaCreacion = new Date(this.proyecto.fechaCreacion);
        console.log(this.proyecto.fechaCreacion);
    }
*/
    this.proyecto.idUsuario = 1;

    this.proyectoService.createProyecto(this.proyecto)
    .subscribe(
    (respose) =>
    {
      localStorage.removeItem('proyecto');
      this.router.navigate(['/']);
      if(respose?.titulo)
        swal.fire('Nuevo proyecto', `Proyecto ${respose.titulo} creado con éxito!`, 'success');
      else  console.log('not found');
    }
    )
  }

  public actualizarProyecto():void{
    this.proyectoService.updateProyecto(this.proyecto)
        .subscribe( json => {
        localStorage.removeItem('proyecto');
        this.router.navigate(['/'])
        swal.fire('Proyecto Actualizado', `${json.mensaje}:
        ${json.proyecto.titulo}`, 'success')
      }
    )
  }

  public salirVistaPreviaProyecto():void
  {

    //console.log(this.proyecto.fechaCreacion);
    this.pulsoSalirVistaPrevia = true;
    this.router.navigate(['/homepage/formproyecto']);

  }

  formatDate(date: Date | null): string {
    if (!date) return '';

    return moment(date).format('DD/MM/YYYY');
  }



  ngOnDestroy(): void {

    console.log(this.pulsoSalirVistaPrevia);
    console.log("destruyo vista previa");

    if(this.pulsoSalirVistaPrevia == false)
      localStorage.removeItem('proyecto');


  }

}
