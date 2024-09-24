import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FileUploadService } from 'src/app/demo/service/file-upload.service';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})


export class FileUploadComponent {
  selectedFile: File | null = null;
  responseMessage: string | null = null;

  constructor(private fileUploadService: FileUploadService, private router: Router) { }

  onFileChange(event: any): void {
    const file = event.target.files[0];
    if (file) {
      this.selectedFile = file;

    }else this.selectedFile = null;
  }

  onSubmit(): void {
    if (this.selectedFile) {
      this.fileUploadService.upload(this.selectedFile).subscribe({
        next: (response) => {
          this.router.navigate(['/']);
          alert('Archivo cargado exitosamente');
          this.selectedFile = null;

        },
        error: (error) => {
          alert('Error al cargar el archivo');
          this.selectedFile = null;

        }
      });
    }
  }
}


/*
export class FileUploadComponent {
    selectedFile?: File;
    response: string | undefined;

    constructor(private fileUploadService: FileUploadService) { }

    onFileChange(event: any): void {
      if (event.target.files.length > 0) {
        this.selectedFile = event.target.files[0];
      }
    }

    uploadFile(): void {
        if (this.selectedFile) {
          this.fileUploadService.uploadFile(this.selectedFile).subscribe({
            next: (data: string) => this.response = data,
            error: (error: any) => {
              //console.error('Upload error:', error);
              alert('An error occurred while uploading the file.');
            }
        });
        } else {
          alert('Please select a file first.');
        }
      }
  }
*/



/*
export class FileUploadComponent {
    selectedFile: File | null = null;
    responseMessage: string | null = null;
    private urlEndpoint: string;

    constructor(private http: HttpClient) {}

    onFileChange(event: any) {
      if (event.target.files.length > 0) {
        this.selectedFile = event.target.files[0];
      }
    }

    onSubmit() {

        this.urlEndpoint = 'http://localhost:8081/api/files/upload';
      if (this.selectedFile) {
        const formData = new FormData();
        formData.append('file', this.selectedFile);

        this.http.post(this.urlEndpoint, formData, { responseType: 'text' }).subscribe(response => {
          console.log(response);
          console.log("formato ok");
        }, error => {
          console.error(error);
          console.log("formato paila");
        });
      }
    }
  }
*/
