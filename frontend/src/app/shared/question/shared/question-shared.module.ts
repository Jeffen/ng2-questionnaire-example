import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { QuestionComponent } from '../question.component';
import { QuestionTextComponent } from './question-text/question-text.component';
import { QuestionRadioComponent } from './question-radio/question-radio.component';
import { QuestionScoreComponent } from './question-score/question-score.component';
import { QuestionCheckboxComponent } from './question-checkbox/question-checkbox.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    QuestionTextComponent,
    QuestionRadioComponent,
    QuestionScoreComponent,
    QuestionCheckboxComponent
  ],
  exports: [
    QuestionTextComponent,
    QuestionRadioComponent,
    QuestionScoreComponent,
    QuestionCheckboxComponent
  ]
})
export class QuestionSharedModule { }
