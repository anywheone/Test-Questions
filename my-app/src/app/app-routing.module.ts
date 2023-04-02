import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { TestQuestionsComponent } from './test-questions/test-questions.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { MatSidenavComponent } from './mat-sidenav/mat-sidenav.component';
import { MatGridListComponent } from './mat-grid-list/mat-grid-list.component';
import { SignupComponent } from './signup-form/signup-form.component';
import { LogoutComponent } from './logout-form/logout-form.component';
import { CreateTestComponent } from './create-test/create-test/create-test.component';

// このルーターの設定により、<router-outlet></router-outlet>を利用できる
const routes: Routes = [
  // { path: '', component: AppComponent },
  { path: '', redirectTo: '/test-questions', pathMatch: 'full' },
  { path: 'test-questions', component: TestQuestionsComponent },
  { path: 'login-form', component: LoginFormComponent },
  { path: 'mat-sidenav', component: MatSidenavComponent },
  { path: 'mat-grid-list', component: MatGridListComponent },
  { path: 'signup-form', component: SignupComponent },
  { path: 'logout-form', component: LogoutComponent },
  { path: 'create-test', component: CreateTestComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
