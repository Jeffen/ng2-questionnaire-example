import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminComponent } from './admin.component';
import { AboutRoutes } from '../about/about.routes';
import { EditRoutes } from '../edit/edit.routes';
import { CenterRoutes } from '../center/center.route';

const routes: Routes = [
    {
        path: 'admin',
        component: AdminComponent,
        children: [
            ...AboutRoutes,
            ...EditRoutes,
            ...CenterRoutes
        ]
    }
];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
})
export class AdminRoutingModule {}
