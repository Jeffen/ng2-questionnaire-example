import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FieldComponent } from './field/field.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [LoginComponent, RegisterComponent, FieldComponent],
  exports: [
    LoginComponent,
    RegisterComponent,
    FieldComponent
  ]
})
export class UserSharedModule { }
