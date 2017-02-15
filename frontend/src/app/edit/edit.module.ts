import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { EditComponent } from './edit.component';
import { EditSharedModule } from './shared/edit.shared.module';
import { QuestionnaireModule } from '../shared/questionnaire/questionnaire.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    EditSharedModule,
    QuestionnaireModule
  ],
  declarations: [
    EditComponent
  ],
  exports: [ EditComponent, EditSharedModule ]
})
export class EditModule { }
