import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-test-questions',
  templateUrl: './test-questions.component.html',
  styleUrls: ['./test-questions.component.css']
})
export class TestQuestionsComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  goToMainScreen() {
    this.router.navigate(['/']);
  }
}
