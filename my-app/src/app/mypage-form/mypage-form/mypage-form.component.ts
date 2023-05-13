import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mypage-form',
  templateUrl: './mypage-form.component.html',
  styleUrls: ['./mypage-form.component.css'],
})
export class MypageFormComponent {
  constructor(private router: Router) {}

  onCreateTestClick() {
    console.log('create-test clicked!');
    this.router.navigate(['/create-test']);
  }
}
