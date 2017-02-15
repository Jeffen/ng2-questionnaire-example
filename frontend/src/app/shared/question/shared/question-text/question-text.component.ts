import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { QuestionComponent } from '../../question.component';
import { QuestionModel } from '../../../model/question.model';

@Component({
  selector: 'app-question-text',
  templateUrl: './question-text.component.html'
})
export class QuestionTextComponent extends QuestionComponent {

  @Input() question: QuestionModel;
  @Input() editable: boolean;
  @Output() deleteQuestionRequest: EventEmitter<any> = new EventEmitter();
}
