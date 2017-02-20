import { RouterModule, Route } from '@angular/router';
import { CenterComponent } from './center.component';
import { AuthGuard } from '../core/service/auth-guard.service';

export const CenterRoutes: Route[] = [
    { path: 'center', component: CenterComponent, canActivate: [AuthGuard] }
];
