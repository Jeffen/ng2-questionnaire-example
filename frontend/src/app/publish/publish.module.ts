import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublishComponent } from './publish.component';
import { QuestionnaireModule } from '../shared/questionnaire/questionnaire.module';

@NgModule({
  imports: [
    CommonModule,
    QuestionnaireModule
  ],
  declarations: [
    PublishComponent
  ]
})
export class PublishModule { }
