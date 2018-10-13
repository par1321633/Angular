import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { SignupFormComponent } from './signup-form/signup-form.component';

import { FormsModule } from '@angular/forms';
import { SignupComponent } from './signup/signup.component';


import { MatInputModule, MatButtonModule,MatIconModule } from '@angular/material';




@NgModule({
  declarations: [
    AppComponent,
    SignupFormComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
