import { Component, Input } from '@angular/core';
import { QuestionnaireModel } from '../../../shared/model/questionnaire.models';

@Component({
  selector: 'questionnaire-outline',
  templateUrl: './questionnaire-outline.component.html',
  styleUrls: ['./questionnaire-outline.component.css']
})
export class QuestionnaireOutlineComponent {

  @Input() questionnaire: QuestionnaireModel;

}
