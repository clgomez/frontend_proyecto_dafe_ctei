import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [RouterModule.forChild([
        //{ path: '', loadChildren: () => import('./proyectos/proyectos.module').then(m => m.ProyectosModule) },
        { path: 'proyectos', loadChildren: () => import('./proyectos/proyectos.module').then(m => m.ProyectosModule) },
        { path: 'formproyecto', loadChildren: () => import('./formproyecto/formproyecto.module').then(m => m.FormProyectoModule) },
        { path: 'formproyecto/:id', loadChildren: () => import('./formproyecto/formproyecto.module').then(m => m.FormProyectoModule) },
        { path: 'formvistapreviaproyecto', loadChildren: () => import('./formvistapreviaproyecto/formvistapreviaproyecto.module').then(m => m.FormVistaPreviaProyectoModule) },
        { path: 'file-upload', loadChildren: () => import('./file-upload/file-upload.module').then(m => m.FileUploadModule) },
        { path: 'calificacion', loadChildren: () => import('./calificacion/calificacion.module').then(m => m.CalificacionModule) },
        { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
        { path: '**', redirectTo: '/notfound' }
    ])],
    exports: [RouterModule]
})
export class HomePageRoutingModule { }
