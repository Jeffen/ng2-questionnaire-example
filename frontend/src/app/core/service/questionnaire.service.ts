import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { QuestionnaireModel } from '../../shared/model/questionnaire.models';
import { SITE_HOST_URL } from '../../shared/config/env.config';

@Injectable()
export class QuestionnaireService {

  constructor(private http: Http) { }

  private handleError(error: Response) {
    console.log(error);
    return Observable.throw(error.json().error || 'Server error');
  }

  getQuestionnaireById(id: string) {
    return this.http.get(SITE_HOST_URL + 'questionnaire/' + id)
                    .map(res => <QuestionnaireModel>res.json().data)
                    .catch(this.handleError);
  }

  getQuestionnaire() {
    return this.http.get(SITE_HOST_URL + 'questionnaire')
                    .map(res => <QuestionnaireModel>res.json().data)
                    .catch(this.handleError);
  }

  addQuestionnaire(questionnaire: QuestionnaireModel) {
    const body = JSON.stringify(questionnaire);
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });

    return this.http.post(SITE_HOST_URL + 'questionnaire/add', body, options)
               .map(res => <QuestionnaireModel>res.json().data)
               .catch(this.handleError);
  }

  deleteQuestionnaire(id: string) {
    return this.http.get(SITE_HOST_URL + 'questionnaire/delete' + id)
               .map(res => <Object>res.json().data)
               .catch(this.handleError);
  }

  updateQuestionnaire(questionnaire: QuestionnaireModel) {
    const body = JSON.stringify(questionnaire);
    const headers = new Headers({ 'Content-Type': 'application/json'});
    const options = new RequestOptions({ headers: headers });

    return this.http.post(SITE_HOST_URL + 'questionnaire/update', body, options)
               .map(res => <QuestionnaireModel>res.json().data)
               .catch(this.handleError);
  }

  publishQestionnaire(questionnaire: QuestionnaireModel) {
    return this.http.get(SITE_HOST_URL + 'questionnaire/publish')
               .map(res => <QuestionnaireModel>res.json().data)
               .catch(this.handleError);
  }
}
