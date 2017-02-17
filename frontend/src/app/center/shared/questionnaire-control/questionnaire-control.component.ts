import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

import { QuestionModel } from '../../../shared/model/question.model';
declare var $: any;

@Component({
  selector: 'app-questionnaire-control',
  templateUrl: './questionnaire-control.component.html',
  styleUrls: ['./questionnaire-control.component.css']
})
export class QuestionnaireControlComponent implements OnInit {
  @Input() questionnaire: QuestionModel;
  @Output() onDeleteRequest = new EventEmitter();
  @Output() onPublishRequest = new EventEmitter();
  @Output() onFinishRequest = new EventEmitter();

  constructor(private router: Router) { }

  ngOnInit() {
  }
  onPreview() {
    
  }
  onEdit() {
    const URL = 'admin/edit';
    this.router.navigate([URL, this.questionnaire['id']]);
  }
  onPublish() {
    console.log('on Publish');
    this.onPublishRequest.emit();
  }
  onDeleteConfirm() {
    $('.ui.modal').modal('show');
  }
  onDelete() {
    this.onDeleteRequest.emit();
  }
  onFinish() {
    this.onFinishRequest.emit();
  }
}
