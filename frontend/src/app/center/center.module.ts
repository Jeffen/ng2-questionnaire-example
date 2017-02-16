import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CenterComponent } from './center.component';
import { CenterSharedModule } from './shared/center-shared.module';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CenterComponent
  ]
})
export class CenterModule { }