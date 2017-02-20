import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Http } from '@angular/http';
import { Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';

import { FieldBase } from '../../user/shared/field/field-base';
import { FieldText } from '../../user/shared/field/field-text';
import { FieldValidators } from '../../user/shared/field/field-validator';
import { SITE_HOST_URL } from '../../shared/config/env.config';
import { UserService } from './user.service';

@Injectable()
export class LoginService {

  private loginUrl = `${SITE_HOST_URL}login`;

  constructor(private http: Http, private userService: UserService) { }

  getFields() {
    const fields: FieldBase<any>[] = [
      new FieldText({
        key: 'username',
        label: '用户名',
        value: '',
        required: true,
        pattern: 'username',
        order: 1
      }),
      new FieldText({
        key: 'password',
        label: '密码',
        type: 'password',
        value: '',
        required: true,
        pattern: 'password',
        order: 2
      }),
    ];
    return fields.sort((a, b) => a.order - b.order);
  }

  toFormGroup(fields: FieldBase<any>[]) {
    const group: any = {};

    fields.forEach(field => {
      group[field.key] =
        field.pattern ?
          new FormControl(field.value || '', (<any>FieldValidators)[field.pattern]) :
          field.required ?
            new FormControl(field.value || '', Validators.required) :
            new FormControl(field.value || '');
    });
    return new FormGroup(group);
  }

  login(data: Object) {
    const body = JSON.stringify(data);
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return new Observable((observer: Observer<any>) => {
       this.http.post(this.loginUrl, body, { headers }).subscribe(res => {
         const resbody = res.json();
         if (resbody && resbody.success) {
          this.userService.isLogin = true;
          this.userService.userName = data['username'];
           observer.next(res);
           observer.complete();
         }
       });
    });
  }

  logout() {
    this.userService.isLogin = false;
    this.userService.userName = '';
  }
}
