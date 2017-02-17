import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { QuestionnaireModel } from '../../../shared/model/questionnaire.models';

@Component({
  selector: 'app-questionnaire-detail',
  templateUrl: './questionnaire-detail.component.html',
  styleUrls: ['./questionnaire-detail.component.css']
})
export class QuestionnaireDetailComponent implements OnInit {
@Input() questionnaire: QuestionnaireModel;

  constructor() { }

  ngOnInit() {

  }
}
