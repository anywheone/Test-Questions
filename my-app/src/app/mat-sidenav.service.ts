import { Injectable } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { MatSidenavComponent } from './mat-sidenav/mat-sidenav.component';



@Injectable({
  // @Injectable() デコレーターに含めることによって、サービスのためにプロバイダーをルートインジェクターに登録
  // ルートレベルでサービスを提供
  providedIn: 'root'
})
export class MatSidenavService {
  private _isOpen!: boolean;

  // constructor(private _sidenav: MatSidenavComponent){}

  public setSidenavState(isOpen : boolean): void {
    console.log('setSidenavメソッドコール');
    this._isOpen = isOpen;
  }

  public matSidenavToggle(): void {
    console.log('toggleメソッドコール');
    this._isOpen;
    // this._sidenav.toggle();
  }
}
