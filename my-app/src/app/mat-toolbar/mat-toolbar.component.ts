import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatSidenavService } from '../mat-sidenav.service';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-mat-toolbar',
  templateUrl: './mat-toolbar.component.html',
  styleUrls: ['./mat-toolbar.component.css'],
})
export class MatToolbarComponent {
  // implements OnInit
  // @ViewChild('sidenav') public sidenav!: MatSidenav;

  // Angularが当コンポーネントに必要なサービスや依存関係をコンストラクターのパラメータで判断する
  // インスタンスがまだ存在しない場合、app.module.tsのProviderを利用しインジェクターにインスタンスを追加
  constructor(
    private router: Router,
    private _sidenavService: MatSidenavService
  ) {
    // this._sidenavService.matSidenavToggle();
  }

  // public ngOnInit(): void {
  //   this._sidenavService.setSidenav(this.sidenav);
  // }

  // public ngAfterViewInit(): void {
  //   this.sidenavService.setSidenav(this.sidenav);
  // }

  onHamburgerMenuClick() {
    console.log('HamburgerMenu clicked!');
    this._sidenavService.matSidenavToggle();
  }

  onHomeClick() {
    console.log('Home clicked!');
    this.router.navigate(['/']);
  }

  onLogInClick() {
    console.log('Login clicked!');
    this.router.navigate(['/login-form']);
  }

  onSignUpClick() {
    console.log('SignUp clicked!');
    this.router.navigate(['/signup-form']);
  }

  onLogOutClick() {
    console.log('LogOut clicked!');
    this.router.navigate(['/logout-form']);
  }

  onMyPageClick() {
    console.log('MyPage clicked!');
    this.router.navigate(['/mypage']);
  }
}
