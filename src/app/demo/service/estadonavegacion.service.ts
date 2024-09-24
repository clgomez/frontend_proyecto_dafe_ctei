import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavigationStateService {
  private navigationStatus: 'abrupt' | 'normal' | 'none' = 'none';

  setNavigationStatus(status: 'abrupt' | 'normal' | 'none'): void {
    this.navigationStatus = status;
  }

  getNavigationStatus(): 'abrupt' | 'normal' | 'none' {
    return this.navigationStatus;
  }
}
