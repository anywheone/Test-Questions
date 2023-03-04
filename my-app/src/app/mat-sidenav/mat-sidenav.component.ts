import { Component, ViewChild, OnInit, AfterViewInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { MatSidenav } from '@angular/material/sidenav';
import { MatSidenavService } from '../mat-sidenav.service';

@Component({
  selector: 'app-mat-sidenav',
  templateUrl: './mat-sidenav.component.html',
  styleUrls: ['./mat-sidenav.component.css']
})
export class MatSidenavComponent implements AfterViewInit{
  // implements OnInit
  @ViewChild('sidenav') public sidenav!: MatSidenav;
  isOpen: boolean = true;

  constructor(private router: Router, private sidenavService: MatSidenavService) {}

  public ngAfterViewInit(): void {
    this.sidenavService.setSidenavState(this.isOpen);
  }
}

// import { Component, ViewChild } from '@angular/core';
// import { Router } from '@angular/router';
// import { MatSidenav } from '@angular/material/sidenav';
// import { MatSidenavService } from '../mat-sidenav.service';

// @Component({
//   selector: 'app-mat-sidenav',
//   templateUrl: './mat-sidenav.component.html',
//   styleUrls: ['./mat-sidenav.component.css']
// })
// export class MatSidenavComponent {
//   @ViewChild('sidenav') public sidenav!: MatSidenav;

//   constructor(private router: Router, private sidenavService: MatSidenavService) {}

//   ngAfterViewInit(): void {
//     this.sidenavService.setSidenav(this.sidenav);
//   }

//   public toggleSidenav(): void {
//     this.sidenavService.toggle();
//   }
// }
