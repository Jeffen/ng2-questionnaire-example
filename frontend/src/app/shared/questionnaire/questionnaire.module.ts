import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { QuestionnaireComponent } from './questionnaire.component';
import { QuestionModule } from '../question/question.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    QuestionModule
  ],
  declarations: [
    QuestionnaireComponent
  ],
  exports: [
    QuestionnaireComponent
  ]
})
export class QuestionnaireModule { }
