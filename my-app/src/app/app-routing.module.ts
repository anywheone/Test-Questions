import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { TestQuestionsComponent } from './test-questions/test-questions.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { MatSidenavComponent } from './mat-sidenav/mat-sidenav.component';
import { MatGridListComponent } from './mat-grid-list/mat-grid-list.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { LogoutFormComponent } from './logout-form/logout-form.component';
import { CreateTestComponent } from './create-test/create-test/component/create-test.component';
import { MypageFormComponent } from './mypage-form/mypage-form/mypage-form.component';

// このルーターの設定により、<router-outlet></router-outlet>を利用できる
const routes: Routes = [
  // { path: '', component: AppComponent },
  { path: '', redirectTo: '/test-questions', pathMatch: 'full' },
  { path: 'test-questions', component: TestQuestionsComponent },
  { path: 'login-form', component: LoginFormComponent },
  { path: 'mat-sidenav', component: MatSidenavComponent },
  { path: 'mat-grid-list', component: MatGridListComponent },
  { path: 'signup-form', component: SignupFormComponent },
  { path: 'logout-form', component: LogoutFormComponent },
  { path: 'create-test', component: CreateTestComponent },
  { path: 'mypage', component: MypageFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
