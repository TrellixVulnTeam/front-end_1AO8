import { Routes } from '@angular/router';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const errorRoutes: Routes = [
    { path: 'page-not-found', component: PageNotFoundComponent }
];