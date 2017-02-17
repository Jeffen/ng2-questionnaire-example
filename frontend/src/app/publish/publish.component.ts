import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { QuestionnaireService } from '../core/service/questionnaire.service';
import { QuestionnaireModel } from '../shared/model/questionnaire.models';

@Component({
  selector: 'app-publish',
  templateUrl: './publish.component.html',
  styleUrls: ['./publish.component.css']
})
export class PublishComponent implements OnInit {
  questionnaire: QuestionnaireModel;
  preview = false;

  constructor(
    private qs: QuestionnaireService,
    private ar: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    this.qs.getQuestionnaireById(this.ar.snapshot.params['id'])
        .subscribe(
          res => {
            this.questionnaire = res;
            this.preview = this.ar.snapshot.params['type'] === 'preview' ? true : false;
          },
          err => console.log(err)
        );
  }
  goBack() {
    this.location.back();
  }
}
