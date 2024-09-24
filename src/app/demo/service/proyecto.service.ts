import { Injectable } from '@angular/core';
import {Proyecto} from '../api/proyecto';
import {Observable, throwError} from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, catchError } from "rxjs/operators";
import swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {

  //constructor() { }

  private urlEndPoint: string;
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
  constructor(private http: HttpClient){}

  getProyectos(): Observable <any>
  {
    this.urlEndPoint = 'http://localhost:8081/api/proyectos';
    return this.http.get<any>(this.urlEndPoint)
                    .pipe(map((response) => response as Proyecto[]),
                     catchError((e) => {
                        //console.error(e.error.mensaje);
                        swal.fire("error al consultar proyectos en la bd", e.error.mensaje,"error");
                        return throwError(() => e);
                    })
           );
  }

  createProyecto(proyecto: Proyecto) : Observable<Proyecto> {
    this.urlEndPoint = 'http://localhost:8081/api/proyecto';
    return this.http.post<Proyecto>(this.urlEndPoint, proyecto,{headers: this.httpHeaders})
                    .pipe(map((response) => response as Proyecto),
                      catchError((e) => {
                          //console.error(e.error.mensaje);
                          swal.fire("Error al crear el producto", e.error.mensaje,"error");
                          return throwError(() => e);
                      })
             );

  }

  getProyecto(idProyecto: number): Observable<Proyecto>{
    this.urlEndPoint = 'http://localhost:8081/api/proyecto';
    return this.http.get<Proyecto>(`${this.urlEndPoint}/${idProyecto}`)
  }

  updateProyecto(proyecto: Proyecto): Observable<any>{
      this.urlEndPoint = 'http://localhost:8081/api/proyecto';
      return this.http.put<any>(`${this.urlEndPoint}/${proyecto.id}`,
                       proyecto, {headers: this.httpHeaders})
                      .pipe(
                        catchError((e) => {
                          console.error(e.error.mensaje);
                          swal.fire("Error al actualizar el proyecto", e.error.mensaje,"error");
                          return throwError(() => e);
                        })
                );
  }

  deleteProyecto(idProyecto: number): Observable<Proyecto>{
    this.urlEndPoint = 'http://localhost:8081/api/proyecto';
    return this.http.delete<Proyecto>(`${this.urlEndPoint}/${idProyecto}`,
    {headers:this.httpHeaders})
    .pipe(
      catchError(e => {
        console.error(e.error.mensaje);
        swal.fire(e.error.mensaje, e.error.error, 'error');
        return throwError(() => e);
      })
    );

  }

}
