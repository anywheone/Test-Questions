import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupComponent {
  SignupForm!: FormGroup;
  passwordVisible: string = "visibility";

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.SignupForm = this.formBuilder.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit(): void {
    // ログイン処理
  }

  togglePasswordVisibility(): void {
    if(this.passwordVisible == "visibility"){
      this.passwordVisible = "visibility_off";
    }
    else{
      this.passwordVisible = "visibility";
    }
  }
}
