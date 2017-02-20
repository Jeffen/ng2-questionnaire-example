import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeRoutes } from './home/home.routes';
import { PublishRoutes } from './publish/publish.routes';
import { UserRoutes } from './user/user.routes';

export const routes: Routes = [
    ...HomeRoutes,
    ...PublishRoutes,
    ...UserRoutes
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}
