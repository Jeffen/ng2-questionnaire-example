import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NavbarComponent } from './navbar/navbar.component';
import { QuestionnaireService } from './service/questionnaire.service';
import { UserService, LoginService, RegisterService, AuthGuard } from './service/index';
@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    NavbarComponent
  ],
  exports: [NavbarComponent],
  providers: [
    QuestionnaireService,
    UserService,
    LoginService,
    RegisterService,
    AuthGuard
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import it in the AppModule only');
    }
  }
}
