import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { QuestionComponent } from './question.component';
import { QuestionSharedModule } from './shared/question-shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    QuestionSharedModule
  ],
  exports: [
    QuestionSharedModule
  ]
})
export class QuestionModule { }
