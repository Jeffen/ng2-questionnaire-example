import { NgModule, } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { CenterComponent } from './center.component';
import { CenterSharedModule } from './shared/center-shared.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    CenterSharedModule
  ],
  declarations: [
    CenterComponent
  ]
})
export class CenterModule { }