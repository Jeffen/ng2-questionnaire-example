import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { QuestionnaireModel, QuestionnaireState } from '../shared/model/questionnaire.models';

import { QuestionnaireService } from '../core/service/questionnaire.service';

@Component({
  selector: 'app-center',
  templateUrl: './center.component.html',
  styleUrls: ['./center.component.css']
})
export class CenterComponent implements OnInit {
  questionnaires: QuestionnaireModel[];
  selectedQuestionnaire: QuestionnaireModel;
  key: number;
  isEmpty = true;

  constructor(
    private questionnaireService: QuestionnaireService,
    private cd: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.questionnaireService.getQuestionnaire()
        .subscribe(
          res => {
            console.log(res);
            if (res.length !== 0) {
              this.questionnaires = res;
              this.isEmpty = false;
            }
          },
          error => console.log(error)
        );
  }

  onSelect(item: QuestionnaireModel, i: number): void {
    this.selectedQuestionnaire = item;
    this.key = i;
  }
  onDelete() {
    this.questionnaireService.deleteQuestionnaire(this.selectedQuestionnaire.id)
        .subscribe(
          res => {
            console.log('Successfully Deleted');
            this.questionnaires.splice(this.key, 1);
            this.selectedQuestionnaire = null;
          }, err => console.log(err)
        );
  }
  onPublish() {
    this.questionnaireService.publishQestionnaire(this.selectedQuestionnaire.id)
      .subscribe(res => {
        console.log('Successfully Published');
        this.selectedQuestionnaire.state = QuestionnaireState.Published;
        this.questionnaires[this.key] = Object.assign({}, this.selectedQuestionnaire);
        this.cd.detectChanges();
      }, err => console.log(err));
  }
}
