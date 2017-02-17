import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeRoutes } from './home/home.routes';
import { PublishRoutes } from './publish/publish.routes';

export const routes: Routes = [
    ...HomeRoutes,
    ...PublishRoutes
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}
