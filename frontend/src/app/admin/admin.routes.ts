import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminComponent } from './admin.component';
import { AboutRoutes } from '../about/about.routes';
import { EditRoutes } from '../edit/edit.routes';

const routes: Routes = [
    {
        path: 'admin',
        component: AdminComponent,
        children: [
            ...AboutRoutes,
            ...EditRoutes
        ]
    }
];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
})
export class AdminRoutingModule {}
