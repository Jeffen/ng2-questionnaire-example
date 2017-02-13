import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { QuestionType } from '../../../shared/model/question.model';

@Component({
  selector: 'question-select',
  templateUrl: './question-select.component.html',
  styleUrls: ['./question-select.component.css']
})

export class QuestionSelectComponent implements OnInit {

  @Output() addQuestionRequest = new EventEmitter();

  private controls: any[];

  constructor() {
    this.controls = [
      {type: QuestionType.Text, label: '文本问题', iconClass: 'icon font'},
      {type: QuestionType.SingleSelect, label: '单选问题', iconClass: 'icon selected radio'},
      {type: QuestionType.MultiSelect, label: '多选问题', iconClass: 'icon checkmark box'},
      {type: QuestionType.Score, label: '分值问题', iconClass: 'icon star'}
    ];
  }

  onAddQuestion(control: any) {
    console.log(control.type);
    this.addQuestionRequest.emit(control.type);
  }

  ngOnInit() {
  }

}
