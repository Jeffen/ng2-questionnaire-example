import { RouterModule, Route } from '@angular/router';
import { EditComponent } from './edit.component';
import { AuthGuard } from '../core/service/auth-guard.service';
export const EditRoutes: Route[] = [
    { path: 'edit/:id', component: EditComponent, canActivate: [AuthGuard] }
];
