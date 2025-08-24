import { Routes } from '@angular/router';


import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard';
import { ClientOrderComponent } from './components/client-order/client-order';
import { SetupMenuComponent } from './components/dish-card/setup-menu.component';

export const routes: Routes = [
  { path: 'client-order', component: ClientOrderComponent },
  // other routes...
  { path: 'admin-dashboard', component: AdminDashboardComponent },
  { path: 'setup-menu', component: SetupMenuComponent },
  { path: '', redirectTo: '/client-order', pathMatch: 'full' }
];



