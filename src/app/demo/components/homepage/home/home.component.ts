// src/app/home/home.component.ts

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // Método para manejar los clics en los botones
  onFormularProyecto() {
    console.log('Redirigiendo a la página de formulación de proyectos');
    // Aquí puedes agregar la lógica para redirigir a la página de formular proyecto.
  }

  onGestionarProyecto() {
    console.log('Redirigiendo a la página de gestión de proyectos');
    // Aquí puedes agregar la lógica para redirigir a la página de gestión de proyecto.
  }

  onSeguirProyecto() {
    console.log('Redirigiendo a la página de seguimiento de proyectos');
    // Aquí puedes agregar la lógica para redirigir a la página de seguimiento de proyecto.
  }
}
