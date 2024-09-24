import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';
import { PrimeNGConfig } from 'primeng/api';
import { NavigationStateService } from './demo/service/estadonavegacion.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

    private previousUrl: string | null = null;

    constructor(private primengConfig: PrimeNGConfig, private router: Router, private navigationStateService: NavigationStateService) { }

    ngOnInit() {
        this.primengConfig.ripple = true;

        this.router.events.subscribe(event => {
            if (event instanceof NavigationStart) {
              // Registrar el inicio de navegación
              this.navigationStateService.setNavigationStatus('none');
              this.previousUrl = event.url;
            } else if (event instanceof NavigationEnd || event instanceof NavigationCancel) {
              // Navegación normal o cancelada
              if (this.previousUrl === event.url) {
                this.navigationStateService.setNavigationStatus('normal');
              }
            } else if (event instanceof NavigationError) {
              // Manejar errores de navegación
              this.navigationStateService.setNavigationStatus('abrupt');
            }
          });
        }

}
