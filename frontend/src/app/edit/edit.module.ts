import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditComponent } from './edit.component';
import { EditSharedModule } from './shared/edit.shared.module';
import {  } from '../shared/questionnaire/';

@NgModule({
  imports: [
    CommonModule,
    EditSharedModule
  ],
  declarations: [
    EditComponent
  ]
})
export class EditModule { }
