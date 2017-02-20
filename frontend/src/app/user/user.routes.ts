import { RouterModule, Route } from '@angular/router';

import { LoginComponent } from './shared/login/login.component';
import { RegisterComponent } from './shared/register/register.component';

export const UserRoutes: Route[] = [
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent }
];
