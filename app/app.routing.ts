import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import * as pages from './pages';

const appRoutes: Routes = [
    {
        path: '',
        component: pages.HomePage,
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
