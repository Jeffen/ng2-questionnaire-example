import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { QuestionnaireModel, QuestionnaireState } from '../../../shared/model/questionnaire.models';

@Component({
  selector: 'app-questionnaire-item',
  templateUrl: './questionnaire-item.component.html',
  styleUrls: ['./questionnaire-item.component.css']
})
export class QuestionnaireItemComponent implements OnInit, OnChanges {
  @Input() questionnaire: QuestionnaireModel;
  stateText: string;
  stateClass: string;

  constructor() { }

  ngOnInit() {
    this.setStates();
  }
  ngOnChanges(changes: SimpleChanges) {
    const QChange = changes['questionnaire'];
    if (QChange.previousValue.state && QChange.currentValue.state !== QChange.previousValue.state) {
      this.questionnaire = changes['questionnaire'].currentValue;
      this.setStates();
    }
  }
  setStates() {
    switch (this.questionnaire.state) {
      case QuestionnaireState.Created:
        this.stateText = '已创建';
        this.stateClass = 'ui green';
        break;
      case QuestionnaireState.Finished:
        this.stateText = '已回收';
        this.stateClass = 'ui blue';
        break;
      case QuestionnaireState.Published:
        this.stateText = '已发布';
        this.stateClass = '';
        break;
    }
  }

}
