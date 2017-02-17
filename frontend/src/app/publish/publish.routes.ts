import { RouterModule, Route } from '@angular/router';
import { PublishComponent } from './publish.component';

export const PublishRoutes: Route[] = [
    { path: 'publish/:id', component: PublishComponent }
];
