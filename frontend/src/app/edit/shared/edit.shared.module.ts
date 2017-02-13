import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuestionSelectComponent } from './question-select/question-select.component';
import { QuestionnaireOutlineComponent } from './questionnaire-outline/questionnaire-outline.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    QuestionSelectComponent,
    QuestionnaireOutlineComponent
  ],
  exports: [
    QuestionSelectComponent,
    QuestionnaireOutlineComponent
  ]
})
export class EditSharedModule { }
