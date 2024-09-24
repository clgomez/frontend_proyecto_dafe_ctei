// servicio compartido
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicioDatos {
  private datos: any;

  setDatos(datos: any) {
    this.datos = datos;
  }

  getDatos() {
    return this.datos;
  }
}
