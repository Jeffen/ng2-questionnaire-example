import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { QuestionnaireModel, QuestionnaireState } from '../shared/model/questionnaire.models';
import { QuestionType } from '../shared/model/question.model';
import { QuestionnaireService } from '../core/service/questionnaire.service';

declare var $: any;
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  private questionnaire: QuestionnaireModel;
  private id: string;

  constructor(
    private questionnaireService: QuestionnaireService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
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
    this.id = this.activatedRoute.snapshot.params['id'];
    if (this.id && this.id !== '0') {
      this.questionnaireService.getQuestionnaireById(this.id)
          .subscribe(
            res => this.questionnaire = res,
            error => console.log('Error: ', error)
          );
    }
  }

  onAddQuestion(type: QuestionType) {
    switch (type) {
      case QuestionType.Text: // Warn: There should be something...
      case QuestionType.Score:
        this.questionnaire.questionList.push({
          title: '请点击“编辑”按钮来修改问题标题',
          type: type,
          answer: ''
        });
        break;
      case QuestionType.SingleSelect:
       this.questionnaire.questionList.push({
         title: '请点击“编辑”按钮来修改问题标题',
         type: type,
         options: [{'key': 0, 'value': '选项1'}],
         answer: ''
       });
        break;
      case QuestionType.MultiSelect:
        this.questionnaire.questionList.push({
          title: '请点击“编辑”按钮来修改问题标题',
          type: type,
          options: [{'key': 0, 'value': '选项1'}],
          answer: {}
        });
          break;
    }
  }
  onSubmitQuestionnaire(questionnaire: QuestionnaireModel) {
    if (questionnaire.state === QuestionnaireState.Created) {
      if (this.id && this.id !== '0') {
        this.questionnaireService.updateQuestionnaire(questionnaire)
            .subscribe(
              res => console.log('Questionnaire Updated'), error => console.log(error)// Warn: 此处要替换成跳转命令
            );
      } else {
        this.questionnaireService.addQuestionnaire(questionnaire)
            .subscribe(
              res => console.log('Questionnaire Created'), error => console.log(error)// Warn: 此处要替换成跳转命令
            );
      }
    }
  }
}
