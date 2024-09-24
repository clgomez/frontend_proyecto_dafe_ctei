import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private abruptExitSource = new Subject<void>();

  abruptExit$ = this.abruptExitSource.asObservable();

  notifyAbruptExit(): void {
    this.abruptExitSource.next();
  }
}
