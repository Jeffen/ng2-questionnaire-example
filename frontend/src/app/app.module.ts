import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { HomeModule } from './home/home.module';
import { AboutModule } from './about/about.module';
import { AdminModule } from './admin/admin.module';
import { CoreModule } from './core/core.module';
import { EditModule } from './edit/edit.module';
import { CenterModule } from './center/center.module';
import { PublishModule } from './publish/publish.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    HomeModule,   // 首页模块
    AboutModule,
    AdminModule,
    CoreModule,
    EditModule,
    CenterModule,
    PublishModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
