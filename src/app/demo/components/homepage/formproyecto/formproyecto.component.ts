import { Component, OnDestroy, OnInit } from '@angular/core';
import { Proyecto } from 'src/app/demo/api/proyecto';
import { ProyectoService } from 'src/app/demo/service/proyecto.service';
import { Router, ActivatedRoute } from '@angular/router';
import * as moment from 'moment';


@Component({
  selector: 'app-formproyecto',
  templateUrl: './formproyecto.component.html',
  styleUrls: ['./formproyecto.component.css']


})

export class FormProyectoComponent implements OnInit,OnDestroy{

  public proyecto: Proyecto = new Proyecto();

  public titulo: string = 'Formular Proyecto';

  public fechaCreacion: string = null;

  constructor(private proyectoService: ProyectoService, private router: Router,
  private activatedRoute: ActivatedRoute){}

  ngOnInit(): void {


   this.cargarProyecto();

    const datos = localStorage.getItem('proyecto');

    if (datos) {
      this.proyecto = JSON.parse(datos);
      localStorage.removeItem('proyecto');

    }

  }

  cargarProyecto(): void{
    this.activatedRoute.params.subscribe(params => {
      let id = params['id']
      if(id){
        this.proyectoService.getProyecto(id).subscribe( (proyecto) => this.proyecto = proyecto)

      }
    })
  }

  public mostrarVistaPrevia(): void
  {

    //if(this.fechaCreacion = this.proyecto.fechaCreacion)
   //if(this.proyecto.fechaCreacion == undefined)
   //this.fechaCreacion = this.formatDate(new Date(this.proyecto.fechaCreacion));

   //console.log(this.proyecto.fechaCreacion);



    localStorage.setItem('proyecto', JSON.stringify(this.proyecto));

    this.router.navigate(['/homepage/formvistapreviaproyecto']);


  }

  formatDate(date: Date | null): string {
    if (!date) return '';

    return moment(date).format('DD/MM/YYYY');
  }

  onDateChangeFechaCreacion(event: any) {
    console.log('Fecha seleccionada:', event.value);
    this.proyecto.fechaCreacion = this.formatDate(new Date(this.proyecto.fechaCreacion));
  }

  onDateChangeFechaActualizacion(event: any) {
    console.log('Fecha seleccionada:', event.value);
    this.proyecto.fechaActualizacion = this.formatDate(new Date(this.proyecto.fechaActualizacion));
  }

  ngOnDestroy(): void {

}


}
