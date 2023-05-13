import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

// マテリアルデザイン
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';

// my-app
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { TestQuestionsComponent } from './test-questions/test-questions.component';
import { MatToolbarComponent } from './mat-toolbar/mat-toolbar.component';
import { MatSidenavComponent } from './mat-sidenav/mat-sidenav.component';
import { MatGridListComponent } from './mat-grid-list/mat-grid-list.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { LogoutFormComponent } from './logout-form/logout-form.component';
import { CreateTestComponent } from './create-test/create-test/component/create-test.component';
import { CreateTestItemComponent } from './create-test/create-test-item/create-test-item.component';
import { MypageFormComponent } from './mypage-form/mypage-form/mypage-form.component';

// my-service
import { MatSidenavService } from './mat-sidenav.service';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    TestQuestionsComponent,
    MatToolbarComponent,
    MatSidenavComponent,
    MatGridListComponent,
    SignupFormComponent,
    LogoutFormComponent,
    CreateTestComponent,
    CreateTestItemComponent,
    MypageFormComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatGridListModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    StoreModule.forRoot({}, {}),
    StoreModule.forRoot(reducers, {
      metaReducers,
    }),
    HttpClientModule,
  ],
  providers: [MatSidenavService],
  bootstrap: [AppComponent],
})
export class AppModule {}
