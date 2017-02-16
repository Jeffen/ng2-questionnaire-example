import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionnaireControlComponent } from './questionnaire-control/questionnaire-control.component';
import { QuestionnaireDetailComponent } from './questionnaire-detail/questionnaire-detail.component';
import { QuestionnaireItemComponent } from './questionnaire-item/questionnaire-item.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [QuestionnaireControlComponent, QuestionnaireDetailComponent, QuestionnaireItemComponent],
  exports: [QuestionnaireControlComponent, QuestionnaireDetailComponent, QuestionnaireItemComponent]
})
export class CenterSharedModule { }
