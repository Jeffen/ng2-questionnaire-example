import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { QuestionnaireModel, QuestionnaireState } from '../model/questionnaire.models';

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.css']
})
export class QuestionnaireComponent implements OnInit {

  @Input() questionnaire: QuestionnaireModel;
  @Output() submitQuestionnaire = new EventEmitter();

  private editable: boolean;

  ngOnInit() {
    this.editable = this.questionnaire && this.questionnaire.state === QuestionnaireState.Created;
  }

  onDeleteQuestion(index: number) {
    this.questionnaire.questionList.splice(index, 1);
  }

  onSubmit() {
    this.submitQuestionnaire.emit(this.questionnaire);
    console.log('Submit button hit', this.questionnaire);
  }
}
