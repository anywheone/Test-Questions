import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // template: ``
})

export class AppComponent implements OnInit {
  title = 'my-app';
  showFiller = false;

  constructor(private router: Router) {}

  ngOnInit() {}

  goToTestScreen() {
    this.router.navigate(['/test-questions']);
  }
}
