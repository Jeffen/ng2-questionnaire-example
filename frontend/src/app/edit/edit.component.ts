import { Component, OnInit } from '@angular/core';

import { QuestionnaireModel, QuestionnaireState } from '../shared/model/questionnaire.models';
import { QuestionType } from '../shared/model/question.model';

declare var $: any;
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  private questionnaire: QuestionnaireModel;
  private id: string;

  constructor() {
    this.questionnaire = {
      title: '',
      starter: '',
      ending: '',
      state: QuestionnaireState.Created,
      questionList: []
    };
  }

  ngOnInit() {
    $('.menu .item').tab();
  }

}
