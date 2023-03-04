import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// マテリアルデザイン
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import {MatMenuModule} from '@angular/material/menu';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';

// my-app
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { TestQuestionsComponent } from './test-questions/test-questions.component';
import { MatToolbarComponent } from './mat-toolbar/mat-toolbar.component';
import { MatSidenavComponent } from './mat-sidenav/mat-sidenav.component';
import { MatGridListComponent } from './mat-grid-list/mat-grid-list.component';
import { SignupComponent } from './signup-form/signup-form.component';
import { LogoutComponent } from './logout-form/logout-form.component';

// my-service
import { MatSidenavService } from './mat-sidenav.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    TestQuestionsComponent,
    MatToolbarComponent,
    MatSidenavComponent,
    MatGridListComponent,
    SignupComponent,
    LogoutComponent,
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
  ],
  providers: [MatSidenavService],
  bootstrap: [AppComponent]
})
export class AppModule { }
