import { RouterModule, Route } from '@angular/router';
import { EditComponent } from './edit.component';

export const EditRoutes: Route[] = [
    { path: 'edit/:id', component: EditComponent }
];
