import { Routes } from '@angular/router';
import { MainLayoutComponent } from './shared/layout/main-layout/main-layout.component';

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [{
        path: 'dashboard',
        loadChildren: () => import('./feature/dashboard/dashboard.routes')
        .then(m => m.DASHBOARD_ROUTES)
    }],
  },
];
