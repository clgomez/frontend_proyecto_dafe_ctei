import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable , throwError} from 'rxjs';
import { map, catchError } from "rxjs/operators";
import swal from 'sweetalert2';
import { Proyecto } from '../api/proyecto';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {

  private urlEndPoint: string;
  //private httpHeaders = new HttpHeaders({'responseType': 'text'});

  constructor(private http: HttpClient) { }

  /*upload(file: File): Observable<any> {

    this.urlEndPoint = 'http://localhost:8081/api/files/upload';
    const formData = new FormData();
    formData.append('file', file, file.name);

    return this.http.post(this.urlEndPoint, formData, {responseType: 'text'});
  }*/


 upload(file: File): Observable<any> {

    this.urlEndPoint = 'http://localhost:8081/api/files/upload';
    const formData = new FormData();
    formData.append('file', file, file.name);
    return this.http.post(this.urlEndPoint, formData, {responseType: 'text'})
                    .pipe(map(
                               (response) =>
                                {  response as any;
                                   console.log(response);
                                }
                            ),
                    catchError((e) => {
                        //console.error(e.error.mensaje);
                        swal.fire("Error al importar el proyecto", e.error.mensaje,"error");
                        return throwError(() => e);
                    })
                );

  }



}
